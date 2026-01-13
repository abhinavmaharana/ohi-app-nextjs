'use client'

import { useState } from 'react'

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
  post_views: number
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

export default function ProfileContent({
  userData,
  brandStories,
  allPosts,
  currentTab,
  onTabChange
}: ProfileContentProps) {

  const uniqueInterests = userData.interest_details.reduce((acc, interest) => {
    if (!acc.find(i => i.interest_id === interest.interest_id)) {
      acc.push(interest)
    }
    return acc
  }, [] as InterestDetail[])

  const displayInterests = uniqueInterests.slice(0, 2)
  const hasMoreInterests = uniqueInterests.length > 2

  const currentPosts = currentTab === 'brand' ? brandStories : allPosts
  const displayPosts = currentPosts.slice(0, 9)

  return (
    <>
      {/* Profile Info */}
      <div className="profile-info">
        <div className="profile-picture">
          <img
            src={userData.profile_image || 'https://via.placeholder.com/200'}
            alt="Profile"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://via.placeholder.com/200'
            }}
          />
        </div>

        <div className="profile-stats">
          <div className="stat-item">
            <div className="stat-number">{userData.total_posts_count}</div>
            <div className="stat-label">Posts</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{userData.total_followers_count}</div>
            <div className="stat-label">Followers</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{userData.total_following_count}</div>
            <div className="stat-label">Following</div>
          </div>
        </div>
      </div>

      {/* Profile Details */}
      <div className="profile-details">
        <h1 className="profile-username">{userData.full_name}</h1>

        {userData.user_bio && (
          <p className="profile-bio">{userData.user_bio}</p>
        )}

        {userData.post_views && (
          <p className="profile-views">
            Post views: {userData.post_views}
          </p>
        )}

        <div className="profile-interests">
          <div className="profile-interest-area">
            {displayInterests.map(i => (
              <span key={i.interest_id} className="interest-tag">
                {i.name}
              </span>
            ))}
          </div>
          {hasMoreInterests && <span className="view-more">View More</span>}
        </div>
      </div>

      {/* Tabs */}
      <div className="profile-tabs">
        <button
          className={`tab-btn ${currentTab === 'brand' ? 'active' : ''}`}
          onClick={() => onTabChange('brand')}
        >
          Brand Board
        </button>
        <button
          className={`tab-btn ${currentTab === 'all' ? 'active' : ''}`}
          onClick={() => onTabChange('all')}
        >
          All Posts
        </button>
      </div>

      {/* Posts Grid */}
      <div className="posts-grid-profile">
        {userData.is_profile_private ? (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: 40 }}>
            <img
              src="/assets/img/privateaccount.png"
              alt="Private"
              style={{ maxWidth: 260 }}
            />
          </div>
        ) : displayPosts.length === 0 ? (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: 40 }}>
            No posts yet
          </div>
        ) : (
          displayPosts.map((post, index) => {
            const imageUrl = typeof post === 'string' ? post : post.url
            const brandName = typeof post === 'object' ? post.brand_name : null
            const isVideo = imageUrl.endsWith('.mp4')

            return (
              <div key={index} className="post-item">
                {isVideo ? (
                  <video
                    className="post-media"
                    src={imageUrl}
                    muted
                    playsInline
                    preload="metadata"
                  />
                ) : (
                  <img
                    src={imageUrl}
                    alt="Post"
                    loading="lazy"
                  />
                )}

                {/* ✅ FIXED BRAND BADGE */}
                {brandName && (
  <div className="brand-badge">
    <span className="brand-badge-icon">
      <img
        src="/assets/img/brandtag.png"
        alt="Brand Tag"
      />
    </span>
    <span className="brand-badge-text">{brandName}</span>
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
