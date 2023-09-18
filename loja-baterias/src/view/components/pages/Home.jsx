import React, { useState } from "react";
import FindBattery from "../home/FindBattery";
import BatteryOptionsNav from "../home/BatteryOptionsNav";
import CarouselHome from "../home/CarouselHome";
import MultipleItemsCarousel from "../layout/MultipleItemsCarousel";
import { ListGroup } from "react-bootstrap";
import NavFooter from "../layout/NavFooter";

export default function Home() {
  const [db] = useState([
    {
      description:
        "Bateria ACDelco EFB 60Ah - ADF60HD - Para Carro C/ Start-Stop",
      value: "719,90",
      imgSrc:
        "https://cdn.awsli.com.br/300x300/515/515778/produto/128410766/5c0ed07f25.jpg",
    },
    {
      description:
        "Bateria ACDelco EFB 60Ah - ADF60HD - Para Carro C/ Start-Stop",
      value: "719,90",
      imgSrc:
        "https://cdn.awsli.com.br/300x300/515/515778/produto/128410766/5c0ed07f25.jpg",
    },
    {
      description:
        "Bateria ACDelco EFB 60Ah - ADF60HD - Para Carro C/ Start-Stop",
      value: "719,90",
      imgSrc:
        "https://cdn.awsli.com.br/300x300/515/515778/produto/128410766/5c0ed07f25.jpg",
    },
    {
      description:
        "Bateria ACDelco EFB 60Ah - ADF60HD - Para Carro C/ Start-Stop",
      value: "719,90",
      imgSrc:
        "https://cdn.awsli.com.br/300x300/515/515778/produto/128410766/5c0ed07f25.jpg",
    },
    {
      description:
        "Bateria ACDelco EFB 60Ah - ADF60HD - Para Carro C/ Start-Stop",
      value: "719,90",
      imgSrc:
        "https://cdn.awsli.com.br/300x300/515/515778/produto/128410766/5c0ed07f25.jpg",
    },
    {
      description:
        "Bateria ACDelco EFB 60Ah - ADF60HD - Para Carro C/ Start-Stop",
      value: "719,90",
      imgSrc:
        "https://cdn.awsli.com.br/300x300/515/515778/produto/128410766/5c0ed07f25.jpg",
    },
    {
      description:
        "Bateria ACDelco EFB 60Ah - ADF60HD - Para Carro C/ Start-Stop",
      value: "719,90",
      imgSrc:
        "https://cdn.awsli.com.br/300x300/515/515778/produto/128410766/5c0ed07f25.jpg",
    },
    {
      description:
        "Bateria ACDelco EFB 60Ah - ADF60HD - Para Carro C/ Start-Stop",
      value: "719,90",
      imgSrc:
        "https://cdn.awsli.com.br/300x300/515/515778/produto/128410766/5c0ed07f25.jpg",
    },
    {
      description:
        "Bateria ACDelco EFB 60Ah - ADF60HD - Para Carro C/ Start-Stop",
      value: "719,90",
      imgSrc:
        "https://cdn.awsli.com.br/300x300/515/515778/produto/128410766/5c0ed07f25.jpg",
    },
  ]);

  return (
    <NavFooter>
      <section className="">
        <BatteryOptionsNav />
      </section>

      <section className="mt-3">
        <CarouselHome />
      </section>
      <section className="mt-5 d-flex justify-content-center ">
        <ListGroup className="shadow">
          <ListGroup.Item>
            <h4>Baterias de Carro</h4>
          </ListGroup.Item>
          <ListGroup.Item>
            <div className="">
              <MultipleItemsCarousel products={db} />
            </div>
          </ListGroup.Item>
        </ListGroup>
      </section>
      <section className="mt-5 d-flex justify-content-center">
        <ListGroup className="shadow">
          <ListGroup.Item>
            <h4>Baterias de Moto</h4>
          </ListGroup.Item>
          <ListGroup.Item>
            <div className="">
              <MultipleItemsCarousel products={db} />
            </div>
          </ListGroup.Item>
        </ListGroup>
      </section>
      <section className="mt-5 d-flex justify-content-center">
        <ListGroup className="shadow">
          <ListGroup.Item>
            <h4>Baterias de Caminhão</h4>
          </ListGroup.Item>
          <ListGroup.Item>
            <div className="">
              <MultipleItemsCarousel products={db} />
            </div>
          </ListGroup.Item>
        </ListGroup>
      </section>
      <section className="mt-5 d-flex justify-content-center">
        <ListGroup className="shadow">
          <ListGroup.Item>
            <h4>Baterias Estacionárias</h4>
          </ListGroup.Item>
          <ListGroup.Item>
            <div className="">
              <MultipleItemsCarousel products={db} />
            </div>
          </ListGroup.Item>
        </ListGroup>
      </section>
      <section>
        <FindBattery />
      </section>
    </NavFooter>
  );
}
