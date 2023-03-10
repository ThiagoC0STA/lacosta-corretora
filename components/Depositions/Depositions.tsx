import Image from "next/image";
import Slider from "react-slick";
import { DepositionsItems } from "../../utils/items";
import { BlueChat } from "../E__export";
import FadeIn from "../FadeInDivEffect/FadeInDivEffect";
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
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <FadeIn>
      <DepoisitionsSection className="container">
        <h3>Avaliações de clientes</h3>
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
    </FadeIn>
  );
};

export default Depositions;
