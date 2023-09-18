import React from "react";
import Nav from "react-bootstrap/Nav";
import styles from "./LeftNav.module.css";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

export default function LeftNav() {
  return (
    <div className={styles.navSize + " h-100 border-end p-1"}>
      <div className="mt-2 mb-2 p-2">
        <a href="/" className="">
          <Image
            src="/img/logo-bateria.avif"
            className={styles.icon}
            roundedCircle
          />
        </a>

        <Container className="my-3 bg-body-tertiary p-3 d-flex align-items-center">
          <Image
            src="/img/avatars/avatar_default.jpg"
            className={styles.icon}
            roundedCircle
          />

          <div className="ms-3 ">Ítalo Martins Domingos</div>
        </Container>
      </div>

      <Nav
        variant="tabs"
        defaultActiveKey="/home"
        className="flex-column bg-body-tertiary p-2"
      >
        <Nav.Link href="/admin/dashboard" className="text-secondary">
          <i className="bi bi-graph-up-arrow "></i>
          <span className="ms-2">Dashboard</span>
        </Nav.Link>
        <Nav.Link href="/admin/user" className="text-secondary">
          <i className="bi bi-person-square"></i>
          <span className="ms-2">User</span>
        </Nav.Link>
        <Nav.Link href="/admin/product" className="text-secondary">
          <i className="bi bi-bag-fill"></i>
          <span className="ms-2">Product</span>
        </Nav.Link>
      </Nav>
    </div>
  );
}
