import Image from "next/image";
import React, { useContext } from "react";
import { HeaderComponent } from "./styled";
import { WhatsApp } from "../E__export";
import Link from "next/link";
import { Contexts } from "../../contexts/GlobalContext";

const Header = () => {
  const { mobile, setContactForm} = useContext(Contexts);

  return (
    <HeaderComponent>
      <Link href="#">
        <h1>LA COSTA</h1>
        <p>CORRETORA DE SEGUROS</p>
      </Link>
      <nav>
        <Link href="#about">Sobre nós</Link>
        <Link href="#insurers">Asseguradoras</Link>
        <a onClick={() => setContactForm(true)}>Contato</a>
        <button>
          <Image src={WhatsApp} alt="Whatsapp" />
          WhatsApp
        </button>
      </nav>
    </HeaderComponent>
  );
};

export default Header;
