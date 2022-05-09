import React from "react";
import { Container, A, Div, Img, One, Two, Three, Four, Five, Six, H1, H2, H4, Footer, Copyright, Address, CP, AP } from "./IntroductionStyles";

function Introduction() {
  return (
    <Container>
      <H1>
        <A href="https://www.notion.so/15-Try-Catch-41b9847a23794f52bc7bb25408d5e4ff">Try, Catch! 팀원들을 소개합니다!</A>
      </H1>

      <main role="main" id="main">
        <One>
          <Div>
            <Img src="https://cdn-icons-png.flaticon.com/128/189/189001.png" alt="이유진이미지" />
            <H2>이유진</H2>
            <H4>
              처음에는 미약할지라도
              <br /> 끝에서는 광대한
              <br />
              <br /> IT서비스 기획자 겸<br /> 개발자가 되고 싶습니다.
            </H4>
          </Div>
        </One>

        <Two>
          <Div>
            <Img src="https://cdn-icons-png.flaticon.com/128/188/188997.png" alt="석윤주이미지" />
            <H2>석윤주</H2>
            <H4>
              조금 느려도,
              <br /> 꾸준히 성실하게 나아가는 개발자✨
              <br />
              <br /> 섬세하고 다정한 사람들이 세상을 조금 더 아름답게 만들거라 믿습니다🙏
            </H4>
          </Div>
        </Two>

        <Three>
          <Div>
            <Img src="https://cdn-icons-png.flaticon.com/128/188/188995.png" alt="한지선" />
            <H2>한지선</H2>
            <H4>
              다양한 문제와 사람에 대한 깊은 고민으로 가치와 감동을 주는 개발자.
              <br />
              <br />
              사람을 향하는 프론트엔드 개발자가 되고싶습니다. 🤔
            </H4>
          </Div>
        </Three>

        <Four>
          <Div>
            <Img src="https://cdn-icons-png.flaticon.com/128/188/188996.png" alt="박지수" />
            <H2>박지수</H2>
            <H4>
              "우리 모두를 합친 것 보다
              <br /> 더 현명한 사람은 없다." <br />
              <br />
              함께 일하고 싶은
              <br /> 개발자가 되고 싶습니다.
            </H4>
          </Div>
        </Four>

        <Five>
          <Div>
            <Img src="https://cdn-icons-png.flaticon.com/128/188/188993.png" alt="유하얀" />
            <H2>유하얀</H2>
            <H4>
              많이 배우고 많은 사람과 소통하면서 시야를 넓히고 싶어요.
              <br />
              <br /> 안양 근처 사시는 분들이 계시면 만나서 같이 공부하고 싶습니다. <br />
              디스코드 메시지 주세요🥺
            </H4>
          </Div>
        </Five>

        <Six>
          <Div>
            <Img src="https://cdn-icons-png.flaticon.com/128/1752/1752681.png" alt="정예승" />
            <H2>정예승</H2>
            <H4>
              내용을 담을 기술과
              <br /> 기술에 담길 내용을 가진
              <br />
              <br /> 개발자가 되고싶습니다🤟🏻 "phil2:13"
            </H4>
          </Div>
        </Six>
      </main>

      <Footer>
        <Copyright>
          <CP>Copyright © 2022 Try, Catch! All rights reserved.</CP>
        </Copyright>

        <Address>
          <AP>Try, Catch!</AP>
        </Address>
      </Footer>
    </Container>
  );
}

export default Introduction;
