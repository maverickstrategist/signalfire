# Signal Fire — AIAP Bootcamp

Full-stack Next.js app for the Signal Fire AIAP assessment bootcamp.

## Stack
- **Frontend:** Next.js 14 + React + Tailwind CSS
- **Backend:** Next.js API Routes + Supabase
- **Email:** Resend
- **Payments:** PayPal.me (external link)
- **Deploy:** Vercel

## Setup

### 1. Clone & Install
```bash
git clone <repo>
cd signal-fire-app
npm install
```

### 2. Environment Variables
Copy `.env.local.example` to `.env.local` and fill in:

```bash
# Supabase (get from supabase.com)
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# Resend (get from resend.com)
RESEND_API_KEY=
```

### 3. Supabase Database Setup
Run this SQL in Supabase SQL Editor:

```sql
create table quiz_results (
  id uuid default gen_random_uuid() primary key,
  email text not null,
  score integer not null,
  display_score integer not null,
  tier text not null,
  discount_code text not null,
  discount_amount integer not null,
  created_at timestamp with time zone default now()
);

create table enrollments (
  id uuid default gen_random_uuid() primary key,
  email text not null,
  name text not null,
  quiz_score integer,
  payment_status text default 'pending',
  payment_amount integer,
  discount_used text,
  cohort_date text,
  created_at timestamp with time zone default now()
);
```

### 4. Run Dev
```bash
npm run dev
```

### 5. Deploy to Vercel
```bash
npm i -g vercel
vercel --prod
```

Then add custom domain `signal-fire.site` in Vercel dashboard.

## Features
- ✅ Scored quiz (3 questions, tiered results)
- ✅ Email capture before showing discount
- ✅ Auto-email quiz results + discount code
- ✅ Supabase database tracking
- ✅ PayPal payment link
- ✅ Responsive design
- ✅ AISG brand colors

## Quiz Scoring
| Score | Display | Discount | Code |
|-------|---------|----------|------|
| 0-2 | 35% | SGD 100 | AIPREP100 |
| 3-5 | 55% | SGD 200 | AIPREP200 |
| 6-9 | 70% | SGD 300 | AIPREP300 |
