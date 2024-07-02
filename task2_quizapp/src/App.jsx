import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";

import Hero from "./components/hero"
import CreateQuiz from "./components/createquiz";
import SolveQuiz from "./components/solvequiz";
import {data } from "./assets/qna.js";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route>
        <Route path="/" element={<Hero />} />
        <Route path="/createquiz" element={<CreateQuiz />} />
        <Route path="/solvequiz" element={<SolveQuiz data={data} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
