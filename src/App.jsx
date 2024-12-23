import { useState } from 'react';

export default function App() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [ans, setAns] = useState('');

  const questions = [
    {
      id: 1,
      question: 'What is 2 + 2?',
      options: ['3', '4', '5'],
      correctAnswer: '4',
    },
    {
      id: 2,
      question: 'What is the capital of France?',
      options: ['London', 'Paris', 'Berlin'],
      correctAnswer: 'Paris',
    },
    {
      id: 3,
      question: 'Who wrote "To Kill a Mockingbird"?',
      options: ['Harper Lee', 'J.K. Rowling', 'Stephen King'],
      correctAnswer: 'Harper Lee',
    },
  ];

  const clickHandler = () => {
    setIndex(index + 1);

    if (ans === questions[index].correctAnswer) {
      setScore(score + 1);
      console.log('inside if');
    }
  };

  const changeHandler = (event) => {
    setAns(event.target.value);
  };

  return (
    <>
      <h2>Quiz App</h2>
      {index <= 2 ? (
        <div>
          <h3>Question {index + 1}</h3>
          <p>{questions[index].question}</p>
          <ul>
            {questions[index].options.map((option) => (
              <li key={option}>
                <input
                  type="radio"
                  name={index}
                  value={option}
                  onChange={changeHandler}
                />
                {option}
              </li>
            ))}
          </ul>
          <button onClick={clickHandler}>Next</button>
        </div>
      ) : (
        <div>
          <h3>Quiz Result</h3>
          <p>
            Your Score : {score}/{questions.length}
          </p>
        </div>
      )}
    </>
  );
}
