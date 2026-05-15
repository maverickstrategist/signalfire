import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '../../../lib/supabase'
import { sendQuizResult } from '../../../lib/email'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, score, displayScore, tier, discountCode, discountAmount } = body

    // Save to Supabase
    const { error: dbError } = await supabase.from('quiz_results').insert({
      email,
      score,
      display_score: displayScore,
      tier,
      discount_code: discountCode,
      discount_amount: discountAmount,
    })

    if (dbError) {
      console.error('Supabase error:', dbError)
    }

    // Send email
    const tierData = {
      'AIPREP100': { message: "You've got work to do — but we've got your back.", payPrice: 'SGD 1,399' },
      'AIPREP200': { message: "Not quite there yet — but AIAP will push you harder.", payPrice: 'SGD 1,299' },
      'AIPREP300': { message: "You're more than halfway — but better polish the gaps with us.", payPrice: 'SGD 1,199' },
    }

    const tierInfo = tierData[discountCode as keyof typeof tierData] || tierData['AIPREP200']

    await sendQuizResult({
      email,
      score,
      displayScore,
      message: tierInfo.message,
      discountCode,
      discountAmount,
      payPrice: tierInfo.payPrice,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json({ success: false, error: 'Internal error' }, { status: 500 })
  }
}
