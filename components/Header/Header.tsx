import Image from "next/image";
import React, { useContext } from "react";
import { HeaderComponent } from "./styled";
import { WhatsApp } from "../E__export";
import Link from "next/link";
import { Contexts } from "../../contexts/GlobalContext";

const Header = () => {
  const { mobile, setContactForm } = useContext(Contexts);

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
        <Link
          href="https://wa.me/5541991751000?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Lacosta%2C%20tudo%20bem%3F"
          target="_blank"
        >
          <Image src={WhatsApp} alt="Whatsapp" />
          WhatsApp
        </Link>
      </nav>
    </HeaderComponent>
  );
};

export default Header;
