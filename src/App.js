import React, { useState } from 'react';
import './index.css';

function App() {
  // Define state to manage the visibility of answers for each question
  const [answerVisible1, setAnswerVisible1] = useState(false);
  const [answerVisible2, setAnswerVisible2] = useState(false);
  const [answerVisible3, setAnswerVisible3] = useState(false);

  return (
    <div className="faq-container">
      <h1>FAQs from students</h1>
      <div className="faq-item">
        <h2>Question 1?</h2>
        <p>I forgot my password. How can I reset it?</p>
        {/* Render answer conditionally based on state */}
        {answerVisible1 && (
          <p>Kindly click on "Forget Password" and supply your registered email to receive password reset.</p>
        )}
        {/* Button toggles visibility of answer */}
        <button className='btn' onClick={() => setAnswerVisible1(!answerVisible1)}>
          {answerVisible1 ? 'Hide Answer' : 'Click here'}
        </button>
      </div>
      {/* Repeat the same pattern for other FAQ items */}
      <div className="faq-item">
        <h2>Question 2?</h2>
        <p>How do I log in to the student portal?</p>
        {/* Render answer conditionally based on state */}
        {answerVisible2 && (
          <p>Kindly click on the right-top drop down button, then, supply your details i.e StudentID and password.</p>
        )}
        {/* Button toggles visibility of answer */}
        <button className='btn' onClick={() => setAnswerVisible2(!answerVisible2)}>
          {answerVisible2 ? 'Hide Answer' : 'Click here'}
        </button>
      </div>
      <div className="faq-item">
        <h2>Question 3?</h2>
        <p>Where can I find my class schedule and timetable?</p>
        {/* Render answer conditionally based on state */}
        {answerVisible3 && (
          <p>Login with your details and click on Academics Activities at the bottom-right corner</p>
        )}
        {/* Button toggles visibility of answer */}
        <button className='btn' onClick={() => setAnswerVisible3(!answerVisible3)}>
          {answerVisible3 ? 'Hide Answer' : 'Click here'}
        </button>
      </div>
    </div>
  );
}

export default App;
