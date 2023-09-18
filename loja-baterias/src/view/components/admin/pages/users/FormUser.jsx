import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useUser } from "../../../../customHooks/userCustomHook";
import { Row, Col, Container, FormGroup } from "react-bootstrap";
import Message from "../../../message/Message";
import { useListTypes } from "../../../../customHooks/listCustomHook";

export default function FormUser({ userData, action }) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const {
    handleChange,
    handleSubmit,
    handleUpdate,
    validated,
    message,
    user,
    setUser,
    setFormData,
    isFormChanged,
  } = useUser();
  const { list } = useListTypes("userType");

  useEffect(() => {
    setUser(userData);
    setFormData(userData);
  }, [userData]);

  return (
    <>
      {message && <Message text={message.text} type={message.type} />}
      <Container className="my-2 h-75">
        <Row className="justify-content-center">
          <Col md={6}>
            <h2 className="text-center mt-5">{action}</h2>
            <Form
              className="mt-4"
              noValidate
              validated={validated}
              onSubmit={user ? handleUpdate : handleSubmit}
            >
              <Form.Group controlId="formBasicName">
                <Form.Label>Nome Completo:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Digite seu nome"
                  onChange={handleChange}
                  name="name"
                  value={user?.name || ""}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail" className="mt-3">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Digite seu email"
                  onChange={handleChange}
                  name="email"
                  value={user?.email || ""}
                />
                <Form.Control.Feedback type="invalid">
                  Informe um e-mail válido
                </Form.Control.Feedback>
              </Form.Group>

              {action === "Criar" && (
                <Form.Group controlId="formBasicPassword" className="mt-3">
                  <Form.Label>Senha:</Form.Label>
                  <div className="position-relative d-flex">
                    <Form.Control
                      type={isPasswordVisible ? "text" : "password"}
                      placeholder="Digite sua senha"
                      onChange={handleChange}
                      name="password"
                      value={user?.password || ""}
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setIsPasswordVisible(!isPasswordVisible);
                      }}
                      className="position-absolute middle-input"
                    >
                      <i
                        className={
                          isPasswordVisible
                            ? "bi bi-eye-slash fs-custom"
                            : "bi bi-eye fs-custom"
                        }
                      />
                    </button>
                  </div>

                  <Form.Control.Feedback type="invalid">
                    A senha não está de acordo com os critérios
                  </Form.Control.Feedback>
                </Form.Group>
              )}

              <FormGroup className="mt-3">
                <Form.Label>Tipo de Usuário</Form.Label>
                <Form.Select
                  onChange={handleChange}
                  name="UserType"
                  aria-label="Selecione uma opção"
                  value={user?.UserType?.id || ""}
                >
                  {list}
                </Form.Select>
              </FormGroup>

              <Button
                variant="primary"
                type="submit"
                className="w-100 mt-3"
                disabled={!isFormChanged ?? false}
              >
                {action}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
