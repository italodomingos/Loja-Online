import React from "react";
import Carousel from "react-bootstrap/Carousel";
import bateriaMoura from "../../../static/img/bateria-moura.jpg";
import bateriaPioneiro from "../../../static/img/bateria-pioneiro.jpg";
import bateriaMaxion from "../../../static/img/bateria-maxion.jpg";
import styles from "./CarouselHome.module.css";

export default function CarouselHome() {
  return (
    <Carousel>
      <Carousel.Item interval={5000}>
        <img src={bateriaMoura} alt="moura" className={styles.img} />
        <Carousel.Caption>
          <h3>Baterias Moura</h3>
          <p>Energia para mover o futuro</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img src={bateriaPioneiro} alt="pioneiro" className={styles.img} />
        <Carousel.Caption>
          <h3>Baterias Pioneiro</h3>
          <p>Use essa energia</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img src={bateriaMaxion} alt="maxion" className={styles.img} />
        {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}
