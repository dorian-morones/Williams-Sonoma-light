import React from "react";
import { render } from "@testing-library/react";

import Product from "../index";

const data = {
  id: "redmond-leather-sofa-h6871",
  name: "Redmond Leather Sofa",
  priceRange: {
    selling: {
      high: 3699,
      low: 2999,
    },
  },
  hero: {
    size: "m",
    meta: "",
    alt: "",
    rel: "hero",
    width: 363,
    href:
      "https://assets.weimgs.com/weimgs/ab/images/wcm/products/202045/0001/redmond-leather-sofa-3-m.jpg",
    height: 363,
  },
  images: [
    {
      size: "m",
      meta: "",
      alt: "",
      rel: "althero",
      width: 363,
      href:
        "https://assets.weimgs.com/weimgs/ab/images/wcm/products/202045/0001/redmond-leather-sofa-5-m.jpg",
      height: 363,
    },
  ],
};

const ProductItem = () => (
  <Product
    id={data.id}
    name={data.name}
    image={data.hero}
    price={data.priceRange}
    handleProductPhotos={() => console.log()}
  />
);
test("Displays Product Item", () => {
  const { getByTestId } = render(<ProductItem />);
  const Elm = getByTestId("product-item");
  expect(Elm).toBeInTheDocument();
  expect(Elm).toHaveTextContent("Redmond Leather Sofa");
});
