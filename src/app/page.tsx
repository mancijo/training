"use client"

import { useState } from "react"
import { questions } from "./data/questions"
import { QuestionItem } from "@/components/QuestionItem"



const Page = () => {
  const [answers, setAnswers] = useState<number[]>([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const title: string = "Quiz de culinaria"

  const handleAnswered = (answer: number) => {
    setAnswers([ ...answers, answer ]);
    loadNextQuestion = () => {
      
    }
  }


  return (
    <div className="w-screen h-screen flex justify-center items-center bg-blue-600">
      <div className="w-full max-w-xl rounded-md shadow bg-white text-black shadow-black">
        <div className="p-5 font-bold text-2xl border-b border-gray-300">{title}</div>
        <div className="p-5">
          <QuestionItem
            question={questions[currentQuestion]}
            count={currentQuestion + 1}
            onAnswer={handleAnswered}
          />
        </div>
        <div className="p-5 text-center border-t border-gray-300">
          X de {questions.length} pergunta {questions.length === 1 ? "" : "s"}
        </div>
      </div>
    </div>
  )
}

export default Page