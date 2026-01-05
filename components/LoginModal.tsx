'use client'

import Image from 'next/image'

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  if (!isOpen) return null

  return (
    <div 
      className="login-modal-overlay active"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose()
        }
      }}
    >
      <div className="login-modal">
        <div className="modal-logo">
          <Image 
            src="/assets/img/logo.png" 
            alt="Ohi Logo"
            width={60}
            height={60}
          />
        </div>
        <h2 className="modal-title">Create your profile in <span className="modal-title-highlight">30 seconds</span>, to show people what you use</h2>
        <a href="https://ruc32.app.link/Ohi_app_Website">
          <button className="modal-download-btn">Download the app</button>
        </a>
        <button className="modal-close-btn" onClick={onClose}>×</button>
      </div>
    </div>
  )
}

