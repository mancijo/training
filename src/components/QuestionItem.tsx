import { Question } from "@/app/types/question"
import { useState } from "react";

type Props = {
    question: Question;
    count: number;
    onAnswer: (answer: number) => void;
}

export const QuestionItem = ({question, count, onAnswer}: Props) => {

    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
    
    const checkQuestion = (key: number) => {
        if(selectedAnswer === null) {
            setSelectedAnswer(key);
            setTimeout(() => {
                onAnswer(key);
                setSelectedAnswer(null)
            }, 2000)
        }
    }


    return (
        <div>
            <div className="font-bold text-3xl mb-2">{count}. {question.question}</div>
            <div>
                {question.options.map((item, key) => (
                    <div
                        key={key}
                        onClick={() => checkQuestion(key)}
                        className={`border px-3 py-2 rounded-md mb-4  bg-blue-100  border-blue-300
                            
                            ${selectedAnswer !== null ? 'cursor-auto hover:bg-blue-100' : 'hover:bg-blue-200 cursor-pointer'}
                            ${selectedAnswer !== null && selectedAnswer === question.answer && selectedAnswer === key && 'bg-green-500 border-green-700 hover:bg-green-500'}
                            ${selectedAnswer !== null && selectedAnswer !== question.answer && selectedAnswer === key && 'bg-red-500 border-red-700 hover:bg-red-500'}
                            `}
                    >{item}</div>
                ))}
            </div>
        </div>
    )
}