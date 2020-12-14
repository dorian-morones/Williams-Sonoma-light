import * as React from "react";
import Logo from '../../images/logo.png';

// styles
import {
  Menu,
  LogoImage
} from './styles/layout'

const Layout = ({children}) => {

  return (
    <div data-testid='layout-item'>
      <Menu><LogoImage src={Logo} alt={Logo} /></Menu>
      <main>{children}</main>
    </div>
  )

}

export default Layout;