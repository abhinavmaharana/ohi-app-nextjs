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

function BrandPageContentWrapper() {
  const params = useParams()
  const brandId = params?.brandId as string || '1'

  const [loading, setLoading] = useState(true)
  const [stories, setStories] = useState<Story[]>([])
  const [showModal, setShowModal] = useState(false)
  const [brandName, setBrandName] = useState<string>('')

  useEffect(() => {
    const loadStories = async () => {
      setLoading(true)
      try {
        const data = await fetchBrandStories(brandId)
        setStories(data)
        if (data.length > 0) {
          setBrandName(data[0].brand_name)
        }
        setLoading(false)

        // Start timer for login modal (30 seconds)
        setTimeout(() => {
          setShowModal(true)
        }, 30000)
      } catch (error) {
        console.error('Failed to load stories:', error)
        setLoading(false)
      }
    }

    loadStories()
  }, [brandId])

  return (
    <>
      <div className={`brand-page ${showModal ? 'blurred' : ''}`}>
        <BrandPageContent 
          brandId={brandId}
          brandName={brandName}
          stories={stories}
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

