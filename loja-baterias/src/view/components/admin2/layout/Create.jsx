import React from "react";
import {
  Create,
  PasswordInput,
  ReferenceInput,
  SimpleForm,
  TextInput,
  SelectInput,
} from "react-admin";

export default function Create(props) {
  return (
    <Create title={"Criar um " + props.title} {...props}>
      <SimpleForm>
        {props.formFields.map((field) => {
          switch (field.type) {
            case "text":
              return <TextInput source={field.source} label={field.label} />;
            case "password":
              return <PasswordInput source="password" label="Senha" />;
            case "list":
              return (
                <ReferenceInput
                  source={field.source}
                  reference={field.reference}
                >
                  <SelectInput optionText={field.name} label={field.label} />
                </ReferenceInput>
              );
          }
        })}
      </SimpleForm>
    </Create>
  );
}
