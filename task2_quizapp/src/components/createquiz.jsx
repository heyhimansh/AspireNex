import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/log.png";

const CreateQuiz = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([
    { question: "", options: ["", "", "", ""], answer: 1 },
  ]);

  const handleChange = (index, field, value) => {
    const newQuestions = [...questions];
    if (field === "question") {
      newQuestions[index].question = value;
    } else if (field.startsWith("option")) {
      const optionIndex = parseInt(field.split("option")[1]) - 1;
      newQuestions[index].options[optionIndex] = value;
    } else if (field === "answer") {
      newQuestions[index].answer = parseInt(value);
    }
    setQuestions(newQuestions);
  };

  const addQuestion = () => {
    setQuestions([
      ...questions,
      { question: "", options: ["", "", "", ""], answer: 1 },
    ]);
  };

  const deleteQuestion = (index) => {
    const newQuestions = questions.filter((_, i) => i !== index);
    setQuestions(newQuestions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/solvequiz", { state: { questions } });
  };

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

      <div className="max-w-lg w-full p-5 font-sans bg-white text-gray-900 rounded-lg shadow-lg">
        <div className="mt-10 mb-5">
          <h1 className="text-3xl font-bold text-center hover:text-indigo-500 transition duration-300">
            Create Your Own Quiz
          </h1>
          <p className="text-gray-700 text-center mt-2">
            Design and customize your quiz to challenge and engage your
            audience.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          {questions.map((q, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow p-4 mb-5 relative"
            >
              <div className="p-2">
              <button
                type="button"
                onClick={() => deleteQuestion(index)}
                className="text-4xl absolute top-2 right-3 text-red-500 hover:text-red-700 transition duration-300"
              >
                &times;
              </button>
              </div>
              <br />

              <div className="bg-indigo-700 text-white p-3 rounded-t-lg mb-3 text-lg">
                <input
                  type="text"
                  placeholder="Enter question"
                  value={q.question}
                  onChange={(e) =>
                    handleChange(index, "question", e.target.value)
                  }
                  className="w-full bg-indigo-700 text-white border-none outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-indigo-800"
                />
              </div>

              <p className="text-gray-400 px-1 text-sm mb-2">
                Enter the options:
              </p>

              {q.options.map((opt, i) => (
                <input
                  key={i}
                  type="text"
                  placeholder={`Option ${i + 1}`}
                  value={opt}
                  onChange={(e) =>
                    handleChange(index, `option${i + 1}`, e.target.value)
                  }
                  className="w-full p-2 my-2 bg-gray-700 border border-gray-600 rounded-lg mx-auto block text-white focus:ring-2 focus:ring-indigo-500 focus:bg-gray-600"
                />
              ))}
              <select
                value={q.answer}
                onChange={(e) => handleChange(index, "answer", e.target.value)}
                className="w-full p-2 mt-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-indigo-500 focus:bg-gray-600"
              >
                {q.options.map((_, i) => (
                  <option key={i} value={i + 1}>
                    Option {i + 1}
                  </option>
                ))}
              </select>
            </div>
          ))}
          <div className="flex justify-between">
            <button
              type="button"
              onClick={addQuestion}
              className="bg-indigo-600 text-white py-2 px-4 rounded-full shadow hover:bg-indigo-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Add Question
            </button>
            <button
              type="submit"
              className="bg-indigo-600 text-white py-2 px-4 rounded-full shadow hover:bg-indigo-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Save Quiz
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateQuiz;
