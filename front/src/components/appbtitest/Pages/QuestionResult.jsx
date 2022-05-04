import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { get, post } from "../../../api";

function AppbtiTest() {
  const navigate = useNavigate();
  const [isFetchCompleted, setIsFetchCompleted] = useState(false);
  const [finalAnswer, setFinalAnswer] = useState([]);
  const { state } = useLocation();
  const CompleteAnswer = state.join("");

  useEffect(() => {
    async function loadAnswerResult() {
      await post(`appbti`, {
        answers: CompleteAnswer,
      });
      const res = await get(`appbti`);
      console.log(res.data.result);
      console.log(res.data);
      setFinalAnswer(res.data.result);
      setIsFetchCompleted(true);
    }
    loadAnswerResult();
  }, []);

  // * * Skeleton Code 작성할 것
  if (!isFetchCompleted) {
    return "Loading...";
  }

  return (
    <main>
      <article className="area">{finalAnswer}</article>
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </main>
  );
}
export default AppbtiTest;
