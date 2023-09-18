import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useLogin } from "../../customHooks/userCustomHook";

export default function Login({ setMessage }) {
  const { handleLogin } = useLogin({ setMessage });

  return (
    <Container className="border my-2 h-75">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="text-center mt-5">Fazer Login</h2>
          <Form className="mt-4" onSubmit={handleLogin}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Digite seu email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mt-3">
              <Form.Label>Senha</Form.Label>
              <Form.Control type="password" placeholder="Digite sua senha" />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mt-3">
              <i class="bi bi-arrow-bar-right"></i> Entrar
            </Button>
          </Form>
        </Col>
      </Row>
      <Row className="justify-content-md-center text-center mt-3">
        <Col xs lg="3">
          Novo por aqui? <a href="/register">Cadastre-se</a>
        </Col>
        <Col xs lg="2">
          <a href="/">Esqueceu a senha?</a>
        </Col>
      </Row>
    </Container>
  );
}
