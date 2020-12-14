import * as React from "react";
import {
  CarouselContainer,
  ImageContainer,
  MainImage,
  CloseButton,
  Controls,
  Arrow,
  Dot
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
    <CarouselContainer data-testid='carousel-item'>
      <CloseButton onClick={() => onClose()}>&times;</CloseButton>
      <ImageContainer>
        <MainImage src={images[position]?.href} alt="product_Image" />

        <Controls>
          <Arrow onClick={() => handlePrev()}>&#8249;</Arrow>
          { images.map((item, index) => {
              return <Dot key={index} active={index === position ? '#ffffff' : '#9e9e9e'} onClick={() => setPosition(index)} />;
            })}
          <Arrow onClick={() => handleNext()}>&#8250;</Arrow>
        </Controls>
      </ImageContainer>
    </CarouselContainer>
  );
};

export default Carousel;
