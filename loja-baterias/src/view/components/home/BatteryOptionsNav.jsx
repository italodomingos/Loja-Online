import React from "react";
import Nav from "react-bootstrap/Nav";
import styles from "./BatteryOptionsNav.module.css";

export default function BatteryOptionsNav() {
  return (
    <div className={styles.textYellow + " bg-red w-100"}>
      <Nav fill variant="tabs">
        <Nav.Item>
          <Nav.Link href="/">Baterias de carro</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Baterias de moto</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Baterias de caminhões</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled">Baterias estacionárias</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}
