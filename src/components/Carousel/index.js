import * as React from "react";
import { 
  CarouselContainer,
  ImageContainer,
  CloseButton,
  Controls,
  Arrow
} from "./styles/carousel";

const Carousel = ({ onClose, images }) => {
  const [position, setPosition] = React.useState(0);

  const handleNext = () => {
    if (position < images.length - 1) {
      setPosition(position + 1);
    }
  };

  const handlePrev = () => {
    if (position > 0) {
      setPosition(position - 1);
    }
  };

  return (
    <CarouselContainer>
      <CloseButton onClick={() => onClose()}>x</CloseButton>
      <ImageContainer>
        <img src={images[position]?.href} alt="product_Image" />
        {/* {images !== undefined &&
        images.map((item) => {
          return <img src={item?.href} />;
        })} */}
        <Controls>
          <Arrow onClick={() => handlePrev()}>Prev</Arrow>
          <Arrow onClick={() => handleNext()}>Next</Arrow>
        </Controls>
      </ImageContainer>
    </CarouselContainer>
  );
};

export default Carousel;
