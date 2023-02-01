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
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 650,
        settings: {
          dots: false,
          slidesToShow: 2,
          slidesToScroll: 1,
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
                <p>
                  {name}
                  <strong>.</strong>
                </p>
                <p>{description}</p>
              </div>
              <figure>
                <Image src={img} alt={alt} />
              </figure>
            </Card>
          </div>
        ))}
      </Slider>
    </ProductsCarousselComponent>
  );
};

export default ProductsCaroussel;
