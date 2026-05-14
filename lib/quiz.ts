export interface QuizQuestion {
  question: string
  options: { text: string; score: number }[]
}

export interface ResultTier {
  maxScore: number
  displayScore: number
  message: string
  discountAmount: number
  discountCode: string
  payPrice: string
}

export const quizData: QuizQuestion[] = [
  {
    question: "How comfortable are you with Python for data analysis?",
    options: [
      { text: "Complete beginner — never coded", score: 0 },
      { text: "Basic scripts, some pandas", score: 1 },
      { text: "Comfortable with notebooks", score: 2 },
      { text: "Built ML models before", score: 3 },
    ],
  },
  {
    question: "Have you worked with machine learning frameworks?",
    options: [
      { text: "Never heard of them", score: 0 },
      { text: "Know the names, never used", score: 1 },
      { text: "Built a model or two", score: 2 },
      { text: "Production ML experience", score: 3 },
    ],
  },
  {
    question: "What's your biggest concern about AIAP?",
    options: [
      { text: "Don't know where to start", score: 0 },
      { text: "Math / stats gap", score: 1 },
      { text: "Time management", score: 2 },
      { text: "Interview nerves", score: 3 },
    ],
  },
]

export const resultTiers: ResultTier[] = [
  {
    maxScore: 2,
    displayScore: 35,
    message: "You've got work to do — but we've got your back.",
    discountAmount: 100,
    discountCode: "AIPREP100",
    payPrice: "SGD 1,399",
  },
  {
    maxScore: 5,
    displayScore: 55,
    message: "Not quite there yet — but AIAP will push you harder.",
    discountAmount: 200,
    discountCode: "AIPREP200",
    payPrice: "SGD 1,299",
  },
  {
    maxScore: 9,
    displayScore: 70,
    message: "You're more than halfway — but better polish the gaps with us.",
    discountAmount: 300,
    discountCode: "AIPREP300",
    payPrice: "SGD 1,199",
  },
]

export function calculateTier(totalScore: number): ResultTier {
  return resultTiers.find((t) => totalScore <= t.maxScore) || resultTiers[resultTiers.length - 1]
}
