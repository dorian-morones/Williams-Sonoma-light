import * as React from "react";
// import Logo from "src/images/logo.png";
import { Helmet } from "react-helmet";

// styles
import { Menu, LogoImage } from "./styles/layout";

const Layout = ({ children, logoImg }) => {
  return (
    <div data-testid="layout-item">
      <Helmet>
        {/* General tags */}
        <title>williams sonoma light</title>

        {/* General tags */}
        <title>williams sonoma light</title>
        <meta name="description" content="Small product page" />
        {/* OpenGraph tags */}
        <meta property="og:title" content="Williams sonoma light" />
        <meta property="og:description" content="Small product page" />
        <meta name="image" content={logoImg} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Williams sonoma light" />
        <meta name="twitter:description" content="Small product page" />
        <meta name="twitter:image" content={logoImg} />
      </Helmet>
      <Menu>
        <LogoImage src={logoImg} alt={logoImg} />
      </Menu>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
