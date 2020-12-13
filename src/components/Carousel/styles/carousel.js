import styled from "styled-components";

export const CarouselContainer = styled.div.attrs(() => ({
  className: "CarouselContainer",
}))`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: rgb(0 0 0 / 30%);
  left: 0;
  top: 0;
  overflow: hidden;
`;

export const CloseButton = styled.div.attrs(() => ({
  className: "CloseButton",
}))`
  position: absolute;
  right: 40px;
  top: 20px;
  background: #fff;
  padding: 15px;
  border-radius: 50%;
  width: 20px;
  height: 20px;
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
`;

export const Arrow = styled.div.attrs(() => ({
  className: "Arrow",
}))``;
