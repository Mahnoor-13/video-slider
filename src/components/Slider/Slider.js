import React, { useEffect, useState } from "react";
import "./slider.css";
import Dots from "./Dots";
import prev from "../../assets/prev.png";
import next from "../../assets/next.png";
import sliderImage from "../../components/Slider/SliderContent";
import Checkbox from "react-custom-checkbox";
import * as Icon from "react-icons/fi";

const len = sliderImage.length - 1;

function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const handlePrev = () =>
    setActiveIndex(activeIndex < 1 ? len : activeIndex - 1);

  const handleNext = () =>
    setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);

  const [dash, setDash] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29,
  ]);

  return (
    <div className="slider-container">
      {dash.map(() => {
        return (
          <>
            <div className="border-colored"></div>
            <div className="border-space"></div>
          </>
        );
      })}
      {/* <div className="border-colored"></div>
      <div className="border-space"></div>

      <div className="border-colored"></div>
      <div className="border-space"></div>

      <div className="border-colored"></div>
      <div className="border-space"></div>

      <div className="border-colored"></div>
      <div className="border-space"></div>

      <div className="border-colored"></div> */}

      {/* <p>hi</p> */}
      {/* <div className="arrows">
        <span className="prev" onClick={handlePrev}>
          <img src={prev} className="prevButton" />
        </span>

        <section>
          {sliderImage.map((slide, index) => (
            <div
              key={index}
              className={index === activeIndex ? "slides active" : "inactive"}
            >
              <iframe
                frameborder="0"
                src={slide.urls}
                className="video"
              ></iframe>
            </div>
          ))}
        </section>
        <span className="next" onClick={handleNext}>
          <img src={next} className="prevButton" />
        </span>
      </div>
      <Dots
        activeIndex={activeIndex}
        sliderImage={sliderImage}
        onclick={(activeIndex) => setActiveIndex(activeIndex)}
      />{" "} */}

      {/* <Checkbox
        icon={<Icon.FiCheck color="#fff" size={14} />}
        name="my-input"
        checked={true}
        onChange={(value, event) => {
          let p = {
            isTrue: value,
          };
          console.log(event);
        }}
        borderColor="#D7C629"
        style={{ cursor: "pointer" }}
        labelStyle={{ marginLeft: 5, userSelect: "none" }}
        label="Have you started using it?"
      /> */}
    </div>
  );
}

// export default Slider;

// Scroll To Bottom *************


// import React, { useEffect, useRef, useState } from 'react'

// const Messenger = () => {
//   const [messages, setMessages] = useState([
//         "message 1",
//         "message 2",
//         "message 3",
//         "message 4",
//         "message 5",
//         "message 6",
//         "message 7",
//         "message 8",
//         "message 9",
//         "message 10",
//         "message 11",
//         "message 12",
//         "message 13",
//         "message 14",
//         "message 15",
//         "message 16",
//         "message 17",
//         "message 18"
//       ])
//   const bottom = useRef(null)

//   const scrollToBottom = () => {
//     bottom.current.scrollIntoView({ behavior: "smooth" })
//   }

//   // useEffect(() => {
//   //   scrollToBottom()
//   // }, [messages]);
//   const scroll = () => {
//     scrollToBottom()
//   }

//   return (
//     <div>
//       <button onClick={scroll}  >Scroll</button>
//           {messages.map(message => <h1>{message}</h1>)}
//           <div ref={bottom}></div>

//     </div>
//   )
// }

// export default Messenger
