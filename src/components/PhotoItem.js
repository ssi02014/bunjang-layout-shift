import React from "react";
import styled from "styled-components";

const PhotoItem = ({ url, alt }) => {
  return (
    <ImageWrap>
      <Image src={url} alt={alt} />
    </ImageWrap>
  );
};

const ImageWrap = styled.div``;

const Image = styled.img`
  cursor: pointer;
  width: 100%;
`;

export default PhotoItem;
