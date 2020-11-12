import React from "react";
import { Header } from "../components";
import * as ROUTES from "../constants/routers";
import logo from "../logo.svg";

export function HeaderContainer({ children, ...restProps }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} alt="Netflix" src={logo} />
        <Header.ButtonLink to={ROUTES.HOME}> Sign In </Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}
