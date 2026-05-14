import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseKey)

// Types
export interface QuizResult {
  id?: string
  email: string
  score: number
  display_score: number
  tier: string
  discount_code: string
  discount_amount: number
  created_at?: string
}

export interface Enrollment {
  id?: string
  email: string
  name: string
  quiz_score: number
  payment_status: 'pending' | 'paid' | 'refunded'
  payment_amount: number
  discount_used: string
  cohort_date: string
  created_at?: string
}
