import Image from "next/image";
import React from "react";
import { MainBanner } from "../E__export";
import { MainComponent } from "./styled";

const Main = () => {
  return (
    <MainComponent>
      <Image
        src={MainBanner}
        alt="papel de parede lei da atração"
        quality={100}
        priority={true}
      />
      <div>
        <h1>Bem-vindo à La costa Corretora de Seguros</h1>
        <h2>
          A La costa oferece uma variedade de opções de seguros para atender às
          suas necessidades. Nossa equipe está pronta para ajudá-lo a encontrar
          a melhor cobertura. Entre em contato conosco para saber mais ou
          solicite uma cotação.
        </h2>
        <button>Cotação gratuita</button>
      </div>
    </MainComponent>
  );
};

export default Main;
