'use client'

import { useState, useEffect, useRef } from 'react'

interface FAQ {
  question: string
  answer: string
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const answerRefs = useRef<(HTMLDivElement | null)[]>([])

  const faqs: FAQ[] = [
    {
      question: "What is O Hi and is it safe to use?",
      answer: "O Hi is a consumer social media app that celebrates everyday brand choices. We protect user data with industry-standard security, encrypted connections, and strict privacy policies. Your profile and posts remain under your control — you choose what to share and who sees it."
    },
    {
      question: "What is Setup price feature and how to use it?",
      answer: "Setup Price lets creators set a one-time price for a post or content package that brands can purchase. From the post composer choose 'Enable Pricing', set your price and terms, and publish. Brands interested in your content can request purchase directly through the app."
    },
    {
      question: "How to create a post?",
      answer: "Tap the + icon, choose media (photo/video), add caption and tags, optionally enable pricing or brand tags, preview and publish. Use high-quality imagery and clear descriptions to attract brand interest."
    },
    {
      question: "What is a brand tag and how can I earn money from it?",
      answer: "A brand tag links your post to a brand (like a sponsorship). When brands scan posts with relevant tags they can directly offer paid collaborations. You earn when brands buy your tagged content or commission you for campaigns."
    },
    {
      question: "What type of content can I upload on the O Hi App?",
      answer: "You can upload photos, short videos, and stories showcasing products, lifestyle, tutorials, and more. All content must follow community guidelines and copyright rules."
    },
    {
      question: "What is fametick and how can I get the fametick?",
      answer: "Fametick is our verification/credibility badge earned by consistent quality posts, authentic engagement, and positive community feedback. Apply in settings and maintain good standing to qualify."
    },
    {
      question: "How can I get featured on the O Hi Billboard?",
      answer: "Billboard features are offered through campaigns and standout posts—often via brand partnerships, trending content, or special contests. Enable public discovery and opt-in to brand promotions for a chance to be featured."
    },
    {
      question: "What is the grow and earn feature on O Hi?",
      answer: "Grow & Earn rewards creators for reaching engagement milestones, completing challenges, and hosting brand-first events. Rewards include brand credits, coupons, and priority placement on discovery pages."
    }
  ]

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  // Update max-height when item opens
  useEffect(() => {
    if (openIndex !== null) {
      const panel = answerRefs.current[openIndex]
      if (panel) {
        panel.style.maxHeight = panel.scrollHeight + 'px'
      }
    } else {
      // Close all panels
      answerRefs.current.forEach((panel) => {
        if (panel) {
          panel.style.maxHeight = ''
        }
      })
    }
  }, [openIndex])

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (openIndex !== null) {
        const panel = answerRefs.current[openIndex]
        if (panel) {
          panel.style.maxHeight = panel.scrollHeight + 'px'
        }
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [openIndex])

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <h2 className="faq-title">Frequently Asked Questions</h2>

        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div key={index} className={`faq-item ${isOpen ? 'open' : ''}`}>
                <button 
                  className="faq-toggle" 
                  aria-expanded={isOpen}
                  onClick={() => toggleItem(index)}
                >
                  <span className="question">{faq.question}</span>
                  <span className="chev" aria-hidden="true">▾</span>
                </button>
                <div 
                  ref={(el) => {
                    answerRefs.current[index] = el
                  }}
                  className="faq-answer" 
                  role="region" 
                  aria-hidden={!isOpen}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
