import React from "react";
import styled from "styled-components";
import traffic from "../images/traffic.mp4";
import pic1 from "../images/pic1.jpg";
import pic2 from "../images/pic2.jpg";
import pic3 from "../images/pic3.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Story() {
  return (
    <Carousel autoPlay='true' interval={10000} infiniteLoop='true' swipeable='true' emulateTouch='true'>
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
            <StoryH2>How it all started.</StoryH2>
          </StoryContent>
        </StoryStyled>
        <StoryStyled>
          <StoryBg>
            <SlidePic
              src={pic1}
              loading="lazy"
              type="image/jpg"
            />
          </StoryBg>
          <StoryContent>
            <StoryH1>Dream Job</StoryH1>
            <StoryP>It started out being a dream the idea of travelling the world in service to the economy as well as taking risks on being able to achieve what everyone wants, happiness in doing what they love. Our dream as Cubans who love traveling America is to provide for busniesses of all kinds from any of the 50 states!</StoryP>
          </StoryContent>
        </StoryStyled>
        <StoryStyled>
          <StoryBg>
            <SlidePic
              src={pic2}
              loading="lazy"
              type="image/jpg"
            />
          </StoryBg>
          <StoryContent>
            <StoryH1>Our Story</StoryH1>
          </StoryContent>
        </StoryStyled>
        <StoryStyled>
          <StoryBg>
            <SlidePic
              src={pic3}
              loading="lazy"
              type="image/jpg"
            />
          </StoryBg>
          <StoryContent>
            <StoryH1>Our Story</StoryH1>
          </StoryContent>
        </StoryStyled>
    </Carousel>
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
    font-size: 200px;
`
const StoryH2 = styled.h2`
    color: #fff;
    z-index: 3;
    font-size: 45px;
`
const StoryP = styled.p`
    color: #fff;
    z-index: 3;
`

const SlidePic = styled.img`
object-fit: cover 100%;
`;

export default Story;
