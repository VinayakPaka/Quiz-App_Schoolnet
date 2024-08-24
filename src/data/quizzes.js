const quizzes = [
    {
      id: 1,
      title: 'General Knowledge',
      questions: [
        {
          type: 'single',
          text: 'What is the capital of France?',
          answers: ['London', 'Berlin', 'Paris', 'Madrid'],
          correctAnswer: 2
        },
        {
          type: 'multiple',
          text: 'Which of these are planets in our solar system?',
          answers: ['Earth', 'Jupiter', 'Sun', 'Mars'],
          correctAnswer: [0, 1, 3]
        },
        {
          type: 'boolean',
          text: 'The Great Wall of China is visible from space.',
          answers: ['True', 'False'],
          correctAnswer: 1
        }
      ]
    },
    {
      id: 2,
      title: 'Science Quiz',
      questions: [
        {
          type: 'single',
          text: 'What is the chemical symbol for gold?',
          answers: ['Au', 'Ag', 'Fe', 'Cu'],
          correctAnswer: 0
        },
        {
          type: 'multiple',
          text: 'Which of these are noble gases?',
          answers: ['Helium', 'Oxygen', 'Neon', 'Argon'],
          correctAnswer: [0, 2, 3]
        },
        {
          type: 'boolean',
          text: 'The human body has four lungs.',
          answers: ['True', 'False'],
          correctAnswer: 1
        }
      ]
    },
    {
      id: 3,
      title: 'Pop Culture Trivia',
      questions: [
        {
          type: 'single',
          text: 'Who played Jack in the movie "Titanic"?',
          answers: ['Brad Pitt', 'Leonardo DiCaprio', 'Tom Cruise', 'Johnny Depp'],
          correctAnswer: 1
        },
        {
          type: 'multiple',
          text: 'Which of these are characters from "Friends"?',
          answers: ['Ross', 'Walter', 'Chandler', 'Jesse'],
          correctAnswer: [0, 2]
        },
        {
          type: 'boolean',
          text: 'The Beatles were from Liverpool.',
          answers: ['True', 'False'],
          correctAnswer: 0
        }
      ]
    },
    {
      id: 4,
      title: 'History Quiz',
      questions: [
        {
          type: 'single',
          text: 'Who was the first president of the United States?',
          answers: ['Abraham Lincoln', 'George Washington', 'Thomas Jefferson', 'John Adams'],
          correctAnswer: 1
        },
        {
          type: 'multiple',
          text: 'Which of these were ancient civilizations?',
          answers: ['Egyptian', 'Roman', 'Greek', 'Chinese'],
          correctAnswer: [0, 1, 2, 3]
        },
        {
          type: 'boolean',
          text: 'The Titanic sank in 1912.',
          answers: ['True', 'False'],
          correctAnswer: 0
        }
      ]
    }
  ];
  
  export default quizzes;