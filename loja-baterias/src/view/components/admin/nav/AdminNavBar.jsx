import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

export default function AdminNavBar() {
  return (
    <Navbar expand="lg" className={""}>
      <Container>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Pesquisar"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-primary">Pesquisar</Button>
        </Form>

        <Container className="d-flex justify-content-end">
          <div className="d-flex align-items-center">
            <div className="p-3 h-100 ">
              <NavDropdown
                title={
                  <Image
                    src="/img/avatars/avatar_default.jpg"
                    className="icon"
                    roundedCircle
                  />
                }
                id="basic-nav-dropdown"
                className=""
              >
                <NavDropdown.Item className="text-secondary-emphasis" disabled>
                  Ítalo Martins Domingos
                </NavDropdown.Item>
                <NavDropdown.Item className="text-secondary fs-08" disabled>
                  italomartins55@gmail.com
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/perfil">
                  <i className="bi bi-people-fill"></i>
                  <span className="ms-2">Perfil</span>
                </NavDropdown.Item>
                <NavDropdown.Item href="/login">
                  <i className="bi bi-gear-fill"></i>
                  <span className="ms-2">Configurações</span>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/logout">
                  <i className="bi bi-arrow-bar-left"></i> Sair
                </NavDropdown.Item>
              </NavDropdown>
            </div>
          </div>
        </Container>
      </Container>
    </Navbar>
  );
}
