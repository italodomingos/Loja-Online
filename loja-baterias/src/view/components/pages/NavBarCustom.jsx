import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function NavBarCustom() {
  return (
    <Navbar expand="lg" className="w-100 bg-primary text-light">
      <Container>
        <Container className="d-flex">
          <Navbar.Brand href="/" className="text-light">
            Shop Battery
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          {/* <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse> */}
        </Container>

        <Container className="d-flex justify-content-end">
          <div className="d-flex align-items-center">
            <div className="border-start border-end p-3 h-100 ">
              <NavDropdown
                title={
                  <span className="">
                    <i className="bi bi-person-circle fs-2 "></i>
                  </span>
                }
                id="basic-nav-dropdown"
                className="clickable "
              >
                <NavDropdown.Item href="/register">
                  <i className="bi bi-person-fill-gear"></i> Cadastrar
                </NavDropdown.Item>
                <NavDropdown.Item href="/login">
                  <i className="bi bi-arrow-bar-right"></i> Entrar
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  <i className="bi bi-basket-fill"></i> Minhas compras
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/logout">
                  <i className="bi bi-arrow-bar-left"></i> Sair
                </NavDropdown.Item>
              </NavDropdown>
              <p className="fs-08">Minha Conta</p>
            </div>

            <div className=" border-end p-3 h-100 ">
              <a className="clickable d-flex" href="/cart">
                <i className="bi bi-cart fs-2"></i>
              </a>
              <p className="fs-08">Carrinho</p>
            </div>
          </div>
        </Container>
      </Container>
    </Navbar>
  );
}
