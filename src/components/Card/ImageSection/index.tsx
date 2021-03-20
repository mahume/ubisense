import React, { FC } from "react";
import { Container } from "./index.styles";

interface ImageSectionProps {
  imageURL: string | undefined;
}

const ImageSection: FC<ImageSectionProps> = ({ imageURL }) => {
  return (
    <Container>
      {imageURL ? (
        <img src={imageURL} alt="" style={{ width: 200 }} />
      ) : (
        <span>No Image</span>
      )}
    </Container>
  );
};

export default ImageSection;
