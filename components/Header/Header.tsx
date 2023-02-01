import Image from "next/image";
import React, { useContext, useState } from "react";
import { HeaderComponent } from "./styled";
import { WhatsApp } from "../E__export";
import Link from "next/link";
import { Contexts } from "../../contexts/GlobalContext";
import { FaBars } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Header = () => {
  const { mobile, setContactForm, setActiveAside, activeAside } =
    useContext(Contexts);

  return (
    <HeaderComponent>
      <Link href="#" className="logo">
        <h1>LA COSTA</h1>
        <p>CORRETORA DE SEGUROS</p>
      </Link>
      {mobile && (
        <FaBars
          style={mobile ? { display: "block" } : { display: "none" }}
          className="bars"
          onClick={() => setActiveAside(!activeAside)}
        />
      )}
      <aside
        style={activeAside ? { right: "0" } : { right: "-65vw" }}
        className={mobile ? "mobile" : "desktop"}
      >
        <nav>
          {mobile && (
            <AiOutlineCloseCircle
              className="close"
              style={mobile ? { display: "block" } : { display: "none" }}
              onClick={() => setActiveAside(!activeAside)}
            />
          )}

          <Link href="#about">Sobre nós</Link>
          <Link href="#insurers">Asseguradoras</Link>
          <Link href="/" onClick={() => setContactForm(true)}>
            Contato
          </Link>
          <Link
            href="https://wa.me/5541991751000?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Lacosta%2C%20tudo%20bem%3F"
            target="_blank"
          >
            <Image src={WhatsApp} alt="Whatsapp" />
            WhatsApp
          </Link>
        </nav>
      </aside>
    </HeaderComponent>
  );
};

export default Header;
