export const runtime = 'nodejs' // Force Node.js runtime — required for nodemailer

import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  try {
    const { firstname, lastname, email, phnumber, Message } = await req.json()

    // Basic validation
    if (!firstname || !lastname || !email || !phnumber || !Message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 })
    }

    // Hostinger SMTP transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 465,
      secure: true, // SSL
      auth: {
        user: process.env.HOSTINGER_EMAIL,    // hi@kerodevs.com
        pass: process.env.HOSTINGER_PASSWORD, // your Hostinger email password
      },
    })

    await transporter.sendMail({
      from: `"KeroDevs Contact Form" <${process.env.HOSTINGER_EMAIL}>`,
      to: process.env.HOSTINGER_EMAIL, // hi@kerodevs.com
      replyTo: email,
      subject: `New Contact Form Submission from ${firstname} ${lastname}`,
      html: `
        <div style="font-family: 'Outfit', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f8fafc; border-radius: 16px;">
          <div style="background: linear-gradient(135deg, #1d4ed8, #38bdf8); padding: 24px; border-radius: 12px; margin-bottom: 24px;">
            <h1 style="color: white; margin: 0; font-size: 22px; font-weight: 700;">New Message — KeroDevs</h1>
            <p style="color: rgba(255,255,255,0.8); margin: 6px 0 0; font-size: 14px;">Someone filled out the contact form</p>
          </div>

          <div style="background: white; border-radius: 12px; padding: 24px; border: 1.5px solid rgba(56,189,248,0.25);">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px; width: 140px;">Full Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-weight: 600; font-size: 14px;">${firstname} ${lastname}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;">
                  <a href="mailto:${email}" style="color: #1d4ed8; font-size: 14px; font-weight: 500; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px;">Phone</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-weight: 500; font-size: 14px;">${phnumber}</td>
              </tr>
              <tr>
                <td style="padding: 14px 0 0; color: #64748b; font-size: 13px; vertical-align: top;">Message</td>
                <td style="padding: 14px 0 0; color: #0f172a; font-size: 14px; line-height: 1.7;">${Message.replace(/\n/g, '<br/>')}</td>
              </tr>
            </table>
          </div>

          <p style="text-align: center; color: #94a3b8; font-size: 12px; margin-top: 20px;">
            Sent via KeroDevs.com contact form
          </p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Email send error:', error)
    return NextResponse.json({ error: 'Failed to send email. Please try again.' }, { status: 500 })
  }
}