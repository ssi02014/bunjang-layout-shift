import React from "react";
import styled from "styled-components";

const PhotoItem = ({ url, alt }) => {
  return (
    <ImageWrap>
      <Image src={url} alt={alt} />
    </ImageWrap>
  );
};

const ImageWrap = styled.div`
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export default PhotoItem;
