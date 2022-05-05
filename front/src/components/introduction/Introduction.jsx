import React from "react";
import "./Introduction.css";

function Introduction() {
  return (
    <div className="container">
      <h1>
        <a href="https://www.notion.so/elice/15-Try-Catch-07a058cda6114947b79f96429cf9f545">Try, Catch! 팀원들을 소개합니다!</a>
      </h1>

      <main role="main" id="main">
        <article className="one">
          <div>
            <img
              src="https://images.unsplash.com/photo-1531214159280-079b95d26139?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNoYXJhY3RlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt="이유진이미지"
            />
            <h2>이유진</h2>
            <h4>프론트엔드 개발자를 지망합니다. 자신있는 거는~</h4>
          </div>
        </article>

        <article className="two">
          <div>
            <img
              src="https://images.unsplash.com/photo-1531214159280-079b95d26139?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNoYXJhY3RlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt="석윤주이미지"
            />
            <h2>석윤주</h2>
            <h4>프론트엔드 개발자를 지망합니다. 자신있는 거는~</h4>
          </div>
        </article>

        <article className="three">
          <div>
            <img
              src="https://images.unsplash.com/photo-1531214159280-079b95d26139?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNoYXJhY3RlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt="한지선"
            />
            <h2>한지선</h2>
            <h4>프론트엔드 개발자를 지망합니다. 자신있는 거는~</h4>
          </div>
        </article>

        <article className="four">
          <div>
            <img
              src="https://images.unsplash.com/photo-1531214159280-079b95d26139?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNoYXJhY3RlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt="박지수"
            />
            <h2>박지수</h2>
            <h4>백엔드 개발자를 지망합니다. 자신있는 거는~</h4>
          </div>
        </article>

        <article className="five">
          <div>
            <img
              src="https://images.unsplash.com/photo-1531214159280-079b95d26139?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNoYXJhY3RlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt="유하얀"
            />
            <h2>유하얀</h2>
            <h4>백엔드 개발자를 지망합니다. 자신있는 거는~</h4>
          </div>
        </article>

        <article className="six">
          <div>
            <img
              src="https://images.unsplash.com/photo-1531214159280-079b95d26139?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNoYXJhY3RlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt="정예승"
            />
            <h2>정예승</h2>
            <h4>백엔드 개발자를 지망합니다. 자신있는 거는~</h4>
          </div>
        </article>
      </main>
    </div>
  );
}

export default Introduction;
