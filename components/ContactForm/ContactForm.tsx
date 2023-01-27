import React from "react";
import { useContext } from "react";
import { FormDiv } from "../QuotationForm/styled";
import { ContactComponent } from "./styled";
import { Contexts } from "../../contexts/GlobalContext";
import Image from "next/image";
import { Contactformimg } from "../E__export";

const ContactForm = () => {
  const { setContactForm, contactForm } = useContext(Contexts);

  const handleCloseModal = (event: any) => {
    if (event.target.classList.contains("myModal")) {
      setContactForm(false);
    }
  };

  return contactForm ? (
    <FormDiv className="myModal" onClick={handleCloseModal}>
      <ContactComponent>
        <form>
          <h1>Entre em contato</h1>
          <p>Responderemos assim que possível</p>
          <div>
            <label htmlFor="nome">Nome:</label>
            <input type="text" id="nome" name="nome" />
            <label htmlFor="sobrenome">Sobrenome:</label>
            <input type="text" id="sobrenome" name="sobrenome" />
            <label htmlFor="telefone">Telefone:</label>
            <input type="tel" id="telefone" name="telefone" />
            <label htmlFor="mensagem">Mensagem:</label>
            <textarea id="mensagem" name="mensagem"></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>

        <figure>
          <Image src={Contactformimg} alt="contato" quality={100} />
        </figure>
      </ContactComponent>
    </FormDiv>
  ) : (
    <div></div>
  );
};

export default ContactForm;
