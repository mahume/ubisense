import React, { FC } from "react";
import { Container, Image } from "./index.styles";

interface ImageSectionProps {
  imageURL: string | undefined;
}

const ImageSection: FC<ImageSectionProps> = ({ imageURL }) => {
  return (
    <Container>
      {imageURL ? <Image src={imageURL} alt="engine" /> : <span>No Image</span>}
    </Container>
  );
};

export default ImageSection;
