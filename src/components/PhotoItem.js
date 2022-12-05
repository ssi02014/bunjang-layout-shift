import React from "react";
import styled from "styled-components";

const PhotoItem = ({ url, alt }) => {
  return (
    <ImageWrapper>
      <Image src={url} alt={alt} />
    </ImageWrapper>
  );
};

const ImageWrapper = styled.div`
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export default PhotoItem;
