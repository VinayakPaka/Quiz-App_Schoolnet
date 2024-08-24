import React from 'react';

function QuizSummary({ score, total, onRestart, onNewQuiz, wrongAnswers }) {
  const percentage = Math.round((score / total) * 100);

  return (
    <div className="quiz-summary animate__animated animate__fadeIn">
      <h2>Quiz Completed!</h2>
      <p>Your score: {score} out of {total}</p>
      <p>Percentage: {percentage}%</p>
      <button onClick={onRestart} className="animate__animated animate__pulse animate__infinite">Restart Quiz</button>
      <button onClick={onNewQuiz} className="animate__animated animate__pulse animate__infinite">Choose New Quiz</button>
      {wrongAnswers.length > 0 && (
        <div className="wrong-answers">
          <h3>Wrong Answers:</h3>
          <ul>
            {wrongAnswers.map((answer, index) => (
              <li key={index} className="wrong-answer">
                <p><strong>Question:</strong> {answer.question.text}</p>
                <p><strong>Your answer:</strong> {Array.isArray(answer.selectedAnswer)
                  ? answer.selectedAnswer.map(ansIndex => answer.question.answers[ansIndex]).join(', ')
                  : answer.question.answers[answer.selectedAnswer]}</p>
                <p><strong>Correct answer:</strong> {Array.isArray(answer.correctAnswer)
                  ? answer.correctAnswer.map(ansIndex => answer.question.answers[ansIndex]).join(', ')
                  : answer.question.answers[answer.correctAnswer]}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default QuizSummary;
