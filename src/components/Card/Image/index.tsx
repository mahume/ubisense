import React, { FC } from "react";

interface ImageProps {
  imageURL: string | undefined;
}

const Image: FC<ImageProps> = ({ imageURL }) => {
  return (
    <div>
      {imageURL ? (
        <img src={imageURL} alt="" style={{ width: 200 }} />
      ) : (
        <span>No Image</span>
      )}
    </div>
  );
};

export default Image;
