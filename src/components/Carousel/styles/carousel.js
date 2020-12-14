import styled from "styled-components";

export const CarouselContainer = styled.div.attrs(() => ({
  className: "CarouselContainer",
}))`
  display: flex;
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: rgb(0 0 0 / 70%);
  left: 0;
  top: 0;
  overflow: hidden;
`;

export const MainImage = styled.img.attrs(() => ({
  className: "MainImage",
}))`
  object-fit: contain;
`;

export const CloseButton = styled.div.attrs(() => ({
  className: "CloseButton",
}))`
  position: absolute;
  display: flex;
  align-items: center;
  right: 40px;
  top: 20px;
  background: #fff;
  padding: 15px;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  cursor: pointer;
  font-size: 30px;
`;

export const ImageContainer = styled.div.attrs(() => ({
  className: "ImageContainer",
}))`
  display: flex;
  flex-direction: column;
  width: 600px;
  justify-content: center;
  margin: 0 auto;
`;

export const Controls = styled.div.attrs(() => ({
  className: "Controls",
}))`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

export const Arrow = styled.div.attrs(() => ({
  className: "Arrow",
}))`
  display: flex;
  color: #000;
  font-size: 25px;
  background: #fff;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Dot = styled.div.attrs(() => ({
  className: "Dot",
}))`
  padding: 10px;
  width:10px;
  margin-right: 5px;
  cursor: pointer;
  border-radius: 50%;
  background: ${({ active }) => active};
`;
