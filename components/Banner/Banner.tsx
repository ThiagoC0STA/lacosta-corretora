import Image from "next/image";
import React from "react";
import { useContext } from "react";
import { Contexts } from "../../contexts/GlobalContext";
import { Banner2Image } from "../E__export";
import { BannerComponent } from "./styled";

const Banner = () => {
  const { setModalForm } = useContext(Contexts);

  return (
    <BannerComponent>
      <div>
        <h3>Clientes satisfeitos é nossa prioridade</h3>
        <p>
          Entendemos que cada cliente tem necessidades únicas, e nos esforçamos
          para atender essas necessidades, ajudando encontrar a melhor solução
          de seguro possível
        </p>
        <button onClick={() => setModalForm(true)}>Cotação</button>
      </div>
      <Image src={Banner2Image} alt="Banner" quality={100} />
    </BannerComponent>
  );
};

export default Banner;
