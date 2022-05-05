/* eslint-disable no-nested-ternary */
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserStateContext } from "../../App";

import * as Api from "../../api";

// 컴포넌트 import
import Freeboards from "./freeboard/Freeboards";
import TagFilter from "./filter/tagfilter/TagFilter";
import StatusFilter from "./filter/ststusfilter/StatusFilter";
import OrderFilter from "./filter/orderfilter/OrderFilter";
import Pager from "./pager/Pager";
import Questionboards from "./questionboard/Questionboards";

// 스타일 import
import { styled, List, Paper, Grid, ListItemButton, ListItemText, Box, Button } from "../styles/Mui";
import { TabDiv, TabContainer, TagContainer, FilterContainer, CommunityPostContainer, PostButtonContainer } from "./CommunityPageStyles";
import "../styles/CommunityPage.css";

const CommunityPage = function () {
  const navigate = useNavigate();
  const userState = useContext(UserStateContext);

  const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3),
    color: theme.palette.text.secondary,
  }));

  const [posts, setPosts] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  // category 메뉴 관련 (팀원 구해요/ 팀 찾아요 / 자유게시판 / 질문게시판)
  const [categoryUrl, setCategoryUrl] = useState("recruits");

  // ststus 탭 관련 (전체 / 모집중 / 최신순)
  const [statusReset, setStatusReset] = useState(false);
  const [currentStatus, setCurrentStatus] = useState("all");

  const currentStatusFunction = (statusUrl) => {
    setCurrentStatus(statusUrl);
  };

  const statusResetDoneFunction = (statusResetDone) => {
    setStatusReset(!statusResetDone);
  };

  // order 탭 관련 (최신순 / 댓글많은순 / 좋아요순)
  const [orderReset, setOrderReset] = useState(false);
  const [currentOrder, setCurrentOrder] = useState("recently");

  const currentOrderFunction = (orderUrl) => {
    setCurrentOrder(orderUrl);
  };

  const orderResetDoneFunction = (orderResetDone) => {
    setOrderReset(!orderResetDone);
  };

  // tag 필터 관련
  const [tagReset, setTagReset] = useState(false);
  const [tagUrlQuery, setTagUrlQuery] = useState("");
  // tag 필터 배열을 받아 쿼리스트링 형태로 변환
  const tagQueryFunction = (tagUrls) => {
    if (tagUrls.length === 0) {
      setTagUrlQuery("");
    } else if (tagUrls.length === 1) {
      setTagUrlQuery(`&tag=${tagUrls[0]}`);
    } else {
      setTagUrlQuery(`&tag=${tagUrls.join("%2C")}`);
    }
  };

  const tagResetDoneFunction = (tagResetDone) => {
    setTagReset(!tagResetDone);
  };

  // queryUrl 세팅해서 보내는 곳
  const [totalQuery, setTotalQuery] = useState("");

  useEffect(() => {
    // 만약 전역 상태의 user가 null이라면, 로그인 페이지로 이동함.
    if (!userState.user) {
      navigate("/login");
      return;
    }

    const totalQueryFunction = () => {
      if (currentStatus === "all" && currentOrder === "recently" && tagUrlQuery === "") {
        setTotalQuery("");
      } else if (currentStatus === "all" && currentOrder === "recently" && tagUrlQuery !== "") {
        setTotalQuery(`?${tagUrlQuery}`);
      } else if (currentStatus === "all" && currentOrder !== "recently") {
        setTotalQuery(`?${tagUrlQuery}&order=${currentOrder}`);
      } else if (currentStatus !== "all" && currentOrder === "recently") {
        setTotalQuery(`?status=${currentStatus}${tagUrlQuery}`);
      } else if (currentStatus !== "all" && currentOrder !== "recently") {
        setTotalQuery(`?status=${currentStatus}${tagUrlQuery}&order=${currentOrder}`);
      } else {
        console.log("뭐를 빠드렸을까?");
      }

      // console.clear();
      // console.log("totalQuery : ", totalQuery);
    };

    totalQueryFunction();

    // "userlist" 엔드포인트로 GET 요청을 하고, users를 response의 data로 세팅함.
    if (categoryUrl === "recruits" || categoryUrl === "findteams") {
      Api.get(`${categoryUrl}${totalQuery}`).then((res) => setPosts(res.data));
      navigate(`/community/${categoryUrl}${totalQuery}`);
    }
  }, [categoryUrl, navigate, userState, totalQuery, currentStatus, currentOrder, tagUrlQuery]);

  const handleClick = async (e) => {
    setIsClicked(true);
    const url = e.currentTarget.getAttribute("value");
    //console.log(e.currentTarget.getAttribute("value"));
    setCategoryUrl(url);
    // 다른 게시판으로 이동할 때마다 초기화
    setCurrentStatus("all");
    setStatusReset(true);
    setCurrentOrder("recently");
    setOrderReset(true);
    setTagUrlQuery("");
    setTotalQuery("");
    setTagReset(true);
  };
  return (
    <CommunityPostContainer>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Item id="LeftMenu">
            <nav>
              <List>
                {leftMenuList.map((e) => {
                  return (
                    <div
                      key={e.category}
                      value={e.category}
                      onClick={(e) => {
                        handleClick(e);
                      }}
                    >
                      <ListItemButton>
                        <ListItemText primary={e.name} />
                      </ListItemButton>
                    </div>
                  );
                })}
              </List>
            </nav>
          </Item>
          <Grid item xs={9} id="RightPostList">
            <FilterContainer>
              {categoryUrl === "recruits" || categoryUrl === "findteams" ? (
                <StatusFilter currentStatusFunction={currentStatusFunction} statusReset={statusReset} statusResetDoneFunction={statusResetDoneFunction} />
              ) : (
                ""
              )}
              <TagContainer>
                {categoryUrl === "recruits" || categoryUrl === "findteams" ? <TagFilter tagQueryFunction={tagQueryFunction} tagReset={tagReset} tagResetDoneFunction={tagResetDoneFunction} /> : ""}
              </TagContainer>
              <TabDiv>
                <TabContainer>
                  {categoryUrl === "recruits" || categoryUrl === "findteams" ? (
                    <OrderFilter currentOrderFunction={currentOrderFunction} orderReset={orderReset} orderResetDoneFunction={orderResetDoneFunction} />
                  ) : (
                    ""
                  )}
                </TabContainer>
              </TabDiv>
            </FilterContainer>
            {categoryUrl === "recruits" || categoryUrl === "findteams" ? (
              <PostButtonContainer>
                <Button id="createPost" type="submit" fullWidth variant="contained">
                  게시글 작성
                </Button>
              </PostButtonContainer>
            ) : (
              ""
            )}
            <article>
              {categoryUrl === "freeboards" ? (
                <Freeboards />
              ) : (
                <Questionboards />
                // posts.map((e) => {
                //   return (
                //     <div className="PostItem" key={e.id}>
                //       <Item>
                //         <div>{e.title}</div>
                //         <div>{e.content}</div>
                //       </Item>
                //     </div>
                // );
                //   })
                // )}
              )}
              )
            </article>
            <Pager />
          </Grid>
        </Grid>
      </Box>
    </CommunityPostContainer>
  );
};
export default CommunityPage;

const leftMenuList = [
  {
    id: 1,
    category: "recruits",
    name: "팀원 구해요",
  },
  {
    id: 2,
    category: "findteams",
    name: "팀을 찾고있어요",
  },
  {
    id: 3,
    category: "freeboards",
    name: "자유 게시판",
  },
  {
    id: 4,
    category: "questions",
    name: "질문 게시판",
  },
];
