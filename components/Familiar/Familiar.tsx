import Image from "next/image";
import { useContext } from "react";
import { ContextProps, Contexts } from "../../contexts/GlobalContext";
import { FamilyPicture } from "../E__export";
import FadeIn from "../FadeInDivEffect/FadeInDivEffect";
import { FamiliarSection, Texts } from "./styled";

const Familiar = () => {
  const context = useContext(Contexts) as ContextProps;
  const { setModalForm, setContactForm, mobile } = context;

  return (
    <FadeIn>
      <FamiliarSection className="container" id="about">
        <Texts>
          <p>La Costa Corretora</p>
          <div>
            <h3>Uma empresa</h3>
            <h3>familiar.</h3>
          </div>
          <p>
            A Corretora de Seguros La costa oferece opções de seguros para
            proteger sua família. Nossa equipe de especialistas está pronta para
            ajudá-lo a encontrar a melhor solução. Entre em contato conosco hoje
            e proteja sua família
          </p>
          <div>
            <button onClick={() => setContactForm(true)}>Contato</button>
            <button onClick={() => setModalForm(true)}>Cotação</button>
          </div>
        </Texts>

        {mobile ? (
          <></>
        ) : (
          <figure>
            <Image src={FamilyPicture} alt="familia unida" />
          </figure>
        )}
      </FamiliarSection>
    </FadeIn>
  );
};

export default Familiar;
