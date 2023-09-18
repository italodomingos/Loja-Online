import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  NumberInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";

export default function ProductEdit(props) {
  return (
    <Edit title="Editar um Produto" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="description" label="Descrição" />
        <NumberInput
          source="price"
          options={{
            style: "currency",
            currency: "BRL",
            minimumFractionDigits: 2,
          }}
          label="Preço"
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
            { id: "D", name: "D" },
            { id: "E", name: "E" },
          ]}
        />
        <SelectInput
          source="boxSize"
          label="Tamanho da Caixa"
          choices={[
            { id: "Alta", name: "Alta" },
            { id: "Baixa", name: "Baixa" },
          ]}
        />
        <ReferenceInput source="BrandId" reference="brand">
          <SelectInput optionText="description" label="Marca" />
        </ReferenceInput>
        <ReferenceInput source="ProductTypeId" reference="productType">
          <SelectInput optionText="description" label="Tipo de Produto" />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
}
