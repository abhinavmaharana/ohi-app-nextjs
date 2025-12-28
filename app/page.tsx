'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import FAQSection from '@/components/FAQSection'
import Footer from '@/components/Footer'

export default function Home() {
  const scrollArrow1Ref = useRef<HTMLDivElement>(null)
  const scrollArrow2Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollArrow1 = scrollArrow1Ref.current
    const scrollArrow2 = scrollArrow2Ref.current
    const billBoardSection = document.getElementById('billBoardSection')
    const pricingSection = document.getElementById('pricingSection')

    if (scrollArrow1 && billBoardSection) {
      scrollArrow1.addEventListener('click', () => {
        billBoardSection.scrollIntoView({
          behavior: 'smooth'
        })
      })
    }

    if (scrollArrow2 && pricingSection) {
      scrollArrow2.addEventListener('click', () => {
        pricingSection.scrollIntoView({
          behavior: 'smooth'
        })
      })
    }

    return () => {
      if (scrollArrow1) {
        scrollArrow1.removeEventListener('click', () => {})
      }
      if (scrollArrow2) {
        scrollArrow2.removeEventListener('click', () => {})
      }
    }
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <nav className="navbar">
          <div className="logo">
            <Image 
              src="/assets/img/logo.png" 
              alt="Ohi Logo"
              width={44}
              height={44}
              style={{ borderRadius: '6px' }}
            />
          </div>

          <div className="tagline">Consumer Social Media</div>
         
          <Link href="/contact">
            <button className="contact-btn">Contact Us</button>
          </Link>
        </nav>

        <div className="hero-content">
          <div className="text-block">
            <h1>Post & Sell content of Brands you use everyday</h1>

            <p className="desc">
              You are the consumer and your influence matters the most. So Post, tag, host your everyday brands
            </p>

           <a href="https://ruc32.app.link/Ohi_app_Website">  
              <button className="download-btn">
                Download  
              </button>
            </a>
          </div>
          <div className="phone-box">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/assets/img/herophone.png" 
              className="phone" 
              alt="Phone mockup"
            />
          </div>
        </div>
        <div className="arrow-container" ref={scrollArrow1Ref}>
          <div className="arrow"></div>
          <div className="arrow second-arrow"></div>
        </div>
      </section>

      {/* Billboard Section */}
      <section id="billBoardSection" className="billboard-section">
        <div className="billboard-content">
          <h2>
            From Your <span>O Hi</span> Feeds to the Billboards.
          </h2>
          <p>
            Because real influence deserves a <span>real celebration.</span>
          </p>
          <button 
            className="count-btn"
            onClick={() => {
              window.location.href = 'https://ruc32.app.link/Ohi_app_Website'
            }}
          >
            Count Me In
          </button>
        </div>

        <div className="billboard-visual">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/assets/img/banner.png" 
            alt="Billboard preview"
          />
        </div>
        <div className="arrow-container" ref={scrollArrow2Ref}>
          <div className="arrow"></div>
          <div className="arrow second-arrow"></div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricingSection" className="pricing-section">
        <div className="pricing-content">
          <div className="pricing-text">
            <h2>Sell every content you post like an Artist</h2>

            <div className="pricing-desc">
              <p>Now you can make your content available for brands to buy!</p>
              <p>To learn how pricing works or to try hosting your first brand</p>
              
              <a href="https://ruc32.app.link/Ohi_app_Website">  
                <button className="click-btn">Click Here ➤</button>
              </a>
            </div>
          </div>

          <div className="pricing-phone">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/assets/img/phone-pricing.png" 
              alt="Phone mockup" 
              className="phone-img"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <Footer />
    </>
  )
}

