'use client'

import { useState } from 'react'
import Image from 'next/image'

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

interface ProfileContentProps {
  userData: UserData
  brandStories: (string | { url: string; brand_name?: string })[]
  allPosts: string[]
  currentTab: 'brand' | 'all'
  onTabChange: (tab: 'brand' | 'all') => void
}

const PLACEHOLDER_IMAGES = [
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

export default function ProfileContent({ userData, brandStories, allPosts, currentTab, onTabChange }: ProfileContentProps) {
  // Remove duplicate interests based on interest_id
  const uniqueInterests = userData.interest_details.reduce((acc, interest) => {
    if (!acc.find(i => i.interest_id === interest.interest_id)) {
      acc.push(interest)
    }
    return acc
  }, [] as InterestDetail[])

  const displayInterests = uniqueInterests.slice(0, 2)
  const hasMoreInterests = uniqueInterests.length > 2

  // Use real API data for both tabs, fallback to placeholder only if data is empty
  const currentPosts = currentTab === 'brand' ? brandStories : allPosts
  const displayPosts = currentPosts.length > 0 ? currentPosts.slice(0, 9) : []

  console.log("Brand stories →", brandStories);

  return (
    <>
      {/* Profile Info Section */}
      <div className="profile-info">
        <div className="profile-picture">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={userData.profile_image || 'https://via.placeholder.com/200/333333/ffffff?text=User'} 
            alt="Profile Picture"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.onerror = null
              target.src = 'https://via.placeholder.com/200/333333/ffffff?text=User'
            }}
          />
        </div>
        
        <div className="profile-stats">
          <div className="stat-item">
            <div className="stat-number">{userData.total_posts_count || 0}</div>
            <div className="stat-label">Posts</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{userData.total_followers_count || 0}</div>
            <div className="stat-label">Followers</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{userData.total_following_count || 0}</div>
            <div className="stat-label">Following</div>
          </div>
        </div>
      </div>

      {/* Profile Details */}
      <div className="profile-details">
        <h1 className="profile-username">{userData.full_name || 'User'}</h1>
        {userData.user_bio && (
          <p className="profile-bio">{userData.user_bio}</p>
        )}
        
        <div className="profile-interests">
          {displayInterests.map((interest) => (
            <span key={interest.interest_id} className="interest-tag">
              {interest.name}
            </span>
          ))}
          {hasMoreInterests && (
            <span className="view-more">View More</span>
          )}
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="profile-tabs">
        <button 
          className={`tab-btn ${currentTab === 'brand' ? 'active' : ''}`}
          onClick={() => onTabChange('brand')}
        >
          Brand Posts
        </button>
        <button 
          className={`tab-btn ${currentTab === 'all' ? 'active' : ''}`}
          onClick={() => onTabChange('all')}
        >
          All Posts
        </button>
      </div>

      {/* Posts Grid */}
      <div className="posts-grid">
        {displayPosts.length === 0 ? (
          <div 
            style={{
              gridColumn: '1 / -1',
              textAlign: 'center',
              padding: '40px 20px',
              color: '#999',
            }}
          >
            {currentTab === 'brand' ? 'No brand stories yet' : 'No posts yet'}
          </div>
        ) : (
          displayPosts.map((post, index) => {
            const imageUrl = typeof post === "string" ? post : post.url
            const brandName = typeof post === "object" ? post.brand_name : null
          
            return (
              <div key={index} className="post-item">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={imageUrl}
                  alt={currentTab === 'brand' ? `Brand Story ${index + 1}` : `Post ${index + 1}`}
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.onerror = null
                    target.src = '/placeholder.png'
                  }}
                />
          
                {brandName && (
                  <div className="brand-badge">
                    <span className="brand-icon">🏷️</span>
                    <span className="brand-text">{brandName}</span>
                  </div>
                )}
              </div>
            )
          })
          
        )}
      </div>
    </>
  )
}

