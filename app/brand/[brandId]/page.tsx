'use client'

import { useState, useEffect, Suspense } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import LoginModal from '@/components/LoginModal'
import BrandPageContent from '@/components/BrandPageContent'

interface Story {
  story_id: number
  url: string
  brand_name: string
  username: string
  total_views: number
}

interface StoriesResponse {
  statusCode: number
  status: string
  message: string | null
  data: Story[]
}

interface BrandPost {
  url: string
  is_purchased: boolean
  brand_name?: string;
}

async function fetchBrandStories(brandId: string): Promise<Story[]> {
  try {
    const url = `/api/stories/${brandId}`
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    })
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const result: StoriesResponse = await response.json()
    
    if (result.statusCode === 200 && result.status === 'success') {
      return result.data || []
    } else {
      throw new Error(result.message || 'Failed to fetch brand stories')
    }
  } catch (error) {
    console.error('Error fetching brand stories:', error)
    return []
  }
}

async function fetchBrandPosts(
  brandId: string,
  page = 0,
  pageSize = 20
): Promise<BrandPost[]> {

  try {
    const res = await fetch(
      `/api/brand-posts/${brandId}?page=${page}&pageSize=${pageSize}`,
      {
        method: 'GET',
        headers: { Accept: 'application/json' }
      }
    )

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`)
    }

    const result = await res.json()

    if (result.statusCode === 200 && result.status === 'success') {
      return result.data || []
    }

    return []
  } catch (err) {
    console.error('Error fetching brand posts:', err)
    return []
  }
}


function BrandPageContentWrapper() {
  const params = useParams()
  const brandId = params?.brandId as string || '1'

  const [loading, setLoading] = useState(true)
  const [stories, setStories] = useState<Story[]>([])
  const [showModal, setShowModal] = useState(false)
  const [brandName, setBrandName] = useState<string>('')
  const [posts, setPosts] = useState<BrandPost[]>([])

  useEffect(() => {
    const loadBrandData = async () => {
      setLoading(true)
  
      try {
        // fetch stories
        const storiesData = await fetchBrandStories(brandId)
  
        // fetch purchased + non-purchased posts
        const postsData = await fetchBrandPosts(brandId)
  
        setStories(storiesData)
        setPosts(postsData)
  
        // set brand name from API
        if (storiesData.length > 0) {
          setBrandName(storiesData[0].brand_name)
        }
  
      } catch (err) {
        console.error('Failed to load brand data:', err)
  
      } finally {
        setLoading(false)
  
        // show login popup after 30s
        setTimeout(() => {
          setShowModal(true)
        }, 30000)
      }
    }
  
    loadBrandData()
  }, [brandId])
  

  useEffect(() => {
    const page = document.querySelector('.brand-page')

    const handleUserClick = () => {
      if (!showModal) {
        setShowModal(true)
      }
    }

    page?.addEventListener('click', handleUserClick)

    return () => {
      page?.removeEventListener('click', handleUserClick)
    }
  }, [showModal])

  return (
    <>
      <div className={`brand-page ${showModal ? 'blurred' : ''}`}>
      <BrandPageContent 
  brandId={brandId}
  brandName={brandName}
  stories={stories}
  posts={posts}
  loading={loading}
/>
      </div>

      {/* Login Modal - Rendered outside blurred container */}
      <LoginModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  )
}

export default function BrandPage() {
  return (
    <Suspense fallback={
      <div className="brand-page">
        <div className="loading-state">
          <div className="loading-spinner"></div>
          <p>Loading...</p>
        </div>
      </div>
    }>
      <BrandPageContentWrapper />
    </Suspense>
  )
}

