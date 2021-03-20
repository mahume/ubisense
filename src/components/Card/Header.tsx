import React, { FC } from "react";
import { StyledHeader } from "./Header.styles";

interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <StyledHeader>
      <h2>{title}</h2>
    </StyledHeader>
  );
};

export default Header;
