import Image from "next/image";
import React, { useContext, useState } from "react";
import { HeaderComponent } from "./styled";
import { WhatsApp } from "../E__export";
import Link from "next/link";
import { Contexts } from "../../contexts/GlobalContext";
import { FaBars } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Header = () => {
  const { mobile, setContactForm } = useContext(Contexts);
  const [active, setActive] = useState(false);

  return (
    <HeaderComponent>
      <Link href="#" className="logo">
        <h1>LA COSTA</h1>
        <p>CORRETORA DE SEGUROS</p>
      </Link>
      <div>
        <ul
          style={active ? { right: "0" } : { right: "-50vw" }}
          className={mobile ? "mobile" : "desktop"}
        >
          {mobile && (
            <AiOutlineCloseCircle
              className="close"
              style={mobile ? { display: "block" } : { display: "none" }}
              onClick={() => setActive(!active)}
            />
          )}

          <li>
            <Link href="#about">Sobre nós</Link>
          </li>
          <li>
            <Link href="#insurers">Asseguradoras</Link>
          </li>
          <li>
            <Link href="/" onClick={() => setContactForm(true)}>
              Contato
            </Link>
          </li>
          <li>
            <Link
              href="https://wa.me/5541991751000?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Lacosta%2C%20tudo%20bem%3F"
              target="_blank"
            >
              <Image src={WhatsApp} alt="Whatsapp" />
              WhatsApp
            </Link>
          </li>
        </ul>
        {mobile && (
          <FaBars
            style={mobile ? { display: "block" } : { display: "none" }}
            className="bars"
            onClick={() => setActive(!active)}
          />
        )}
      </div>
    </HeaderComponent>
  );
};

export default Header;
