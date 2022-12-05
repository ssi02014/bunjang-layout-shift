import React from "react";
import styled from "styled-components";

const Skeleton = () => {
  return <SkeletonWrapper />;
};

const SkeletonWrapper = styled.div`
  width: 100%;
  aspect-ratio: 16/9;
  background-color: #666;
`;

export default Skeleton;
