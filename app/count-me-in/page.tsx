'use client'

import { FormEvent } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Note: Metadata can't be exported from client components
// This page uses 'use client' so metadata would need to be set in layout if needed

export default function CountMeInPage() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)
    const name = formData.get('name')?.toString().trim() || ''
    const email = formData.get('email')?.toString().trim() || ''
    const phone = formData.get('phone')?.toString().trim() || ''
    const city = formData.get('city')?.toString().trim() || ''
    const reason = formData.get('reason')?.toString().trim() || ''

    if (!name || !email || !phone || !city || !reason) {
      alert('Please fill out all fields.')
      return
    }

    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    if (!validEmail) {
      alert('Please enter a valid email address.')
      return
    }

    const subject = `Billboard Submission – ${name}`
    const bodyLines = [
      'Hi Ohi Team,',
      '',
      'Please consider my entry for the O Hi Billboard.',
      '',
      `Full Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `City / Location: ${city}`,
      '',
      'Why I think my post deserves the spotlight:',
      reason,
      '',
      'Thanks!'
    ]
    const body = encodeURIComponent(bodyLines.join('\n'))
    const mailto = `mailto:social@ohiapp.com?subject=${encodeURIComponent(subject)}&body=${body}`
    window.location.href = mailto
  }

  return (
    <div className="form-page">
      <div className="form-brandbar">
        <Link href="/" className="form-backlink">← Back to Home</Link>
        <Image 
          src="/assets/img/logo.png" 
          alt="Ohi Logo"
          width={40}
          height={40}
          style={{ height: '40px', borderRadius: '8px' }}
        />
      </div>

      <div className="form-wrap">
        <h1>Tell Us Why You Deserve To Be On The Billboard</h1>

        <form onSubmit={handleSubmit} noValidate>
          <div className="form-field">
            <label className="form-label" htmlFor="name">Full Name</label>
            <input 
              className="form-input" 
              id="name" 
              name="name" 
              type="text" 
              placeholder="Enter your name" 
              required 
            />
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="email">Email Address</label>
            <input 
              className="form-input" 
              id="email" 
              name="email" 
              type="email" 
              placeholder="Enter your email address" 
              required 
            />
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="phone">Phone Number</label>
            <input 
              className="form-input" 
              id="phone" 
              name="phone" 
              type="tel" 
              placeholder="Enter your phone number" 
              required 
            />
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="city">City / Location</label>
            <input 
              className="form-input" 
              id="city" 
              name="city" 
              type="text" 
              placeholder="Enter your city / location" 
              required 
            />
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="reason">Why Do You Think Your Post Deserves The Spotlight?</label>
            <textarea 
              id="reason" 
              name="reason" 
              className="form-textarea"
              placeholder="Tell us why..." 
              required
            ></textarea>
          </div>

          <div className="form-actions">
            <button type="submit" className="form-send-btn">Send</button>
          </div>
          <p className="form-note">Submitting opens your email app with a pre-filled message to <strong>social@ohiapp.com</strong>.</p>
        </form>
      </div>
    </div>
  )
}

