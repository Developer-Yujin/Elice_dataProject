import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router";
import { UserStateContext } from "../../../App";
import { get } from "../../../api";
import LinearProgress from "@mui/material/LinearProgress";
import View from "./PostView";
import Lists from "./Lists";
import Form from "./Postform";
import OrderFilter from "../filter/orderfilter/OrderFilter";

const Freeboards = () => {
  const navigate = useNavigate();
  const userState = useContext(UserStateContext);
  const [isFetchCompleted, setIsFetchCompleted] = useState(false);
  const [viewType, setViewType] = useState("list");
  const [freeboards, setFreeboards] = useState([]);

  const [progress, setProgress] = React.useState(10);

  const fetchPostsInfo = async () => {
    try {
      await get("freeboards");
      setViewType("list");
      setIsFetchCompleted(true);
      navigate("/community/freeboards");
    } catch (error) {
      console.log(error);
    }
  };

  // ** 로그인 상태가 아닐 때 로그인 하라고 보내주기
  useEffect(() => {
    if (!userState.user) {
      navigate("/login");
      return;
    }
    fetchPostsInfo();
  }, [userState, navigate]);

  // * * Progressbar
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  // * * Skeleton Code 작성할 것
  if (!isFetchCompleted) {
    return <LinearProgress value={progress} />;
  }

  return (
    <div className="freeboards">
      {/* <OrderFilter /> */}
      {viewType === "list" ? (
        <Lists user={userState.user} setViewType={setViewType} setFreeboards={setFreeboards} />
      ) : viewType === "form" ? (
        <Form user={userState.user} setViewType={setViewType} setFreeboards={setFreeboards} />
      ) : (
        <View user={userState.user} setViewType={setViewType} />
      )}
    </div>
  );
};

export default Freeboards;
