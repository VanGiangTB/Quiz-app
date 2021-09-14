import "./App.css";
import React, { useState, useEffect } from "react";
import questions from "./Question.json";
import "./App.css";
import Message from "./Message";

function App() {
  let [questionNumber, setQuestionNumber] = useState(0);
  const [question, setQuestion] = useState(() => questions[questionNumber]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isSelect, setIsSelect] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [answerQ, setAnswerQ] = useState();
  const [active, setActive] = useState();
  let [score, setScore] = useState(0);
  let [widthProgress, setWidthProgress] = useState({ width: "auto" });
  let [widthScore, setWidthScore] = useState({ width: "auto" });
  const [correctAnswer, setCorrectAnswer] = useState([]);
  let [maxScore, setMaxScore] = useState(100)


  useEffect(() => {
    if (questionNumber >= questions.length) return;
    setQuestion(questions[questionNumber]);
    setWidthProgressBar();
  }, [questionNumber, setWidthProgressBar, setQuestion]);

  const handleNext = () => {
    setIsSelect(false);
    setIsCorrect(false);
    setQuestionNumber((questionNumber += 1));
    setActive(null);
    setIsDone(false);
  };

  const checkAnswer = (answer, index) => {
    setIsSelect(true);

    if (answer === question.correct_answer) {
      // tạo 1 mảng mới cop mảng cũ và push cái mới vào
      const newCorrectAnswer = [...correctAnswer];
      newCorrectAnswer.push(question.correct_answer);
      setIsCorrect(true);
      setIsDone(true);
      setAnswerQ(question.correct_answer);
      setScore((score += 5));
      setCorrectAnswer(newCorrectAnswer);
    } else {
      setIsCorrect(false);
      setIsDone(true);
      setActive(index);
      setAnswerQ(question.correct_answer);
      setMaxScore((maxScore -=5))
    }
  };

  useEffect(() => {
    setWidthScoreBar();
  }, [correctAnswer, setWidthScoreBar])

  const setWidthProgressBar = () => {
    const width =
      document.querySelector(".progress-bar").offsetWidth / questions.length;
    setWidthProgress({ width: `${width * (questionNumber + 1)}px` });
  };
  const setWidthScoreBar = () => {
    const width =
      document.querySelector(".score-bar-wrapper").offsetWidth /
      questions.length;
    setWidthScore({ width: `${width * (correctAnswer.length)}px` });
  };

  return (
    <>
      {questionNumber >= questions.length ? (
        <Message />
      ) : (
        <div className="App grid grid-cols-6">
          <div className="col-start-2 col-span-4">
            <div className="progress-bar">
              <div
                style={widthProgress}
                className="bg-gray-400 h-8 m-0 p-0"
              ></div>
            </div>

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
                      className={`btn__style
            ${
              isDone === true && answer === answerQ
                ? "correct"
                : isDone === true && answer !== answerQ && index === active
                ? "incorrect"
                : "disable"
            } `}
                      disabled={isDone === true}
                      onClick={() => checkAnswer(answer, index)}
                    >
                      {answer}
                    </button>
                  );
                })}
            </div>

            {isSelect && (
              <div className="h-11">
                <p className="text-2xl font-bold text-center">
                  {isCorrect ? "Correct" : "Wrong"} Answer
                </p>
                <div className="flex justify-center mt-2">
                  <button
                    className="px-7 py-2 rounded-md bg-gray-400 hover:bg-gray-500 text-lg font-medium border border-black"
                    onClick={handleNext}
                  >
                    Next Question
                  </button>
                </div>
              </div>
            )}
            <div className="score-wrapper mt-36">
              <div className="">
                <div className=" score-bar-data flex justify-between">
                  <p className="user-score text-xl"> Score: {score}%</p>
                  <p className="max-score text-xl">Max Score: {maxScore}%</p>
                </div>
                <div className="">
                  <div className="score-bar-wrapper w-full bg-gray-300 border border-black h-7 rounded-lg flex items-center">
                    <div
                      style={widthScore}
                      className="bg-gray-700 h-7 rounded-lg"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
