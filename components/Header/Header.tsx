import Image from "next/image";
import React from "react";
import { HeaderComponent } from "./styled";
import { WhatsApp } from "../E__export";
import Link from "next/link";

const Header = () => {
  return (
    <HeaderComponent>
      <h1>LA COSTA</h1>
      <nav>
        <Link href="/">Produtos e Serviços</Link>
        <Link href="/">Sobre nós</Link>
        <Link href="/">Asseguradoras</Link>
        <Link href="/">Contato</Link>
        <button>
          <Image src={WhatsApp} alt="Whatsapp" />
          WhatsApp
        </button>
      </nav>
    </HeaderComponent>
  );
};

export default Header;
