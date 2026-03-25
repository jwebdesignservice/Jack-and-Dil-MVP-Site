import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  try {
    const body = await req.json()
    const { name, email, company, projectType, budget, timeline, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    await resend.emails.send({
      from: 'FastLaunch <noreply@fastlaunchmvp.com>',
      to: ['support@fastlaunchmvp.com'],
      replyTo: email,
      subject: `New Project Brief — ${name} (${company || 'No company'})`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #e5e5e5; padding: 32px; border-radius: 12px; border: 1px solid rgba(249,115,22,0.3);">
          <div style="border-bottom: 1px solid rgba(249,115,22,0.2); padding-bottom: 16px; margin-bottom: 24px;">
            <h1 style="color: #f97316; font-size: 20px; margin: 0 0 4px;">⚡ New Project Brief</h1>
            <p style="color: #737373; font-size: 12px; margin: 0; font-family: monospace;">FastLaunch MVP — Contact Form</p>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #1a1a1a; color: #737373; font-size: 12px; width: 140px; vertical-align: top;">Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #1a1a1a; color: #fff; font-size: 14px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #1a1a1a; color: #737373; font-size: 12px; vertical-align: top;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #1a1a1a; color: #f97316; font-size: 14px;"><a href="mailto:${email}" style="color: #f97316;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #1a1a1a; color: #737373; font-size: 12px; vertical-align: top;">Company</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #1a1a1a; color: #fff; font-size: 14px;">${company || '—'}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #1a1a1a; color: #737373; font-size: 12px; vertical-align: top;">Product Type</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #1a1a1a; color: #fff; font-size: 14px;">${projectType || '—'}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #1a1a1a; color: #737373; font-size: 12px; vertical-align: top;">Budget</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #1a1a1a; color: #fff; font-size: 14px;">${budget || '—'}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #1a1a1a; color: #737373; font-size: 12px; vertical-align: top;">Timeline</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #1a1a1a; color: #fff; font-size: 14px;">${timeline || '—'}</td>
            </tr>
          </table>

          <div style="margin-top: 24px;">
            <p style="color: #737373; font-size: 12px; margin: 0 0 8px;">Project Brief</p>
            <div style="background: #111; border: 1px solid #1a1a1a; border-radius: 8px; padding: 16px; color: #d4d4d4; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</div>
          </div>

          <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid rgba(249,115,22,0.2);">
            <a href="mailto:${email}" style="display: inline-block; background: #f97316; color: #fff; font-size: 13px; font-weight: 600; padding: 10px 20px; border-radius: 8px; text-decoration: none;">Reply to ${name}</a>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
