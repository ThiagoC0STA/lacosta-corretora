import React from "react";
import Slider from "react-slick";
import { Card, ProductsCarousselComponent } from "./styled";
import { ProductsItems } from "../../utils/items";
import Image from "next/image";

const ProductsCaroussel = () => {
  const settings = {
    speed: 700,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <ProductsCarousselComponent id="products">
      <Slider {...settings}>
        {ProductsItems.map(({ id, name, description, img, alt }) => (
          <div key={id}>
            <Card>
              <div>
                <p>{name}<strong>.</strong></p>
                <p>{description}</p>
              </div>
            </Card>
          </div>
        ))}
      </Slider>
    </ProductsCarousselComponent>
  );
};

export default ProductsCaroussel;
