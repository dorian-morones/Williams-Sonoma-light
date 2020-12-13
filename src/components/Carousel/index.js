import * as React from "react";
import { CarouselContainer } from "./styles/carousel";

const Carousel = ({ onClose, images }) => {
  console.log("slides", images);
  return (
    <CarouselContainer>
      <p onClick={() => onClose()}>x</p>
      <p>Carousel</p>
      <p>{images[0].href}</p>
      <img src={images[0].href} alt="dd" />
      <p>Carousel 2</p>
    </CarouselContainer>
  );
};

export default Carousel;
