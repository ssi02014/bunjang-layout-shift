import React from "react";
import styled from "styled-components";
import PhotoItem from "./PhotoItem";

const PhotoList = ({ photos }) => {
  return (
    <PhotoListWrap>
      {photos.map((photo, i) => (
        <PhotoItem key={i} url={photo.urls.small} alt={photo.alt} />
      ))}
    </PhotoListWrap>
  );
};

const PhotoListWrap = styled.div`
  margin: 20px auto;
  width: 70%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
`;

export default PhotoList;
