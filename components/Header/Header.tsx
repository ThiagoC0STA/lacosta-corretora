import Image from "next/image";
import React from "react";
import { HeaderComponent } from "./styled";
import { WhatsApp } from "../E__export";

const Header = () => {
  return (
    <HeaderComponent>
      <h1>La Costa</h1>
      <nav>
        <a href="">Produtos e Serviços</a>
        <a href="">Sobre nós</a>
        <a href="">Asseguradoras</a>
        <a href="">Contato</a>
        <button>
          <Image src={WhatsApp} alt="Whatsapp" />
          WhatsApp
        </button>
      </nav>
    </HeaderComponent>
  );
};

export default Header;
