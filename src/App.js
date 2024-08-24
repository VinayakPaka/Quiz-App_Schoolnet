import React, { useState } from 'react';
import QuizSelection from './components/QuizSelection';
import Question from './components/Question';
import ProgressBar from './components/ProgressBar';
import ThemeToggle from './components/ThemeToggle';
import QuizSummary from './components/QuizSummary';
import quizzes from './data/quizzes';

function App() {
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);
  const [wrongAnswers, setWrongAnswers] = useState([]);

  const handleQuizSelect = (quiz) => {
    setSelectedQuiz(quiz);
    setCurrentQuestion(0);
    setScore(0);
    setQuizCompleted(false);
    setWrongAnswers([]);
  };

  const handleAnswer = (correct, selectedAnswer, question) => {
    if (correct) {
      setScore(score + 1);
    } else {
      setWrongAnswers([...wrongAnswers, { question, selectedAnswer, correctAnswer: question.correctAnswer }]);
    }

    if (selectedQuiz && currentQuestion + 1 < selectedQuiz.questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleThemeToggle = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <div className={`App ${darkTheme ? 'dark' : 'light'}`}>
      <ThemeToggle darkTheme={darkTheme} onToggle={handleThemeToggle} />
      {!selectedQuiz && <QuizSelection quizzes={quizzes} onSelect={handleQuizSelect} />}
      {selectedQuiz && !quizCompleted && (
        <>
          <ProgressBar current={currentQuestion + 1} total={selectedQuiz.questions.length} />
          <Question
            question={selectedQuiz.questions[currentQuestion]}
            onAnswer={handleAnswer}
          />
        </>
      )}
      {quizCompleted && selectedQuiz && (
        <QuizSummary
          score={score}
          total={selectedQuiz.questions.length}
          onRestart={() => handleQuizSelect(selectedQuiz)}
          onNewQuiz={() => setSelectedQuiz(null)}
          wrongAnswers={wrongAnswers}
        />
      )}
    </div>
  );
}

export default App;