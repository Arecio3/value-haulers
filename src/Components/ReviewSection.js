import React, { useState } from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
// import review1 from "../images/review1.svg";
// import review2 from "../images/review2.svg";
function ReviewSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: 1,
      quote:
        "Amazing Work! Really knowledgeable, fast learner and good communicator!!",
      img: "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
      name: "Patrick Moore",
    },
    {
      id: 2,
      quote: "Wide variety of skills awesome communication and enthusiasm!!",
      img: "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
      name: "Dan Rosenbaum",
    },
    {
      id: 3,
      quote:
        "Great to work with! Awesome team player open to new ideas and willing to learn!",
      img: "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
      name: "Adam Alcantara",
    },
  ];

  const handleClick = (direction) => {
    direction === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <ReviewStyled>
      <InnerLayout>
            {/* <ReviewImg1 src={review1} alt="review 1 pic" /> */}
            {/* <ReviewImg2 src={review2} alt="review 2 pic" /> */}
        <section className="testimonial-section" id="reviews">
          <div className="test-container">
            <div className="test-row">
              <div className="test-header">
                <h3 className="review-header">Reviews</h3>
                <h1 className="review-subHeader">People Said</h1>
              </div>
            </div>
            <div className="test-row">
              <div className="test-box">
                <div
                  className="test-slider"
                  style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
                >
                  <div className="test-slider-container" key={1}>
                    {/* testimonial start */}
                    <div className="test-item">
                      <i className="fa fa-quote-left left"></i>
                      <i className="fa fa-quote-right right"></i>
                      <p>
                        Amazing Work! Really knowledgeable, fast learner and
                        good communicator!!
                      </p>
                      <img
                        className="test-img"
                        src="https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg"
                        alt="testimonial"
                      />
                      <span>Arecio Canton</span>
                    </div>
                    {/* testimonial end */}
                  </div>
                  <div className="test-slider-container" key={2}>
                    {/* testimonial start */}
                    <div className="test-item">
                      <i className="fa fa-quote-left left"></i>
                      <i className="fa fa-quote-right right"></i>
                      <p>
                        Super fast and reliable! Also great customer service
                      </p>
                      <img
                        className="test-img"
                        src="https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg"
                        alt="testimonial"
                      />
                      <span>Emily Morgado</span>
                    </div>
                    {/* testimonial end */}
                  </div>
                  <div className="test-slider-container" key={3}>
                    {/* testimonial start */}
                    <div className="test-item">
                      <i className="fa fa-quote-left left"></i>
                      <i className="fa fa-quote-right right"></i>
                      <p>
                        Great to work with! Awesome team player open to new
                        ideas and willing to learn!
                      </p>
                      <img
                        className="test-img"
                        src="https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg"
                        alt="testimonial"
                      />
                      <span>Melanie Morgado</span>
                    </div>
                    {/* testimonial end */}
                  </div>
                </div>
                <div className="test-slider-nav">
                  <span
                    onClick={() => handleClick("left")}
                    className="slider-buttons outer-shadow hover-in-shadow"
                    id="left-button"
                  >
                    <i className="fa fa-angle-left"></i>
                  </span>
                  <span
                    onClick={() => handleClick("right")}
                    className="slider-buttons outer-shadow hover-in-shadow"
                    id="right-button"
                  >
                    <i className="fa fa-angle-right"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </InnerLayout>
    </ReviewStyled>
  );
}

const ReviewStyled = styled.section`
  padding: 10rem 0;

  
  .testimonial-section {
    padding: 80px 0 80px;
    @media screen and (max-width: 480px) {
      padding: 0;
    }
  }

  .testimonial-section.active {
    background-color: var(--black-50-dm);
  }

  .test-header {
    color: var(--accent-pink);
  }

  .test-header h1,
  h3 {
    text-align: center;
    justify-content: center;
  }

  .test-header h3 {
    color: var(--purple-primary);
  }

  .test-slider {
    border-radius: 10px;
  }

  .test-box {
    width: 100%;
    max-width: 600px;
    margin: auto;
    margin-top: 50px;
  }

  .test-item {
    padding: 30px;
    text-align: center;
    position: relative;
    box-shadow: 3px 3px 3px #d0d0d0, -3px -3px 3px #f8f8f8;
  }

  .test-item.active {
    background-color: var(--black-50-dm);
    box-shadow: 3px 3px 3px #222327, -3px -3px 3px #363636;
  }

  .test-item i {
    position: absolute;
    font-size: 30px;
    color: var(---dark-primary);
    opacity: 0.1;
  }

  .left {
    left: 5px;
    top: 5px;
    color: var(--dark-primary) !important;
  }
  .right {
    right: 5px;
    bottom: 5px;
    color: var(--dark-primary) !important;
  }

  .test-slider {
    height: 450px;
    display: flex;
    position: absolute;
    /* change to -500vh to see */
    left: 0;
    transition: all 1s ease-in-out;
    overflow: hidden;
  }

  .test-slider-container {
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .test-item {
    width: 900px;
    height: 300px;
    background-color: white;
    border-radius: 20px;
  }

  .test-img {
    max-width: 70px;
    display: inline-block;
    border-radius: 50%;
    width: 100%;
  }

  .test-item p {
    font-size: 16px;
    list-style: 26px solid;
    color: var(--lavender-secondary);
    margin: 0 0 30px;
  }

  .test-item span {
    display: block;
    margin: 10px 0 0;
    font-weight: 600;
    font-size: 16px;
    color: var(--accent-pink);
  }

  .test-slider-nav {
    margin-top: 30px;
    text-align: center;
  }

  .slider-buttons {
    height: 40px;
    width: 40px;
    color: var(--dark-primary);
    display: inline-block;
    font-size: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
    border-radius: 50%;
    margin: 0 4px;
  }

  .test-slider-nav span i {
    line-height: 40px;
  }

  .test-slider-nav span:after {
    border-radius: 50%;
  }

  .outer-shadow {
    box-shadow: var(--outer-shadow);
  }

  .hover-in-shadow {
    position: relative;
    z-index: 1;
  }

  .hover-in-shadow:hover {
    box-shadow: var(--outer-shadow-0);
  }

  .hover-in-shadow:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease;
    z-index: -1;
  }

  .hover-in-shadow:after {
    box-shadow: var(--inner-shadow);
  }

  .inner-shadow {
    box-shadow: var(--inner-shadow);
  }
/* 
  .review-1-img {
    top: 95%;

  }

  .review-2-img {
    margin-bottom: 1%;

  }
.review-container {
  padding: 10rem 0; 

}*/

  @media (max-width: 768px) {
    .test-item {
      flex: 0 0 80%;
      max-width: 80%;
    }
  }
  @media (max-width: 480px) {
    margin-top: -180px;
    .test-item {
      flex: 0 0 90%;
      max-width: 90%;
      height: 75%;
    }
    #left-button {
      left: -20px;
    }
    #right-button {
      top: -40px;
      right: -20px;
    }
      .review-header {
       position: absolute;
       margin-top: -25px;
      left: 145px;
    }
      .review-subHeader {
        display: flex;
       margin-top: 20px;
    }
  }
`;

// const ReviewImg1 = styled.img`
//   height: 450px;
//   width: 450px;
//   position: absolute;
//   margin-top: 180px;
//   right: 77%;
// `;
// const ReviewImg2 = styled.img`
//   height: 350px;
//   width: 350px;
//   position: absolute;
//   right: 5%;
//   margin-top: 10px;
// `;

export default ReviewSection;
