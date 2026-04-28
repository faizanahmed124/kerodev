'use client'
import React, { useState, useEffect } from 'react'
import { Icon } from "@iconify/react/dist/iconify.js"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phnumber: '',
    Message: '',
  })
  const [showThanks, setShowThanks] = useState(false)
  const [loader, setLoader] = useState(false)
  const [isFormValid, setIsFormValid] = useState(false)

  useEffect(() => {
    const isValid = Object.values(formData).every((v) => v.trim() !== '')
    setIsFormValid(isValid)
  }, [formData])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const reset = () =>
    setFormData({ firstname: '', lastname: '', email: '', phnumber: '', Message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoader(true)
    fetch('https://formsubmit.co/ajax/bhainirav772@gmail.com', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        Name: formData.firstname,
        LastName: formData.lastname,
        Email: formData.email,
        PhoneNo: formData.phnumber,
        Message: formData.Message,
      }),
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.success) {
          setShowThanks(true)
          reset()
          setTimeout(() => setShowThanks(false), 5000)
        }
        setLoader(false)
      })
      .catch((err) => {
        console.log(err.message)
        setLoader(false)
      })
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    fontFamily: "'Outfit', sans-serif",
    fontSize: '14px',
    color: '#0f172a',
    background: '#f8fafc',
    border: '1.5px solid rgba(56,189,248,0.35)',
    borderRadius: '12px',
    padding: '12px 16px',
    outline: 'none',
    transition: 'border-color 0.3s, box-shadow 0.3s',
  }

  const labelStyle: React.CSSProperties = {
    fontFamily: "'Outfit', sans-serif",
    fontSize: '13px',
    fontWeight: 600,
    color: '#0369a1',
    letterSpacing: '0.3px',
    marginBottom: '6px',
    display: 'block',
  }

  const focusHandlers = {
    onFocus: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      e.target.style.borderColor = '#38bdf8'
      e.target.style.boxShadow = '0 0 0 3px rgba(56,189,248,0.12)'
      e.target.style.background = '#fff'
    },
    onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      e.target.style.borderColor = 'rgba(56,189,248,0.35)'
      e.target.style.boxShadow = 'none'
      e.target.style.background = '#f8fafc'
    },
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;900&display=swap');
        ::placeholder { color: #94a3b8; opacity: 1; }
      `}</style>

      <section
        id="contact"
        className="relative py-20 overflow-hidden scroll-mt-14"
        style={{ background: '#ffffff', fontFamily: "'Outfit', sans-serif" }}
      >
        {/* Bg blobs */}
        <div className="pointer-events-none absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #38bdf8, transparent 70%)' }} />
        <div className="pointer-events-none absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #1d4ed8, transparent 70%)' }} />

        <div className="container relative z-10">

          {/* Section heading */}
          <div className="text-center mb-14">
            <span
              className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest"
              style={{ background: 'rgba(56,189,248,0.10)', border: '1px solid rgba(56,189,248,0.35)', color: '#0369a1' }}
            >
              Contact Us
            </span>
            <h2
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                color: '#0f172a',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                marginBottom: '1.5rem',
              }}
            >
              Get In <span style={{ color: '#1d4ed8' }}>Touch</span>
            </h2>
            <div className="mx-auto mb-6 w-14 h-1 rounded-full"
              style={{ background: 'linear-gradient(90deg,#1d4ed8,#38bdf8)' }} />
            <p className="max-w-xl mx-auto"
              style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 400, color: '#475569', fontSize: '16px', lineHeight: 1.8 }}>
              Have a project in mind? We'd love to hear about it. Drop us a message and we'll get back to you shortly.
            </p>
          </div>

          {/* Form card */}
          <div
            className="max-w-3xl mx-auto rounded-3xl p-8 md:p-10"
            style={{
              background: '#ffffff',
              border: '1.5px solid rgba(56,189,248,0.35)',
              boxShadow: '0 4px 32px rgba(56,189,248,0.10)',
            }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">

              {/* Row 1: First + Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="fname" style={labelStyle}>First Name</label>
                  <input
                    id="fname"
                    type="text"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    placeholder="John"
                    style={inputStyle}
                    {...focusHandlers}
                  />
                </div>
                <div>
                  <label htmlFor="lname" style={labelStyle}>Last Name</label>
                  <input
                    id="lname"
                    type="text"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    placeholder="Doe"
                    style={inputStyle}
                    {...focusHandlers}
                  />
                </div>
              </div>

              {/* Row 2: Email + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" style={labelStyle}>Email Address</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john.doe@example.com"
                    style={inputStyle}
                    {...focusHandlers}
                  />
                </div>
                <div>
                  <label htmlFor="Phnumber" style={labelStyle}>Phone Number</label>
                  <input
                    id="Phnumber"
                    type="tel"
                    name="phnumber"
                    value={formData.phnumber}
                    onChange={handleChange}
                    placeholder="+1 234 567 890"
                    style={inputStyle}
                    {...focusHandlers}
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" style={labelStyle}>Message</label>
                <textarea
                  id="message"
                  name="Message"
                  value={formData.Message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us about your project..."
                  style={{ ...inputStyle, resize: 'vertical', minHeight: '130px' }}
                  {...focusHandlers}
                />
              </div>

              {/* Submit + success */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-1">
                <button
                  type="submit"
                  disabled={!isFormValid || loader}
                  className="flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold uppercase tracking-widest transition-all duration-300"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    background: isFormValid && !loader
                      ? 'linear-gradient(135deg,#1d4ed8,#38bdf8)'
                      : '#e2e8f0',
                    color: isFormValid && !loader ? '#fff' : '#94a3b8',
                    border: 'none',
                    cursor: isFormValid && !loader ? 'pointer' : 'not-allowed',
                    boxShadow: isFormValid && !loader
                      ? '0 4px 18px rgba(56,189,248,0.30)'
                      : 'none',
                  }}
                >
                  {loader ? (
                    <>
                      <span
                        className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin"
                        style={{ display: 'inline-block' }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Icon icon="mdi:send" style={{ fontSize: '16px' }} />
                    </>
                  )}
                </button>

                {/* Thank you toast */}
                {showThanks && (
                  <div
                    className="flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium"
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      background: 'rgba(56,189,248,0.10)',
                      border: '1px solid rgba(56,189,248,0.35)',
                      color: '#0369a1',
                    }}
                  >
                    <Icon icon="mdi:check-circle" style={{ fontSize: '18px', color: '#0ea5e9' }} />
                    Thank you! We'll get back to you soon.
                  </div>
                )}
              </div>

            </form>
          </div>

        </div>
      </section>
    </>
  )
}

export default ContactForm