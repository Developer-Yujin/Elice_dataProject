import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { get } from "../../../api";
import { useNavigate } from "react-router";

const Lists = ({ setViewType }) => {
  const navigate = useNavigate();
  const [isFetchCompleted, setIsFetchCompleted] = useState(false);
  const [lists, setLists] = useState([]);

  useEffect(() => {
    async function loadquestionList() {
      const res = await get(`questionlist`);
      setLists(res.data);
      setIsFetchCompleted(true);
    }
    loadquestionList();
  }, []);

  // * * Skeleton Code 작성할 것
  if (!isFetchCompleted) {
    return "Loading...";
  }

  return (
    <div id="questionboardLists">
      {lists.map((questionboard) => (
        <Card sx={{ minWidth: 275 }} key={questionboard._id} onClick={() => navigate(`questions/${questionboard._id}`)}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {questionboard.name}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {questionboard.title}
            </Typography>
            <Typography variant="body2">{questionboard.content}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Lists;
