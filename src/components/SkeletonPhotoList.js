import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Skeleton from "./Skeleton";
import PhotoItem from "./PhotoItem";

const SkeletonPhotoList = ({ photos }) => {
  const [isFetching, setIsFetching] = useState(false);

  const photoItems = photos.map((photo, i) => (
    <>
      {isFetching ? (
        <PhotoItem key={i} url={photo.urls.small} alt={photo.alt} />
      ) : (
        <Skeleton />
      )}
    </>
  ));

  useEffect(() => {
    setTimeout(() => {
      setIsFetching(true);
    }, 2000);
  }, []);

  return <PhotoListWrap>{photoItems}</PhotoListWrap>;
};

const PhotoListWrap = styled.div`
  margin: 20px auto;
  width: 70%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
`;

export default SkeletonPhotoList;
