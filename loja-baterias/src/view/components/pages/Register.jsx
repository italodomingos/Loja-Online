import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useUser } from "../../customHooks/userCustomHook";

export default function Register() {
  const { handleChange, handleSubmit, validated } = useUser();
  return (
    <Container className="border my-2 h-75">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="text-center mt-5">Registrar</h2>
          <Form
            className="mt-4"
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Nome Completo:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Digite seu email"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail" className="mt-3">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Digite seu email"
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Informe um e-mail válido
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mt-3">
              <Form.Label>Senha:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Digite sua senha"
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                A senha não está de acordo com os critérios
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mt-3">
              <Form.Label>Confimar Senha:</Form.Label>
              <Form.Control type="password" placeholder="Digite sua senha" />
              <Form.Control.Feedback type="invalid">
                As senhas não são as mesmas
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mt-3">
              <i className="bi bi-arrow-bar-right"></i> Registrar
            </Button>
          </Form>
        </Col>
      </Row>
      <Row className="justify-content-md-center text-center mt-3">
        <Col xs lg="3">
          Já possui cadastro? <a href="/login">Faça Login</a>
        </Col>
      </Row>
    </Container>
  );
}
