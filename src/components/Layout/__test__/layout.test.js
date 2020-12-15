import React from "react";
import { render } from "@testing-library/react";
import Layout from "../index";
import Logo from "../../../images/logo.png";

const LayoutItem = () => (
  <Layout logoImg={Logo} />
);
test("Displays Carousel", () => {
  const { getByTestId } = render(<LayoutItem />);
  const Elm = getByTestId("layout-item");
  expect(Elm).toBeInTheDocument();
});
