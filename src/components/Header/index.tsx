import React, { FC } from "react";

interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <nav>
      <h1>{title}</h1>
    </nav>
  );
};

export default Header;
