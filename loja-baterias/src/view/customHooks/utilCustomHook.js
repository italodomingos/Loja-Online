import { useState } from "react";
import * as yup from "yup";

const useUtil = () => {
  function capitalizeFirstLetter(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
  return { capitalizeFirstLetter };
};

const useObject = () => {
  function isEquivalent(a, b) {
    // Create arrays of property names
    let aProps = Object.getOwnPropertyNames(a);
    let bProps = Object.getOwnPropertyNames(b);
    // If number of properties is different,
    // objects are not equivalent
    if (aProps.length !== bProps.length) {
      return false;
    }

    for (var i = 0; i < aProps.length; i++) {
      var propName = aProps[i];

      // If values of same property are not equal,
      // objects are not equivalent
      if (a[propName] !== b[propName]) {
        return false;
      }
    }

    // If we made it this far, objects
    // are considered equivalent
    return true;
  }

  return { isEquivalent };
};

const useCustom = () => {
  const [schema, setSchema] = useState();

  function createValidationSchema(data) {
    try {
      const obj = {};
      for (const item of data) {
        switch (item.type) {
          case "number":
            obj[item.name] = yup
              .number()
              .required(`${item.description} é obrigatório`);
            break;
          case "password":
            obj[item.name] = yup
              .string()
              .min(8, "O minimo de caracteres é 8")
              .required(`${item.description} é obrigatório`);
            break;
          case "email":
            obj[item.name] = yup
              .string()
              .email("E-mail Inválido")
              .required(`${item.description} é obrigatório`);
            break;
          default:
            obj[item.name] = yup
              .string()
              .required(`${item.description} é obrigatório`);
            break;
        }
      }
      setSchema(yup.object().shape(obj));
    } catch (err) {
      console.log(err);
    }
  }

  function validate({ name, value, setFieldError }) {
    schema
      .validateAt(name, { [name]: value })
      .then(() => {
        setFieldError(name, "");
      })
      .catch((error) => {
        setFieldError(name, error.message);
      });
  }

  return { validate, createValidationSchema, schema };
};

export { useUtil, useObject, useCustom };
