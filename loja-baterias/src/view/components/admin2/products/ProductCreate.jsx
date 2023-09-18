import React from "react";
import {
  Create,
  NumberInput,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

export default function ProductCreate(props) {
  return (
    <Create title="Criar um Produto" {...props}>
      <SimpleForm>
        <TextInput source="description" label="Descrição" />
        <NumberInput
          source="price"
          options={{
            style: "currency",
            currency: "BRL",
            minimumFractionDigits: 2,
          }}
        />
        <NumberInput source="ampers" label="Amperagem" />
        <SelectInput
          source="warranty"
          label="Tempo de Garantia"
          choices={[
            { id: "180", name: "6 Meses" },
            { id: "360", name: "1 Ano" },
            { id: "540", name: "1 Ano e 6 Meses" },
            { id: "720", name: "2 Anos" },
            { id: "1080", name: "3 Anos" },
          ]}
        />
        <SelectInput
          source="terminalType"
          label="Tipo de Terminal"
          choices={[
            { id: "D", name: "Direita" },
            { id: "E", name: "Esquerda" },
          ]}
          defaultValue={"D"}
        />
        <SelectInput
          source="boxSize"
          label="Tamanho da Caixa"
          choices={[
            { id: "Alta", name: "Alta" },
            { id: "Baixa", name: "Baixa" },
          ]}
          defaultValue={"Alta"}
        />
        <ReferenceInput source="BrandId" reference="brand">
          <SelectInput optionText="description" label="Marca" />
        </ReferenceInput>
        <ReferenceInput source="ProductTypeId" reference="productType">
          <SelectInput optionText="description" label="Tipo de Produto" />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
}
