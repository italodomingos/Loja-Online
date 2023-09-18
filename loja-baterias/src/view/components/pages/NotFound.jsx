import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";

export default function NotFound() {
  return (
    <div>
      <Image src="/img/logo-bateria.avif" className="icon" />
      <Container className="p-5">
        <Row>
          <Col>
            <h3 className="text-center">Página não encontrada</h3>
          </Col>
        </Row>

        <Row>
          <Col>
            <p className="text-center">
              Desculpe, não conseguimos encontrar a pagina que você está
              procurando. Talves foi algum erro de digitação da URL? Verifique
              se está escrito corretamente.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-md-center">
          <Col md="auto">
            <Image src="/img/notfound/illustration_404.svg" />
          </Col>
        </Row>

        <Row className="justify-content-md-center mt-5">
          <Col md="auto">
            <Button variant="primary" className="p-3" href="/">
              Página Inicial
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
