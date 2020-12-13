import * as React from "react";
import { CarouselContainer } from "./styles/carousel";

const Carousel = ({ onClose, images }) => {
  console.log("slides", images);

  return (
    <CarouselContainer>
      <p onClick={() => onClose()}>x</p>
      {images !== undefined &&
        images.map((item) => {
          return <img src={item?.href} />;
        })}
    </CarouselContainer>
  );
};

export default Carousel;
