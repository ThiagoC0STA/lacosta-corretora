import { InsurersCaroussel, InsurersSection } from "./styled";
import Slider from "react-slick";
import { InsurerItems } from "../../utils/items";
import Image from "next/image";
import { LeftArrow, RightArrow } from "../E__export";
import FadeIn from "../FadeInDivEffect/FadeInDivEffect";

const Insurers = () => {
  const NextArrow: React.FC<{
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
  }> = ({ className = "", style = {}, onClick = () => {} }) => (
    <Image
      src={RightArrow}
      alt=">"
      className={className}
      onClick={onClick}
      height={21}
      width={12}
      style={style}
    />
  );

  const PrevArrow: React.FC<{
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
  }> = ({ className = "", style = {}, onClick = () => {} }) => (
    <Image
      src={LeftArrow}
      alt="<"
      className={className}
      onClick={onClick}
      height={21}
      width={12}
      style={style}
    />
  );

  const settings = {
    speed: 700,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 3,
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <FadeIn>
      <InsurersSection className="container" id="insurers">
        <h3>Asseguradoras parceiras</h3>
        <p>As melhores opções para você</p>

        <InsurersCaroussel>
          <Slider {...settings}>
            {InsurerItems.map(({ id, img, alt }) => (
              <div key={id}>
                <figure>
                  <Image src={img} alt={alt} />
                </figure>
              </div>
            ))}
          </Slider>
        </InsurersCaroussel>
      </InsurersSection>
    </FadeIn>
  );
};

export default Insurers;
