import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Skeleton from "./Skeleton";
import PhotoItem from "./PhotoItem";

const SkeletonPhotoList = ({ photos }) => {
  const [isRender, setIsRender] = useState(false);

  const items = isRender
    ? photos.map((photo, i) => (
        <PhotoItem key={i} url={photo.urls.small} alt={photo.alt} />
      ))
    : photos.map((photo, i) => <Skeleton />);

  useEffect(() => {
    setTimeout(() => {
      setIsRender(true);
    }, 2000);
  }, []);

  return <PhotoListWrap>{items}</PhotoListWrap>;
};

const PhotoListWrap = styled.div`
  margin: 20px auto;
  width: 70%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
`;

export default SkeletonPhotoList;
