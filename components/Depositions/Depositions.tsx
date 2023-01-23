import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { DepositionsItems } from "../../utils/items";
import { BlueChat } from "../E__export";
import { Card, DepoisitionsCaroussel, DepoisitionsSection } from "./styled";

const Depositions = () => {
  const settings = {
    speed: 700,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <DepoisitionsSection className="container">
      <h3>Depoimento de alguns de nossos clientes</h3>
      <p>Ouvindo nossos clientes e oferecendo proteção.</p>

      <DepoisitionsCaroussel>
        <Slider {...settings}>
          {DepositionsItems.map(({ id, img, name, profession, text }) => (
            <Card key={id}>
              <div>
                <Image src={BlueChat} alt="Avaliações" className="bluechat" />
                <figure>
                  <Image src={img} alt={name} />
                </figure>
                <h4>{name}</h4>
                <h5>{profession}</h5>
                <p>{text}</p>
              </div>
            </Card>
          ))}
        </Slider>
      </DepoisitionsCaroussel>
    </DepoisitionsSection>
  );
};

export default Depositions;
