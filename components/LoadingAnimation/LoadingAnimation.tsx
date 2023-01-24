import React, { useEffect, useState } from "react";
import { LoadingContainer } from "./styled";

const LoadingAnimation = () => {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowLoading(false);
    }, 4500);
  }, []);

  return showLoading ? (
    <LoadingContainer>
      <h1>LA COSTA</h1>
      <p>Corretora</p>
    </LoadingContainer>
  ) : (
    <div></div>
  );
};

export default LoadingAnimation;
