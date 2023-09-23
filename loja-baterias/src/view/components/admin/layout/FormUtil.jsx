import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Row, Col, Container, FormGroup, InputGroup } from "react-bootstrap";
import Message from "../../message/Message";
import { Formik } from "formik";
import SelectOptions from "./SelectOptions";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useCustom, useObject } from "../../../customHooks/utilCustomHook";

export default function FormUtil({ data, action, dataValues }) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [objData, setObjectData] = useState(dataValues);
  const [message, setMessage] = useState();
  const [formData, setFormData] = useState({});
  const [isFormChanged, setIsFormChanged] = useState(false);
  const navigate = useNavigate();
  const { isEquivalent } = useObject();
  const { schema, createValidationSchema, validate } = useCustom(data);

  function handleFormSubmit(e, user, setErrors) {
    setMessage("");
    e.preventDefault();

    schema
      .validate(user, { abortEarly: false }) // AbortEarly permite que valide todos os campos
      .then(() => {
        axios
          .post("http://localhost:3001/api/user", user, {
            headers: { "Content-Type": "application/json" },
          })
          .then((response) => {
            navigate("/admin/user");
            // setMessage({
            //   text: "Usuário cadastrado com sucesso.",
            //   type: "success",
            // });
          })
          .catch((error) => {
            console.log(error);
            setMessage({
              text: error.response.data.message || error.message,
              type: "danger",
            });
          });
      })
      .catch((errors) => {
        setMessage({
          text: "Existem erros a serem corrigidos no cadastro!",
          type: "danger",
        });

        setErrors(
          errors.inner.reduce((acc, error) => {
            acc[error.path] = error.message;
            return acc;
          }, {})
        );
      });
  }
  function handleFormChange(e, handleChange, setFieldError, values) {
    const { name, value } = e.target;

    validate({ name, value, setFieldError });
    handleChange(e);
    try {
      if (isEquivalent(formData, values)) {
        setIsFormChanged(false);
      } else {
        setIsFormChanged(true);
      }
    } catch (err) {
      setIsFormChanged(true);
    }
  }
  function handleUpdate(e, user) {
    e.preventDefault();
    if (!e.currentTarget.checkValidity()) {
      e.stopPropagation();
    }

    axios
      .put(`http://localhost:3001/api/user/${user.id}`, user, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        setMessage({
          text: "Usuário alterado com sucesso.",
          type: "success",
        });
        navigate("/admin/user");
      })
      .catch((error) => {
        setMessage({
          text: error.message,
          type: "danger",
        });
      });
  }

  useEffect(() => {
    let aux = {};
    for (let item of data) {
      aux[item.name] = item.value || "";
    }
    setObjectData(aux);
    setFormData(objData);
    createValidationSchema(data);
  }, []);

  return (
    <>
      {message && <Message text={message.text} type={message.type} />}
      <Container className="my-2 h-75">
        <Row className="justify-content-center">
          <Col md={6}>
            <h2 className="text-center mt-5">{action}</h2>
            <Formik
              validationSchema={schema}
              initialValues={objData || ""}
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
                    values
                      ? (e) => handleUpdate(e, values)
                      : (e) => handleFormSubmit(e, values, setErrors)
                  }
                >
                  {data.map((item) => {
                    if (
                      item.type === "text" ||
                      item.type === "email" ||
                      item.type === "password" ||
                      item.type === "number"
                    ) {
                      return (
                        <Form.Group
                          controlId={"formBasic" + item.name}
                          className="mt-3"
                          key={item.name}
                        >
                          <Form.Label>{item.description}:</Form.Label>
                          <InputGroup className="">
                            <Form.Control
                              type={
                                item.type === "password"
                                  ? isPasswordVisible
                                    ? "text"
                                    : "password"
                                  : item.type
                              }
                              placeholder={"Digite " + item.description}
                              onChange={(e) =>
                                handleFormChange(
                                  e,
                                  handleChange,
                                  setFieldError,
                                  values
                                )
                              }
                              onBlur={handleBlur}
                              name={item.name}
                              value={values[item.name]}
                              isValid={touched[item.name] && !errors[item.name]}
                              isInvalid={
                                touched[item.name] && errors[item.name]
                              }
                            />
                            {item.type === "password" && (
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
                            )}
                            <Form.Control.Feedback type="invalid">
                              {errors[item.name]}
                            </Form.Control.Feedback>
                          </InputGroup>
                        </Form.Group>
                      );
                    } else if (item.type === "select") {
                      return (
                        <FormGroup
                          className="mt-3"
                          controlId={"formBasic" + item.name}
                          key={item.name}
                        >
                          <Form.Label>{item.description}</Form.Label>
                          <Form.Select
                            onChange={(e) =>
                              handleFormChange(e, handleChange, setFieldError)
                            }
                            onBlur={handleBlur}
                            name={item.name}
                            value={values[item.name]}
                            isValid={touched[item.name] && !errors[item.name]}
                            isInvalid={touched[item.name] && errors[item.name]}
                          >
                            <SelectOptions
                              reference={item.reference}
                              setMessage={setMessage}
                              options={item.options}
                            />
                          </Form.Select>
                          <Form.Control.Feedback type="invalid">
                            {errors[item.name]}
                          </Form.Control.Feedback>
                        </FormGroup>
                      );
                    }
                  })}

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
