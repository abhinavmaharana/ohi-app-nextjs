'use client'

import Image from 'next/image'

interface Story {
  story_id: number
  url: string
  brand_name: string
  username: string
  total_views: number
}

interface BrandPost {
  url: string
  is_purchased: boolean
  brand_name?: string;
}

interface BrandPageContentProps {
  brandId: string
  brandName: string
  stories: Story[]
  posts: BrandPost[]
  loading: boolean
}

// Demo brand hosts data (in real app, this would come from an API)
const DEMO_BRAND_HOSTS = [
  { id: 1, name: 'John Jacobs', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop' },
  { id: 2, name: 'Mickabana', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=100&h=100&fit=crop' },
  { id: 3, name: 'Nike', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=100&h=100&fit=crop' },
  { id: 4, name: 'Ordinary', image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=100&h=100&fit=crop' },
  { id: 5, name: 'Bobby Brown', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop' },
  { id: 6, name: 'Ralph Lauren', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop' },
]

export default function BrandPageContent({
  brandId,
  brandName,
  stories,
  posts,
  loading
}: BrandPageContentProps) {

  console.log("Posts →", posts);

  // Get unique usernames from stories for brand hosts (fallback to demo data)
  const brandHosts = stories.length > 0 
    ? Array.from(new Set(stories.map(s => s.username)))
        .slice(0, 6)
        .map((username, index) => ({
          id: index + 1,
          name: username,
          image: stories[index]?.url || DEMO_BRAND_HOSTS[index]?.image || ''
        }))
    : DEMO_BRAND_HOSTS

  const displayBrandName = brandName || 'Brand'

  if (loading) {
    return (
      <div className="brand-page-container">
        <div className="loading-state">
          <div className="loading-spinner"></div>
          <p>Loading brand stories...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="brand-page-container">
      {/* Header with Logo */}
      <header className="brand-page-header">
        <div className="brand-logo">
          <Image 
            src="/assets/img/logo.png" 
            alt="Ohi Logo"
            width={28}
            height={28}
            style={{ objectFit: 'contain' }}
          />
        </div>
      </header>

      {/* Brand Name */}
      <div className="brand-name-section">
        <h1 className="brand-name">{displayBrandName}</h1>
        <p className="brand-description">
          Meet our Featured Brand Hosts, the loyal taggers who made the brand their vibe now crowned as Brand Hosts.
        </p>
      </div>

      {/* Stories Section */}
      {stories.length > 0 ? (
        <div className="brand-stories-section">
          <div className="stories-container">
            {stories.slice(0, Math.max(3, stories.length)).map((story) => (
              <div key={story.story_id} className="story-item">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={story.url}
                  alt={`Story by ${story.username}`}
                  className="story-image"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.onerror = null
                    target.src = '/assets/img/fallback-avatar.png'
                    target.style.display = 'none'
                  }}
                />
                <div className="story-overlay">
                  <div className="story-username">{story.username}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="brand-stories-section">
          <div className="stories-container">
            {/* Placeholder stories when no data */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="story-item">
                <div className="story-image" style={{ backgroundColor: '#1a1a1a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: '#666', fontSize: '12px' }}>Story {i}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Brand Hosts Section */}
      <div className="brand-hosts-section">
        <div className="brand-hosts-container">
          {brandHosts.map((host) => (
            <div key={host.id} className="brand-host-item">
              <div className="brand-host-avatar">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={host.image}
                  alt={host.name}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.onerror = null
                    target.src = '/assets/img/fallback-avatar.png'
                    target.style.display = 'none'
                  }}
                />
              </div>
              <div className="brand-host-name">{host.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Brand Posts Section */}
<div className="brand-posts-section">
  <h2 className="section-title">Brand Posts</h2>

  <div className="posts-grid">
    {posts.length === 0 && (
      <div className="empty-state">
        No brand posts yet
      </div>
    )}

    {posts.slice(0, 12).map((post, index) => {
      const isVideo = post.url.endsWith('.mp4') || post.url.endsWith('.mov')

      return (
        <div key={index} className="post-item">

          {/* Watermark for locked posts */}
          {!post.is_purchased && (
    <div className="watermark-overlay">
      <span>Premium Content</span>
    </div>
  )}

          {/* Locked Overlay */}
          {!post.is_purchased && (
            <div className="lock-overlay">
              <span className="lock-badge">🔒 Locked</span>
            </div>
          )}

          {/* Video */}
          {isVideo ? (
            <video
              src={post.url}
              className={`post-media ${!post.is_purchased ? 'blurred' : ''}`}
              muted
              loop
              playsInline
            />
          ) : (
            // Image
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={post.url}
              className={`post-media ${!post.is_purchased ? 'blurred' : ''}`}
              alt="Brand Post"
              onError={(e) => {
                const t = e.target as HTMLImageElement
                t.onerror = null
                t.src = '/assets/img/fallback-avatar.png'
                t.style.display = 'none'
              }}
            />
          )}
        </div>
      )
    })}
  </div>
</div>


      {/* Unlock Section */}
      <div className="brand-unlock-section">
        <div className="unlock-content">
          <p className="unlock-text">
            Want to get full access to {displayBrandName}&apos;s mood board? Unlock the magic with just one click!
          </p>
          <button className="unlock-btn">
            <span className="unlock-icon">🔒</span>
            <span>Unlock</span>
          </button>
        </div>
      </div>

      {/* Additional Content Section */}
      <div className="brand-additional-content">
        {stories.length > 3 && (
          <>
            <div className="content-image-item">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={stories[3].url}
                alt="Brand content"
                className="content-image"
              />
            </div>
            {stories.length > 4 && (
              <div className="content-image-item">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={stories[4].url}
                  alt="Brand content"
                  className="content-image"
                />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

