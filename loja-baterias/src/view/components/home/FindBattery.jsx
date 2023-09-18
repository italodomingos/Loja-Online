import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default function FindBattery() {
  return (
    <div className="text-center mt-3 p-3 border mx-3 bg-primary text-light">
      <h2>Não sabe a amperagem da bateria?</h2>
      <p>Busque o modelo do seu carro abaixo para descobrir</p>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Informe o modelo do carro"
          aria-label="Informe o modelo do carro"
          aria-describedby="basic-addon2"
        />
        <Button variant="secondary" id="button-addon2">
          Buscar
        </Button>
      </InputGroup>
    </div>
  );
}
