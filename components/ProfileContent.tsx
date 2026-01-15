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
            <svg width="20" height="20" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_3014_2707)">
          <path d="M4.54998 6.49998C4.93565 6.49998 5.31266 6.38561 5.63334 6.17134C5.95401 5.95707 6.20395 5.65252 6.35154 5.29621C6.49913 4.93989 6.53775 4.54781 6.46251 4.16955C6.38727 3.79129 6.20155 3.44383 5.92883 3.17112C5.65612 2.89841 5.30866 2.71269 4.9304 2.63745C4.55214 2.5622 4.16006 2.60082 3.80374 2.74841C3.44743 2.896 3.14288 3.14594 2.92861 3.46661C2.71434 3.78729 2.59998 4.1643 2.59998 4.54998C2.59998 5.06715 2.80542 5.56314 3.17112 5.92883C3.53681 6.29453 4.0328 6.49998 4.54998 6.49998ZM4.54998 3.89998C4.67853 3.89998 4.8042 3.9381 4.9111 4.00952C5.01799 4.08094 5.1013 4.18246 5.1505 4.30123C5.19969 4.42 5.21257 4.5507 5.18749 4.67679C5.16241 4.80287 5.1005 4.91869 5.00959 5.0096C4.91869 5.1005 4.80287 5.16241 4.67678 5.18749C4.5507 5.21257 4.42 5.1997 4.30123 5.1505C4.18246 5.1013 4.08094 5.01799 4.00952 4.9111C3.9381 4.80421 3.89998 4.67853 3.89998 4.54998C3.89998 4.37759 3.96846 4.21226 4.09036 4.09036C4.21225 3.96846 4.37758 3.89998 4.54998 3.89998Z" fill="white"/>
          <path d="M35.1 21.4682V2.6C35.1 1.91044 34.8261 1.24912 34.3385 0.761522C33.8509 0.273928 33.1896 0 32.5 0L2.6 0C1.91044 0 1.24912 0.273928 0.761522 0.761522C0.273928 1.24912 0 1.91044 0 2.6L0 32.5C0 33.1896 0.273928 33.8509 0.761522 34.3385C1.24912 34.8261 1.91044 35.1 2.6 35.1H21.4682C22.305 36.2168 23.372 37.1407 24.5971 37.8091C25.8221 38.4775 27.1765 38.8748 28.5685 38.974C29.9605 39.0733 31.3575 38.8722 32.665 38.3844C33.9725 37.8965 35.1598 37.1334 36.1466 36.1466C37.1334 35.1598 37.8965 33.9725 38.3844 32.665C38.8722 31.3575 39.0733 29.9605 38.974 28.5685C38.8748 27.1765 38.4775 25.8221 37.8091 24.5971C37.1407 23.372 36.2168 22.305 35.1 21.4682ZM2.6 1.3H32.5C32.8448 1.3 33.1754 1.43696 33.4192 1.68076C33.663 1.92456 33.8 2.25522 33.8 2.6V7.8H1.3V2.6C1.3 2.25522 1.43696 1.92456 1.68076 1.68076C1.92456 1.43696 2.25522 1.3 2.6 1.3ZM2.6 33.8C2.25522 33.8 1.92456 33.663 1.68076 33.4192C1.43696 33.1754 1.3 32.8448 1.3 32.5V9.1H33.8V20.6329C31.7896 19.5653 29.4677 19.2388 27.2408 19.7106L22.425 15.5792C22.1549 15.3476 21.8109 15.2203 21.4552 15.2203C21.0995 15.2203 20.7555 15.3476 20.4854 15.5792L11.6838 23.205L9.4302 21.4012C9.14477 21.1772 8.78724 21.0654 8.42503 21.0868C8.06282 21.1083 7.72097 21.2615 7.46395 21.5176L4.47395 24.5076C4.29157 24.6885 4.14692 24.9038 4.0484 25.141C3.94987 25.3782 3.89943 25.6326 3.9 25.8895V29.9C3.9 30.4172 4.10545 30.9132 4.47114 31.2789C4.83684 31.6446 5.33283 31.85 5.85 31.85H19.8627C20.0482 32.5259 20.3064 33.1798 20.6329 33.8H2.6ZM19.5968 30.55H5.85C5.67761 30.55 5.51228 30.4815 5.39038 30.3596C5.26848 30.2377 5.2 30.0724 5.2 29.9V25.8895C5.2001 25.8032 5.21739 25.7177 5.25087 25.6382C5.28435 25.5586 5.33335 25.4865 5.395 25.4261L8.385 22.436C8.41618 22.405 8.45746 22.3861 8.50135 22.3829C8.54523 22.3797 8.58882 22.3923 8.6242 22.4185L11.2957 24.557C11.4143 24.6521 11.5625 24.7026 11.7145 24.6998C11.8665 24.6969 12.0127 24.6409 12.1277 24.5414L21.3323 16.5627C21.3653 16.5331 21.408 16.5167 21.4523 16.5167C21.4966 16.5167 21.5393 16.5331 21.5722 16.5627L25.7627 20.1571C23.7043 20.9272 21.9708 22.3775 20.8494 24.2676C19.728 26.1578 19.2861 28.3743 19.5968 30.55ZM29.25 37.7C27.5787 37.7 25.945 37.2044 24.5554 36.2759C23.1658 35.3474 22.0828 34.0277 21.4432 32.4837C20.8037 30.9396 20.6363 29.2406 20.9624 27.6015C21.2884 25.9623 22.0932 24.4567 23.2749 23.2749C24.4567 22.0932 25.9623 21.2884 27.6015 20.9624C29.2406 20.6363 30.9396 20.8037 32.4837 21.4432C34.0277 22.0828 35.3474 23.1658 36.2759 24.5554C37.2044 25.945 37.7 27.5787 37.7 29.25C37.6974 31.4903 36.8063 33.6381 35.2222 35.2222C33.6381 36.8063 31.4903 37.6974 29.25 37.7Z" fill="white"/>
          <path d="M8.12505 18.85C8.83212 18.85 9.52331 18.6403 10.1112 18.2475C10.6991 17.8546 11.1573 17.2963 11.4279 16.643C11.6985 15.9898 11.7693 15.271 11.6314 14.5775C11.4934 13.884 11.1529 13.247 10.653 12.747C10.153 12.2471 9.51598 11.9066 8.8225 11.7686C8.12901 11.6307 7.4102 11.7015 6.75696 11.9721C6.10371 12.2427 5.54537 12.7009 5.15254 13.2888C4.75972 13.8767 4.55005 14.5679 4.55005 15.275C4.55108 16.2228 4.92806 17.1315 5.59828 17.8017C6.2685 18.4719 7.17722 18.8489 8.12505 18.85ZM8.12505 13C8.575 13 9.01485 13.1334 9.38897 13.3834C9.76309 13.6333 10.0547 13.9886 10.2269 14.4043C10.3991 14.8201 10.4441 15.2775 10.3563 15.7188C10.2686 16.1601 10.0519 16.5655 9.73372 16.8836C9.41555 17.2018 9.01019 17.4185 8.56888 17.5062C8.12757 17.594 7.67015 17.549 7.25444 17.3768C6.83874 17.2046 6.48344 16.913 6.23346 16.5389C5.98348 16.1648 5.85005 15.7249 5.85005 15.275C5.85005 14.6716 6.08974 14.0929 6.51638 13.6663C6.94303 13.2396 7.52168 13 8.12505 13Z" fill="white"/>
          <path d="M9.09995 3.89998H16.9C17.0723 3.89998 17.2377 3.83149 17.3596 3.70959C17.4815 3.5877 17.55 3.42237 17.55 3.24998C17.55 3.07758 17.4815 2.91225 17.3596 2.79036C17.2377 2.66846 17.0723 2.59998 16.9 2.59998H9.09995C8.92756 2.59998 8.76223 2.66846 8.64033 2.79036C8.51843 2.91225 8.44995 3.07758 8.44995 3.24998C8.44995 3.42237 8.51843 3.5877 8.64033 3.70959C8.76223 3.83149 8.92756 3.89998 9.09995 3.89998Z" fill="white"/>
          <path d="M9.09995 6.49995H13.65C13.8223 6.49995 13.9877 6.43147 14.1096 6.30957C14.2315 6.18767 14.3 6.02234 14.3 5.84995C14.3 5.67756 14.2315 5.51223 14.1096 5.39033C13.9877 5.26843 13.8223 5.19995 13.65 5.19995H9.09995C8.92756 5.19995 8.76223 5.26843 8.64033 5.39033C8.51843 5.51223 8.44995 5.67756 8.44995 5.84995C8.44995 6.02234 8.51843 6.18767 8.64033 6.30957C8.76223 6.43147 8.92756 6.49995 9.09995 6.49995Z" fill="white"/>
          <path d="M28.6765 25.2354C31.2536 25.2354 33.3977 26.7188 33.8472 28.6765C33.3977 30.6343 31.2536 32.1177 28.6765 32.1177C26.0994 32.1177 23.9554 30.6343 23.5059 28.6765C23.9554 26.7188 26.0994 25.2354 28.6765 25.2354ZM28.6765 31.353C30.7009 31.353 32.4332 30.2258 32.8716 28.6765C32.4332 27.1272 30.7009 26.0001 28.6765 26.0001C26.6521 26.0001 24.9199 27.1272 24.4814 28.6765C24.9199 30.2258 26.6521 31.353 28.6765 31.353ZM28.6765 30.3971C27.4887 30.3971 26.5258 29.6268 26.5258 28.6765C26.5258 27.7263 27.4887 26.9559 28.6765 26.9559C29.8643 26.9559 30.8273 27.7263 30.8273 28.6765C30.8273 29.6268 29.8643 30.3971 28.6765 30.3971ZM28.6765 29.6324C29.3364 29.6324 29.8714 29.2044 29.8714 28.6765C29.8714 28.1486 29.3364 27.7206 28.6765 27.7206C28.0166 27.7206 27.4817 28.1486 27.4817 28.6765C27.4817 29.2044 28.0166 29.6324 28.6765 29.6324Z" fill="white"/>
          </g>
          <defs>
          <clipPath id="clip0_3014_2707">
          <rect width="39" height="39" fill="white"/>
          </clipPath>
          </defs>
          </svg>
            
            
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
                  autoPlay
                  loop
                  preload="metadata"
                  controls={false}
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
                  <img
                    src="/assets/img/price-tag.png"
                    alt=""
                    className="brand-badge-icon"
                  />
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
