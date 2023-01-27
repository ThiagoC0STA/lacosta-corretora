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
          <div className="inputs">
            <div>
              <label htmlFor="nome">Nome:</label>
              <input type="text" id="nome" name="nome" />
            </div>
            <div>
              <label htmlFor="sobrenome">Sobrenome:</label>
              <input type="text" id="sobrenome" name="sobrenome" />
            </div>
            <div>
              <label htmlFor="telefone">Telefone:</label>
              <input type="tel" id="telefone" name="telefone" />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" />
            </div>
            <div>
              <label htmlFor="mensagem">Mensagem:</label>
              <textarea id="mensagem" name="mensagem"></textarea>
            </div>
          </div>
          <button type="submit">Enviar</button>
        </form>

        <figure>
          <Image src={Contactformimg} alt="contato" />
        </figure>
      </ContactComponent>
    </FormDiv>
  ) : (
    <div></div>
  );
};

export default ContactForm;
