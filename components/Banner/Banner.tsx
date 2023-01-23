import Image from "next/image";
import React from "react";
import { Banner2Image } from "../E__export";
import { BannerComponent } from "./styled";

const Banner = () => {
  return (
    <BannerComponent>
      <div>
        <h3>Clientes satisfeitos, é nossa prioridade</h3>
        <p>
          Entendemos que cada cliente tem necessidades únicas, e nos esforçamos
          para atender essas necessidades, ajudando encontrar a melhor solução
          de seguro possível
        </p>
        <button>Cotação</button>
      </div>
      <Image src={Banner2Image} alt="Banner" />
    </BannerComponent>
  );
};

export default Banner;
