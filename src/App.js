import "./App.css";
import React, { useState, useEffect } from "react";
import questions from "./Question.json";
import classNames from "classnames"
import "./App.css"

function App() {
  let [questionNumber, setQuestionNumber] = useState(0);
  const [question, setQuestion] = useState(() => questions[questionNumber]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isSelect, setIsSelect] = useState(false);
  const [isDone, setIsDone] =useState(false);
  const [answerQ, setAnswerQ]= useState();
  const [active, setActive] = useState();
  useEffect(() => {
    setQuestion(questions[questionNumber]);
  }, [questionNumber]);

  const handleNext = () => {
    setIsSelect(false)
    setIsCorrect(false)
    setQuestionNumber((questionNumber += 1));
    setActive(null)
    setIsDone(false);
   
  };

  const checkAnswer = (answer, index) => {
    console.log("answer", answer);
    setIsSelect(true);
    if (answer === question.correct_answer) {
      setIsCorrect(true);
      setIsDone(true);
      setAnswerQ(question.correct_answer)
    } else {
      setIsCorrect(false);
      setIsDone(true);
      setActive(index)
      setAnswerQ(question.correct_answer)
    }
  };

  // useEffect(() => {
  //   correctClass()
  // }, [isCorrect])
  const getAnswer = (answer)=>{
    if(answer === question.correct_answer){
      setIsDone(true);
      return 'correct'
    }
    setIsDone(true);
    return 'incorrect'
  }
  const correctClass = () => {
    if (isCorrect) {
      return "bg-green-400"
    }
    return ""
  }
  console.log(isDone);

  return (
    <div className="App grid grid-cols-6">
      <div className="col-start-2 col-span-4">
        <div className="progress-bar bg-gray-400 h-8 m-0 p-0 w-2/5"></div>

        <div className="question-wrapper py-5 px-24">
          <p className="question-number text-2xl text font-bold">
            Question <span>{question.title}</span> of 20
          </p>
          <p className="question-category text-base text-gray-400 my-2">
            {question.category}
          </p>
          <p className="question-difficulty text-sm my-1 text-gray-400">
            {question.difficulty}
          </p>
          <p className="question-text text-xl font-bold mt-2">
            {question.question}
          </p>
        </div>
        <div className="answer-wrapper py-5 px-24 justify-between flex flex-wrap mt-4 ">
          {question.answers.length &&
            question.answers.map((answer, index) => {
              return (
                <button
                  key={index}
                  className=
                  {
                    `btn__style
                    ${isDone === true  && answer === answerQ  ? 'correct' : isDone  === true && answer !==answerQ && index === active ? 'incorrect':'disable' } `
                  }
                  disabled={isDone === true }
                  onClick={() => checkAnswer(answer, index)}
                >
                  {answer}
                </button>
              );
            })}
        </div>

        {isSelect && (
          <>
            <p className="text-2xl font-bold text-center">
              {isCorrect ? "Correct" : "Wrong"} Answer
            </p>
            <div className="flex justify-center mt-2">
              <button
                className="px-7 py-2 rounded-md bg-gray-400 text-lg font-medium border border-black"
                onClick={handleNext}
              >
                Next Question
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
