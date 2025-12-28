'use client'

import { useState, useEffect, useCallback, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import ProfileContent from '@/components/ProfileContent'
import LoginModal from '@/components/LoginModal'
import Footer from '@/components/Footer'

// API Configuration
const USE_CORS_PROXY = false
const USE_DEMO_MODE = true
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'

const API_BASE_URL_STAGING = 'https://staging.ohiapp.com/api/v2/public/user'
const POSTS_API_BASE_URL_STAGING = 'https://staging.ohiapp.com/api/v2/public/posts'

const API_BASE_URL = USE_CORS_PROXY ? `${CORS_PROXY}${API_BASE_URL_STAGING}` : API_BASE_URL_STAGING
const POSTS_API_BASE_URL = USE_CORS_PROXY ? `${CORS_PROXY}${POSTS_API_BASE_URL_STAGING}` : POSTS_API_BASE_URL_STAGING

// Demo data
const DEMO_USER_DATA = {
  full_name: "Gagan Sharma",
  is_profile_private: false,
  total_posts_count: 50,
  total_followers_count: 7,
  total_following_count: 3,
  interest_details: [
    { interest_id: 1, name: "Reading" },
    { interest_id: 2, name: "At Office" },
    { interest_id: 3, name: "Night-Out" },
    { interest_id: 4, name: "DIY" }
  ],
  profile_image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
  user_bio: "Sab chnga C",
  is_business_profile: false
}

const DEMO_BRAND_STORIES = [
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=400&h=400&fit=crop'
]

interface InterestDetail {
  interest_id: number
  name: string
}

interface UserData {
  full_name: string
  is_profile_private: boolean
  total_posts_count: number
  total_followers_count: number
  total_following_count: number
  interest_details: InterestDetail[]
  profile_image: string
  user_bio: string
  is_business_profile: boolean
}

interface ApiError extends Error {
  isCORS?: boolean
}

function isCORSError(error: unknown): error is ApiError {
  if (error instanceof Error) {
    return error.message.includes('CORS') || 
           error.message.includes('Failed to fetch') ||
           error.name === 'TypeError'
  }
  return false
}

async function fetchUserProfile(userId: string): Promise<UserData> {
  try {
    const url = `${API_BASE_URL}/${userId}`
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    })
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const result = await response.json()
    
    if (result.statusCode === 200 && result.status === 'success') {
      return result.data
    } else {
      throw new Error(result.message || 'Failed to fetch user data')
    }
  } catch (error) {
    console.error('Error fetching user profile:', error)
    if (isCORSError(error)) {
      const corsError = new Error('CORS Error: API requests are blocked. This usually happens when testing locally. The API needs to allow requests from your origin, or you need to use a CORS proxy for development.') as ApiError
      corsError.isCORS = true
      throw corsError
    }
    throw error
  }
}

async function fetchBrandStories(userId: string): Promise<string[]> {
  try {
    const url = `${POSTS_API_BASE_URL}/${userId}?brandStories=true`
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    })
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const result = await response.json()
    
    if (result.statusCode === 200 && result.status === 'success') {
      return result.data || []
    } else {
      console.warn('Failed to fetch brand stories:', result.message)
      return []
    }
  } catch (error) {
    console.error('Error fetching brand stories:', error)
    if (isCORSError(error)) {
      console.warn('CORS error when fetching brand stories. This is expected in local development.')
    }
    return []
  }
}

function ProfilePageContent() {
  const searchParams = useSearchParams()
  const userId = searchParams.get('userId') || '1174158'

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [errorHint, setErrorHint] = useState<string | null>(null)
  const [userData, setUserData] = useState<UserData | null>(null)
  const [brandStories, setBrandStories] = useState<string[]>([])
  const [currentTab, setCurrentTab] = useState<'brand' | 'all'>('brand')
  const [showModal, setShowModal] = useState(false)
  const [usingDemoData, setUsingDemoData] = useState(false)

  const initializePage = useCallback(async () => {
    setLoading(true)
    setError(null)
    setErrorHint(null)

    try {
      let user: UserData
      let stories: string[]
      let demoMode = false

      try {
        [user, stories] = await Promise.all([
          fetchUserProfile(userId),
          fetchBrandStories(userId)
        ])
      } catch (err) {
        if (USE_DEMO_MODE && (isCORSError(err) || (err as ApiError).isCORS)) {
          console.warn('API request failed (likely CORS). Using demo data for development.')
          user = DEMO_USER_DATA
          stories = DEMO_BRAND_STORIES
          demoMode = true
        } else {
          throw err
        }
      }

      setUserData(user)
      setBrandStories(stories)
      setUsingDemoData(demoMode)
      setLoading(false)

      // Update page title
      if (typeof document !== 'undefined') {
        document.title = `${user.full_name} - Ohi Profile`
      }

      // Start timer for login modal (30 seconds)
      setTimeout(() => {
        setShowModal(true)
      }, 30000)
    } catch (err) {
      setLoading(false)
      const errorObj = err as ApiError
      
      if (errorObj.isCORS || isCORSError(err)) {
        setError('CORS Error: Unable to fetch profile data.')
        setErrorHint('This usually happens when testing locally. The API server needs to allow CORS requests from your origin. For development, you can enable USE_DEMO_MODE or USE_CORS_PROXY in the code, or test from a server that has CORS configured.')
      } else {
        setError(errorObj.message || 'Failed to load profile. Please try again later.')
        setErrorHint(null)
      }
      
      console.error('Failed to load profile:', err)
    }
  }, [userId])

  useEffect(() => {
    initializePage()
  }, [initializePage])

  return (
    <>
      <div className={`profile-page ${showModal ? 'blurred' : ''}`}>
        {/* Demo Mode Indicator */}
        {usingDemoData && (
          <div style={{
            position: 'fixed',
            top: '10px',
            right: '10px',
            background: '#ffd37d',
            color: '#000',
            padding: '8px 16px',
            borderRadius: '20px',
            fontSize: '12px',
            fontWeight: 600,
            zIndex: 1000,
          }}>
            DEMO MODE (CORS blocked)
          </div>
        )}

        {/* Header */}
        <header className="profile-header">
          <div className="logo">
            <Image 
              src="/assets/img/logo.png" 
              alt="Ohi Logo"
              width={44}
              height={44}
              style={{ borderRadius: '6px' }}
            />
          </div>
        </header>

        {/* Profile Content */}
        <div className="profile-container">
          {loading && (
            <div className="loading-state">
              <div className="loading-spinner"></div>
              <p>Loading profile...</p>
            </div>
          )}

          {error && (
            <div className="error-state">
              <p>{error}</p>
              {errorHint && (
                <p className="error-hint" style={{ marginTop: '10px', fontSize: '14px', color: '#999' }}>
                  {errorHint}
                </p>
              )}
            </div>
          )}

          {userData && !loading && (
            <ProfileContent
              userData={userData}
              brandStories={brandStories}
              currentTab={currentTab}
              onTabChange={setCurrentTab}
            />
          )}
        </div>

        {/* Footer */}
        <Footer />
      </div>

      {/* Login Modal - Rendered outside blurred container */}
      <LoginModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  )
}

export default function ProfilePage() {
  return (
    <Suspense fallback={
      <div className="profile-page">
        <div className="loading-state">
          <div className="loading-spinner"></div>
          <p>Loading...</p>
        </div>
      </div>
    }>
      <ProfilePageContent />
    </Suspense>
  )
}

