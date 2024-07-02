import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import logo from "../assets/log.png";

const getRandomQuestions = (data, num) => {
  const shuffled = data.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num).map((question) => ({
    ...question,
    options: [
      question.option1,
      question.option2,
      question.option3,
      question.option4,
    ],
  }));
};

const SolveQuiz = ({ data }) => {
  const location = useLocation();
  const [questions, setQuestions] = useState(
    location.state?.questions || getRandomQuestions(data, 10)
  );
  const [index, setIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [onHomePage, setOnHomePage] = useState(true);

  const optionRefs = useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ]);

  useEffect(() => {
    if (!location.state?.questions) {
      setQuestions(getRandomQuestions(data, 10));
    }
  }, [data, location.state]);

  const checkAns = (e, ans) => {
    setSelectedAnswer(ans);
    setCorrectAnswer(questions[index].answer);

    if (questions[index].answer === ans) {
      e.target.classList.add("right");
      setScore((prevScore) => prevScore + 1);
    } else {
      e.target.classList.add("wrong");
    }
    optionRefs.current[questions[index].answer - 1].current.classList.add(
      "right"
    );
  };

  const nextQuestion = () => {
    setSelectedAnswer(null);
    setCorrectAnswer(null);

    if (index >= questions.length - 1) {
      setShowResult(true);
      return;
    }

    setIndex((prevIndex) => prevIndex + 1);
    optionRefs.current.forEach((ref) => {
      ref.current.classList.remove("right", "wrong");
    });

    const form = document.querySelector(".form-quiz");
    if (form) {
      const inputs = form.querySelectorAll('input[type="radio"]');
      inputs.forEach((input) => (input.checked = false));
    }
  };

  const retryQuiz = () => {
    setQuestions(getRandomQuestions(data, 10));
    setIndex(0);
    setSelectedAnswer(null);
    setCorrectAnswer(null);
    setScore(0);
    setShowResult(false);
    setOnHomePage(true);
  };

  if (questions.length === 0) return <div>Loading...</div>;

  const question = questions[index];

  return (
    <div className="min-h-screen bg-gray-900 flex justify-center items-center">
      <div>
        <header className="absolute inset-x-0 top-0 z-50">
          <nav
            className="flex items-center justify-between p-6 lg:px-8"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Mind Mingle</span>
                <img className="h-10 w-auto" src={logo} alt="" />
              </a>
            </div>

            {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div> */}
          </nav>
        </header>
      </div>
      <div className="max-w-lg w-full p-5 py-20 font-sans bg-white text-gray-900 rounded-lg shadow-lg">
        {onHomePage ? (
          <div className="flex flex-col items-center">
            <img src={logo} alt="Mind Mingle Logo" className="w-[20%] mb-5" />
            <h1 className="text-3xl font-bold">
              Welcome to Mind Mingle, where learning meets fun!🧠
            </h1>
            <p className="text-gray-700 text-lg mt-4">
              Your ultimate quiz creation and attempt platform, designed to
              elevate your learning experience effortlessly.
            </p>
            <div className="flex items-center mt-5 space-x-5">
              <button
                className="bg-indigo-600 text-white py-2 px-4 rounded-full shadow hover:bg-indigo-700 transition duration-300"
                onClick={() => setOnHomePage(false)}
              >
                Attempt Quiz
              </button>
              <button
                className="bg-indigo-600 text-white py-2 px-4 rounded-full shadow hover:bg-indigo-700 transition duration-300"
                onClick={() => (window.location.href = "/createquiz")}
              >
                Create Quiz
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex justify-between items-center mt-10 mb-5">
              <h1 className="text-4xl font-bold">Mind Mingle 🚀</h1>
              <p className="text-gray-700 text-xl">
                {index + 1} / {questions.length}
              </p>
            </div>

            <div className="bg-gray-700 rounded-lg shadow p-5 text-white">
              {showResult ? (
                <div className="text-center">
                  <h2 className="text-3xl font-bold mb-5">Congratulations!</h2>
                  <p className="text-lg mb-5">
                    You scored {score} out of {questions.length} points.
                  </p>
                  <div className="bg-gray-900 rounded-full h-5 overflow-hidden mb-5">
                    <div
                      className="bg-indigo-500 h-full "
                      style={{ width: `${(score / questions.length) * 100}%` }}
                    ></div>
                  </div>
                  <button
                    className="bg-indigo-600 text-white py-2 px-4 rounded-full shadow hover:bg-indigo-700 transition duration-300"
                    onClick={retryQuiz}
                  >
                    Retry
                  </button>
                </div>
              ) : (
                <>
                  <div className="bg-indigo-700 text-white p-3 rounded-t-lg mb-5 text-lg">
                    <h3>
                      {index + 1}. {question.question}
                    </h3>
                  </div>
                  <p className="text-gray-700 text-lg mb-3">
                    Select the Correct Answer:
                  </p>
                  <form className="flex flex-col space-y-3">
                    {question.options.map((opt, i) => (
                      <label
                        key={i}
                        className={`flex items-center space-x-3 p-3 rounded-lg transition duration-300 cursor-pointer ${
                          selectedAnswer === i + 1 && correctAnswer !== null
                            ? correctAnswer === i + 1
                              ? "bg-green-600 text-white"
                              : "bg-red-600 text-white"
                            : "bg-gray-700 text-gray-400 hover:bg-gray-600"
                        }`}
                        ref={optionRefs.current[i]}
                      >
                        <input
                          type="radio"
                          name="question"
                          value={opt}
                          onClick={(e) => checkAns(e, i + 1)}
                          disabled={selectedAnswer !== null}
                          className="form-radio text-indigo-500"
                        />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </form>
                </>
              )}
            </div>

            {!showResult && (
              <div className="flex justify-center mt-5">
                <button
                  className="bg-indigo-600 text-white py-2 px-4 rounded-full shadow hover:bg-indigo-700 transition duration-300"
                  onClick={nextQuestion}
                  disabled={selectedAnswer === null}
                >
                  {index >= questions.length - 1 ? "Finish" : "Next"}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SolveQuiz;
