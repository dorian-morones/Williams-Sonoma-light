import React from "react";
import { render } from "@testing-library/react";

import Carousel from "../index";

const data = [
  {
    size: "m",
    meta: "",
    alt: "",
    rel: "althero",
    width: 363,
    href:
      "https://assets.weimgs.com/weimgs/ab/images/wcm/products/202041/0196/maeve-rectangle-ottoman-m.jpg",
    height: 363,
  },
  {
    size: "m",
    meta: "",
    alt: "",
    rel: "althero",
    width: 363,
    href:
      "https://assets.weimgs.com/weimgs/ab/images/wcm/products/202041/0192/maeve-rectangle-ottoman-m.jpg",
    height: 363,
  },
];

const CarouselItem = () => (
  <Carousel
    images={data}
    handleProductPhotos={() => console.log()}
  />
);
test("Displays Carousel", () => {
  const { getByTestId } = render(<CarouselItem />);
  const Elm = getByTestId("carousel-item");
  expect(Elm).toBeInTheDocument();
});
