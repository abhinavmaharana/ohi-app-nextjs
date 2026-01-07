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

      {/* Header */}
      <header className="brand-page-header">
        <div className="brand-logo">
          <Image 
            src="/assets/img/newlogo.png"
            alt="Ohi Logo"
            width={40}
            height={40}
            style={{ objectFit: 'contain' }}
          />
        </div>
      </header>

      {/* Brand Name */}
      <div className="brand-name-section">
        <h1 className="brand-name">{displayBrandName}</h1>
        <p className="brand-description">
          Meet our <span className='brand-description-span'>Featured Brand Hosts</span>, the loyal taggers who made the brand their vibe now crowned as Brand Hosts.
        </p>
      </div>

      {/* Stories Section — NOW SHOWS ALL STORIES */}
      {stories.length > 0 ? (
        <div className="brand-stories-section">
          <div className="stories-container">

            {stories.map((story) => (
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
            {[1, 2, 3].map(i => (
              <div key={i} className="story-item">
                <div className="story-image" style={{ background:'#1a1a1a', display:'flex', alignItems:'center', justifyContent:'center' }}>
                  <span style={{ color:'#666', fontSize:'12px' }}>Story {i}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Brand Hosts Section */}
      <div className="brand-hosts-section">
        <div className="brand-hosts-container">
          {brandHosts.map(host => (
            <div key={host.id} className="brand-host-item">
              <div className="brand-host-avatar">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={host.image}
                  alt={host.name}
                  onError={(e) => {
                    const t = e.target as HTMLImageElement
                    t.onerror = null
                    t.src = '/assets/img/fallback-avatar.png'
                    t.style.display = 'none'
                  }}
                />
              </div>
              <div className="brand-host-name">{host.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Unlock Section */}
      <div className="brand-unlock-section">
        <div className="unlock-content">
          <div className='unlock-content-wrap'>
          <p className="unlock-text">
            Want to get full access to <span className='unlock-text-highlight'>{displayBrandName}&apos;s</span> mood board? <br/> Unlock the magic with just one click!
          </p>
            <p className='unlock-text-sm'>550 people hosted <span className='unlock-text-highlight'>{displayBrandName}</span> </p>
          </div>
          <button className="unlock-btn">
            <span className=''>Unlock</span>
            <span className="unlock-icon"><svg width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.31527 5.55011C2.31333 4.19978 2.82627 2.89521 3.75778 1.8814C4.68928 0.867596 5.97527 0.214291 7.37424 0.0441729C8.7732 -0.125945 10.1889 0.198829 11.3555 0.957504C12.5221 1.71618 13.3593 2.85656 13.7099 4.1645C13.7866 4.44922 13.7421 4.75149 13.5861 5.00479C13.4302 5.2581 13.1755 5.44169 12.8781 5.51519C12.5808 5.58869 12.2651 5.54607 12.0006 5.3967C11.736 5.24734 11.5443 5.00347 11.4675 4.71874C11.2574 3.93378 10.7551 3.24931 10.0551 2.79393C9.35505 2.33855 8.50547 2.14359 7.66593 2.24568C6.8264 2.34776 6.05468 2.73987 5.49575 3.34834C4.93682 3.9568 4.62915 4.73976 4.63054 5.55011V8.87558H14.3547C15.3734 8.87558 16.2069 9.67369 16.2069 10.6492V18.4086C16.2069 19.8718 14.9567 21.069 13.4286 21.069H2.77833C1.25025 21.069 0 19.8718 0 18.4086V10.6492C0 9.67369 0.833497 8.87558 1.85222 8.87558H2.31527V5.55011ZM8.10345 11.3697C7.6431 11.3692 7.19632 11.5189 6.83669 11.7941C6.47705 12.0693 6.22602 12.4535 6.12493 12.8836C6.02384 13.3136 6.07872 13.7638 6.28054 14.16C6.48235 14.5562 6.81907 14.8747 7.23522 15.0632V17.7435C7.23522 17.964 7.3267 18.1755 7.48952 18.3314C7.65234 18.4873 7.87318 18.5749 8.10345 18.5749C8.33372 18.5749 8.55455 18.4873 8.71738 18.3314C8.8802 18.1755 8.97167 17.964 8.97167 17.7435V15.0632C9.38783 14.8747 9.72454 14.5562 9.92636 14.16C10.1282 13.7638 10.1831 13.3136 10.082 12.8836C9.98088 12.4535 9.72984 12.0693 9.37021 11.7941C9.01058 11.5189 8.5638 11.3692 8.10345 11.3697Z" fill="white"/>
</svg>
</span>
          </button>
        </div>
      </div>

      {/* Brand Posts Section */}
      <div className="brand-posts-section">
        <div className="posts-grid">

          {posts.length === 0 && (
            <div className="empty-state">No brand posts yet</div>
          )}

          {posts.slice(0, 12).map((post, index) => {
            const isVideo =
              post.url.endsWith('.mp4') || post.url.endsWith('.mov')

            return (
              <div key={index} className="post-item-brand">

{!post.is_purchased && (
  <div className="watermark-overlay">
    <img
      src="/assets/img/WATERMARK.png"
      alt="Premium watermark"
    />
  </div>
)}


                {/* {!post.is_purchased && (
                  <div className="lock-overlay">
                    <span className="lock-badge">🔒 Locked</span>
                  </div>
                )} */}

                {isVideo ? (
                  <video
                    src={post.url}
                    className={`post-media ${!post.is_purchased ? 'blurred' : ''}`}
                    muted
                    loop
                    playsInline
                  />
                ) : (
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

    </div>
  )
}
