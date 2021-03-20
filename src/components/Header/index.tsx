import React, { FC } from "react";
import { StyledHeader, StyledH1 } from "./styles";

interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <StyledHeader>
      <StyledH1>{title}</StyledH1>
    </StyledHeader>
  );
};

export default Header;
