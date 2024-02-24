import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {
  const [state, setState] = useState(0);
  console.log(state);

  const handleBackClick = () => {
    if (state == 0) {
      setState(2);
    } else {
      setState(state - 1);
    }
  };

  const handleForwardClick = () => {
    if (state == 2) {
      setState(0);
    } else {
      setState(state + 1);
    }
  };
  return (
    <div className="container">
      <ArrowBackIosIcon onClick={handleBackClick} />
      <div className="imageDetails">
        <div>
          <h2>{images[state].title}</h2>
        </div>
        <div>
          <h3>{images[state].subtitle}</h3>
        </div>
      </div>
      <div>
        <img src={images[state].img} alt="" />
      </div>
      <ArrowForwardIosIcon onClick={handleForwardClick} />
    </div>
  );
}

export default Carousel;
