import React from "react";
import { InsurersCaroussel, InsurersSection } from "./styled";
import Slider from "react-slick";
import { InsurerItems } from "../../utils/items";
import Image from "next/image";
import { LeftArrow, RightArrow } from "../E__export";

const Insurers = () => {
  function SampleNextArrow(props: {
    className: any;
    style: any;
    onClick: any;
  }) {
    const { className, style, onClick } = props;
    return (
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
  }

  function SamplePrevArrow(props: {
    className: any;
    style: any;
    onClick: any;
  }) {
    const { className, style, onClick } = props;
    return (
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
  }

  const settings = {
    speed: 700,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: (
      <SampleNextArrow
        className={undefined}
        style={undefined}
        onClick={undefined}
      />
    ),
    prevArrow: (
      <SamplePrevArrow
        className={undefined}
        style={undefined}
        onClick={undefined}
      />
    ),
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
    <InsurersSection className="container">
      <h3>Asseguradoras parceiras</h3>
      <p>As melhores opções para você</p>

      <InsurersCaroussel>
        <Slider {...settings}>
          {InsurerItems.map(({ id, img, alt }) => (
            <div key={id}>
              <figure>
                <Image src={img} alt={alt} quality={100} />
              </figure>
            </div>
          ))}
        </Slider>
      </InsurersCaroussel>
    </InsurersSection>
  );
};

export default Insurers;
