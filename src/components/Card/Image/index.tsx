import React, { FC } from "react";

interface ImageProps {
  image: string;
}

const Image: FC<ImageProps> = ({ image }) => {
  return <div>{image}</div>;
};

export default Image;
