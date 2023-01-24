import Image from "next/image";
import React, { useContext } from "react";
import { HeaderComponent } from "./styled";
import { WhatsApp } from "../E__export";
import Link from "next/link";
import { Contexts } from "../../contexts/GlobalContext";

const Header = () => {
  const { mobile } = useContext(Contexts);

  return (
    <HeaderComponent>
      <h1>LA COSTA</h1>
      {/* {mobile ? <h1>TESTE</h1> : <h2>teste</h2>} */}
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
