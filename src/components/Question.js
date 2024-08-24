import React, { useState } from 'react';

function Question({ question, onAnswer }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = () => {
    if (selectedAnswer === null) {
      setError('Please select an answer');
      return;
    }
    
    setError(null);
    let correct = false;

    switch (question.type) {
      case 'single':
        correct = selectedAnswer === question.correctAnswer;
        break;
      case 'multiple':
        correct = JSON.stringify(selectedAnswer.sort()) === JSON.stringify(question.correctAnswer.sort());
        break;
      case 'boolean':
        correct = selectedAnswer === question.correctAnswer;
        break;
      default:
        console.error('Unknown question type');
    }
    onAnswer(correct, selectedAnswer, question);
    setSelectedAnswer(null);
  };

  const renderAnswers = () => {
    switch (question.type) {
      case 'single':
      case 'boolean':
        return question.answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => setSelectedAnswer(index)}
            className={`answer-button ${selectedAnswer === index ? 'selected' : ''}`}
          >
            {answer}
          </button>
        ));
      case 'multiple':
        return question.answers.map((answer, index) => (
          <label key={index} className="answer-button">
            <input
              type="checkbox"
              checked={selectedAnswer && selectedAnswer.includes(index)}
              onChange={() => {
                const newSelected = selectedAnswer ? [...selectedAnswer] : [];
                if (newSelected.includes(index)) {
                  newSelected.splice(newSelected.indexOf(index), 1);
                } else {
                  newSelected.push(index);
                }
                setSelectedAnswer(newSelected);
              }}
            />
            {answer}
          </label>
        ));
      default:
        return null;
    }
  };

  return (
    <div className="question">
      <h2>{question.text}</h2>
      <div className="answers">{renderAnswers()}</div>
      {error && <p className="error">{error}</p>}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Question;