import logo from './logo.svg'
import './App.css';
import React, {useState, useEffect} from 'react'


function App() {
  const [question, setQuestion] = useState([]);

  // useEffect(() =>{
  //   fetch(API_URL)
  //   .then(res => res.json())
  //   .then(data =>)
  // },[] )

  return (
    <div className="App grid grid-cols-6">
      <div className='col-start-2 col-span-4'>
        <div className='progress-bar bg-gray-400 h-8 m-0 p-0 w-2/5'></div>
        <div className='question-wrapper py-5 px-24'>
          <p className='question-number text-2xl text font-bold'>
            Question 1 of 20
          </p>
          <p className='question-category text-base text-gray-400 my-2'>
            Animals
          </p>
          <p className='question-difficulty text-sm my-1 text-gray-400'>
          ★✰✰
          </p>
          <p className='question-text text-xl font-bold mt-2'>Kangaroos keep food in their pouches next to their children ?</p>
        </div>
        <div className='answer-wrapper py-5 px-24 justify-between flex flex-wrap mt-4 '>
          <button className='answer-button  p-2 rounded-md bg-gray-400 font-medium text-lg mb-5 border-black border w-2/5 '>Homo</button>
          <button className='answer-button answer-button  p-2 rounded-md bg-gray-400 font-medium text-lg mb-5 border-black border w-2/5 '>Homo</button>
          <button className='answer-button answer-button  p-2 rounded-md bg-gray-400 font-medium text-lg mb-5 border-black border w-2/5 '>Homo</button>
          <button className='answer-button answer-button  p-2 rounded-md bg-gray-400 font-medium text-lg mb-5 border-black border w-2/5'>Homo</button>
        </div>
        <p className='text-2xl font-bold text-center'>Wrong Answer</p>
        <div className='flex justify-center mt-2'>
          <button className='px-7 py-2 rounded-md bg-gray-400 text-lg font-medium border border-black'>
            Next Question
          </button>
      </div>
    </div> 
  </div>
  );
}

export default App;
