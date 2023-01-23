import Image from "next/image";
import React from "react";
import { Facebook, Instagram, Linkedin } from "../E__export";
import { FooterComponent } from "./styled";

const Footer = () => {
  return (
    <FooterComponent>
      <p>La costa corretora todos os direitos reservados ©</p>
      <div>
        <button>
          <Image src={Facebook} alt="Facebook" />
        </button>
        <button>
          <Image src={Instagram} alt="Instagram" />
        </button>
        <button>
          <Image src={Linkedin} alt="Linkedin" />
        </button>
      </div>
    </FooterComponent>
  );
};

export default Footer;
