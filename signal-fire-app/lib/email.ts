import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendQuizResult(data: {
  email: string
  score: number
  displayScore: number
  message: string
  discountCode: string
  discountAmount: number
  payPrice: string
}) {
  const { email, displayScore, message, discountCode, discountAmount, payPrice } = data

  try {
    await resend.emails.send({
      from: 'SignalFire <outreach@signal-fire.us>',
      to: email,
      subject: `Your AIAP Readiness Score: ${displayScore}% + Discount Unlocked`,
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0A1628; padding: 2rem; text-align: center;">
            <h1 style="color: #C41E3A; font-family: Space Grotesk, sans-serif; margin: 0;">SignalFire</h1>
          </div>
          <div style="padding: 2rem; background: #F7F8FA;">
            <h2 style="color: #C41E3A; font-size: 2rem; margin-bottom: 1rem;">${displayScore}%</h2>
            <p style="color: #334155; font-size: 1.1rem; margin-bottom: 2rem;">${message}</p>

            <div style="background: #FFF5F7; border: 2px solid #C41E3A; border-radius: 12px; padding: 1.5rem; margin-bottom: 2rem;">
              <h3 style="color: #C41E3A; margin: 0 0 0.5rem 0;">UNLOCKED: SGD ${discountAmount} OFF</h3>
              <p style="color: #64748B; margin: 0;">Code: <strong style="color: #0A1628;">${discountCode}</strong> • Valid 48 hours</p>
            </div>

            <a href="https://paypal.me/SignalfireSG" 
               style="display: inline-block; background: #0A1628; color: white; padding: 1rem 2rem; border-radius: 12px; text-decoration: none; font-weight: 600;">
              Pay ${payPrice} Now →
            </a>

            <p style="color: #94A3B8; margin-top: 2rem; font-size: 0.9rem;">
              Questions? Reply to this email or contact outreach@signal-fire.us
            </p>
          </div>
        </div>
      `,
    })
    return { success: true }
  } catch (error) {
    console.error('Email send failed:', error)
    return { success: false, error }
  }
}

export async function sendWelcomeEmail(data: {
  email: string
  name: string
  cohortDate: string
}) {
  const { email, name, cohortDate } = data

  try {
    await resend.emails.send({
      from: 'William @ SignalFire <outreach@signal-fire.us>',
      to: email,
      subject: 'Signalfire Welcome — Course Access Unlocked',
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0A1628; padding: 2rem; text-align: center;">
            <h1 style="color: #C41E3A; font-family: Space Grotesk, sans-serif; margin: 0;">SignalFire</h1>
          </div>
          <div style="padding: 2rem; background: #F7F8FA;">
            <p style="color: #334155;">Hey ${name},</p>
            <p style="color: #334155;">Payment received. Welcome to Cohort ${cohortDate}.</p>

            <div style="background: white; border-radius: 12px; padding: 1.5rem; margin: 1.5rem 0;">
              <p style="margin: 0.5rem 0;"><strong>1.</strong> <a href="#" style="color: #2563EB;">Dashboard & Syllabus</a></p>
              <p style="margin: 0.5rem 0;"><strong>2.</strong> <a href="#" style="color: #2563EB;">Full Kit (42 notebooks)</a></p>
              <p style="margin: 0.5rem 0;"><strong>3.</strong> <a href="#" style="color: #2563EB;">Slack Invite</a></p>
              <p style="margin: 0.5rem 0;"><strong>4.</strong> Zoom Day 1: [Link sent separately]</p>
            </div>

            <p style="color: #334155;"><strong>Day 1 HW due:</strong> GitHub EDA repo</p>
            <p style="color: #64748B; margin-top: 2rem;">Questions? Reply here.</p>
            <p style="color: #94A3B8;">— William, SignalFire</p>
          </div>
        </div>
      `,
    })
    return { success: true }
  } catch (error) {
    console.error('Welcome email failed:', error)
    return { success: false, error }
  }
}
