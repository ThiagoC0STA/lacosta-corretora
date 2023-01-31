import React, { useEffect, useState } from "react";
import { LoadingContainer } from "./styled";

const LoadingAnimation = () => {
  const [showLoading, setShowLoading] = useState(true);
  const [delayAnimation, setDelayAnimation] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowLoading(false);
    }, 1230000);

    setTimeout(() => {
      setDelayAnimation(true);
    }, 2000);
  }, []);

  return showLoading ? (
    <LoadingContainer>
      <h1>LA COSTA</h1>
      <p>CORRETORA DE SEGUROS</p>
      {delayAnimation && <p>25 anos</p>}
    </LoadingContainer>
  ) : (
    <div></div>
  );
};

export default LoadingAnimation;
