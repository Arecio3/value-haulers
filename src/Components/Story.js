import React from "react";
import styled from "styled-components";
import traffic from "../images/traffic.mp4";

function Story() {
  return (
    <StoryStyled id="story">
      <StoryBg>
        <Video
          src={traffic}
          loading="lazy"
          autoPlay
          loop
          muted
          type="video/mp4"
        />
      </StoryBg>
      <StoryContent>
        <StoryH1>Our Story</StoryH1>
      </StoryContent>
    </StoryStyled>
  );
}

const StoryStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: relative;
  margin-right: 90%;
  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;
export const StoryBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  margin-left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin-left: 0;
`;

const StoryContent = styled.div`
max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;

 
  @media screen and (max-width: 480px) {
    padding: 3px 15px;
  }
`

const StoryH1 = styled.h1`
    color: #fff;
    z-index: 3;
    font-size: 100px;
`

export default Story;
