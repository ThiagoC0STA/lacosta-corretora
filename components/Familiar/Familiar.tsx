import Image from "next/image";
import React from "react";
import { FamilyPicture } from "../E__export";
import { FamiliarSection, Texts } from "./styled";

const Familiar = () => {
  return (
    <FamiliarSection className="container">
      <Texts>
        <p>La Costa Corretora</p>
        <div>
          <h3>Uma empresa</h3>
          <h3>familiar</h3>
        </div>
        <p>
          A Corretora de Seguros La costa oferece opções de seguros para
          proteger sua família. Nossa equipe de especialistas está pronta para
          ajudá-lo a encontrar a melhor solução. Oferecemos cotações gratuitas e
          recursos educacionais. Entre em contato conosco hoje e proteja sua
          família
        </p>
        <div>
          <button>Contato</button>
          <button>Cotação</button>
        </div>
      </Texts>

      <figure>
        <Image src={FamilyPicture} alt="familia unida" quality={100} />
      </figure>
    </FamiliarSection>
  );
};

export default Familiar;
