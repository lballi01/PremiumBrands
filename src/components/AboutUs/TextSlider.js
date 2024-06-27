import { useState } from "react";

const slideStyles = {
  width: "100%",
  height: "100%",
  
  display: "flex",
  justifyContent: "flex",
  alignItems: "center",
  color: "#000000",
  fontSize: "24px",
  backgroundColor: "rgba(120, 120, 20, 0.10)",
  padding: " 30px",
  textAlign: "left",
  borderRight: "8px solid",
  borderBottom: "5px solid",

};

const rightArrowStyles = {
  position: "absolute",
  top: "95%",
  transform: "translate(0, -50%)",
  right: "5%",
  fontSize: "30px",
  color: "#ffffff",
  zIndex: 1,
  cursor: "pointer",
  backgroundColor: "rgba(0, 0, 0)",
  paddingLeft: "10px",
  paddingRight: "10px",
};

const leftArrowStyles = {
  position: "absolute",
  top: "95%",
  transform: "translate(0, -50%)",
  left: "80%",
  fontSize: "30px",
  color: "#ffffff",
  zIndex: 1,
  cursor: "pointer",
  backgroundColor: "rgba(0, 0, 0)",
  paddingLeft: "10px",
  paddingRight: "10px",
};

const sliderStyles = {
  position: "relative",
  height: "100%",
};

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
};

const dotStyle = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",
};

const TextSlider = ({ texts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? texts.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === texts.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div style={sliderStyles}>
      <div>
        <div onClick={goToPrevious} style={leftArrowStyles}>
          ❰
        </div>
        <div onClick={goToNext} style={rightArrowStyles}>
          ❱
        </div>
      </div>
      <div style={slideStyles}>
        {texts[currentIndex]}
      </div>
      <div style={dotsContainerStyles}>
        {texts.map((_, slideIndex) => (
          <div
            style={dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextSlider;