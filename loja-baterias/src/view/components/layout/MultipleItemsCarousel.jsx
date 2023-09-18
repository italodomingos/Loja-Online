import React from "react";
import ProductCard from "./ProductCard";
import Carousel from "react-bootstrap/Carousel";

export default function MultipleItemsCarousel({ products }) {
  const groupedProducts = [];
  for (let i = 0; i < products.length; i += 4) {
    groupedProducts.push(products.slice(i, i + 4));
  }

  return (
    <Carousel variant="dark">
      {groupedProducts.map((products, groupIndex) => (
        <Carousel.Item
          key={groupIndex}
          interval="99999999999"
          className="py-5 px-9"
        >
          <div className="d-flex justify-content-center">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                description={product.description}
                value={product.value}
                imgSrc={product.imgSrc}
              />
            ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
