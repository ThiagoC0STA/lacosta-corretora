import Image from "next/image";
import React, { useContext } from "react";
import { Contexts } from "../../contexts/GlobalContext";
import { MainBanner } from "../E__export";
import { MainComponent } from "./styled";

const Main = () => {
  const { setModalForm } = useContext(Contexts);

  return (
    <MainComponent>
      <Image
        src={MainBanner}
        alt="papel de parede lei da atração"
        quality={100}
        priority={true}
      />
      <div>
        <h1>La costa corretora <strong> seguros e consórcios</strong></h1>
        <h2>
          A La costa oferece uma variedade de opções de seguros para atender às
          suas necessidades. Nossa equipe está pronta para ajudá-lo a encontrar
          a melhor cobertura.
        </h2>
        <button onClick={() => setModalForm(true)}>Cotação Gratuita</button>
      </div>
    </MainComponent>
  );
};

export default Main;
