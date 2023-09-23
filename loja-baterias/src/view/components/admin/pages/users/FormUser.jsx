import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useUser } from "../../../../customHooks/userCustomHook";
import { Row, Col, Container, FormGroup, InputGroup } from "react-bootstrap";
import Message from "../../../message/Message";
import { useListTypes } from "../../../../customHooks/listCustomHook";
import { Formik } from "formik";
import { useCustom } from "../../../../customHooks/utilCustomHook";

export default function FormUser({ userData, action }) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { schema } = useCustom();

  const {
    handleUpdate,
    handleFormChange,
    handleFormSubmit,
    setUser,
    setFormData,
    isFormChanged,
    message,
  } = useUser();
  const { list } = useListTypes("userType");

  useEffect(() => {
    setUser(userData);
    setFormData(userData);
  }, [userData, setFormData, setUser]);

  return (
    <>
      {message && <Message text={message.text} type={message.type} />}
      <Container className="my-2 h-75">
        <Row className="justify-content-center">
          <Col md={6}>
            <h2 className="text-center mt-5">{action}</h2>
            <Formik
              validationSchema={schema}
              initialValues={{
                name: userData?.name || "",
                password: userData?.password || "",
                email: userData?.email || "",
                UserTypeId: userData?.UserTypeId || "",
              }}
              enableReinitialize="true"
            >
              {({
                handleChange,
                handleBlur,
                setFieldError,
                values,
                touched,
                errors,
                setErrors,
              }) => (
                <Form
                  className="mt-4"
                  noValidate
                  onSubmit={
                    action === "Editar"
                      ? handleUpdate
                      : (e) => handleFormSubmit(e, values, setErrors)
                  }
                >
                  <Form.Group controlId="formBasicName">
                    <Form.Label>Nome Completo:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Digite seu nome"
                      onChange={(e) =>
                        handleFormChange(e, handleChange, setFieldError)
                      }
                      onBlur={handleBlur}
                      name="name"
                      value={values.name}
                      isValid={touched.name && !errors.name}
                      isInvalid={touched.name && errors.name}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.name}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail" className="mt-3">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Digite seu email"
                      onChange={(e) =>
                        handleFormChange(e, handleChange, setFieldError)
                      }
                      onBlur={handleBlur}
                      name="email"
                      value={values.email}
                      isInvalid={touched.email && errors.email}
                      isValid={touched.email && !errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>

                  {action === "Criar" && (
                    <Form.Group controlId="formBasicPassword" className="mt-3">
                      <Form.Label>Senha:</Form.Label>
                      <InputGroup className="">
                        <Form.Control
                          className=""
                          type={isPasswordVisible ? "text" : "password"}
                          placeholder="Digite sua senha"
                          onChange={(e) =>
                            handleFormChange(e, handleChange, setFieldError)
                          }
                          onBlur={handleBlur}
                          name="password"
                          value={values.password}
                          isValid={touched.password && !errors.password}
                          isInvalid={touched.password && errors.password}
                        />
                        <button
                          type="button"
                          onClick={() => {
                            setIsPasswordVisible(!isPasswordVisible);
                          }}
                          className=""
                        >
                          <InputGroup.Text>
                            <i
                              className={
                                isPasswordVisible
                                  ? "bi bi-eye-slash"
                                  : "bi bi-eye"
                              }
                            />
                          </InputGroup.Text>
                        </button>

                        <Form.Control.Feedback type="invalid">
                          {errors.password}
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>
                  )}

                  <FormGroup className="mt-3" controlId="formBasicUserType">
                    <Form.Label>Tipo de Usuário</Form.Label>
                    <Form.Select
                      onChange={(e) =>
                        handleFormChange(e, handleChange, setFieldError)
                      }
                      onBlur={handleBlur}
                      name="UserTypeId"
                      value={values.UserTypeId}
                      isValid={touched.UserTypeId && !errors.UserTypeId}
                      isInvalid={touched.UserTypeId && errors.UserTypeId}
                    >
                      {list}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      {errors.UserTypeId}
                    </Form.Control.Feedback>
                  </FormGroup>

                  <Button
                    variant="primary"
                    type="submit"
                    className="w-100 mt-3"
                    disabled={!isFormChanged ?? false}
                  >
                    Salvar
                  </Button>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </Container>
    </>
  );
}
