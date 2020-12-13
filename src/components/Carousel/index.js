import * as React from "react";
import { CarouselContainer } from "./styles/carousel";

const Carousel = ({ onClose, images }) => {

  const [position, setPosition] = React.useState(0);

  const handleNext = () => {
    if(position < (images.length - 1)){
      setPosition(position + 1)
    }
  };

  const handlePrev = () => {
    if(position > 0){
      setPosition(position - 1)
    }
  };

  return (
    <CarouselContainer>
      <p onClick={() => onClose()}>x</p>
      <img src={images[position]?.href} alt="product_Image" />
      {/* {images !== undefined &&
        images.map((item) => {
          return <img src={item?.href} />;
        })} */}
        <p onClick={() => handlePrev()}>Prev</p>
        <p onClick={() => handleNext()}>Next</p>
    </CarouselContainer>
  );
};

export default Carousel;
