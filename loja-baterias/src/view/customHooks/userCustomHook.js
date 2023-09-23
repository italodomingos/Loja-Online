import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useCustom } from "./utilCustomHook";

const useLogin = ({ setMessage }) => {
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    axios
      .post(
        "http://localhost:3001/user",
        { email: e.target.email.value, password: e.target.password.value },
        { headers: { "Content-Type": "application/json" } }
      )
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        setMessage({ text: error.message, type: "danger" });
      });
  }

  return { handleLogin };
};

const useUser = () => {
  const [message, setMessage] = useState();
  const [user, setUser] = useState();
  const [formData, setFormData] = useState({});
  const [isFormChanged, setIsFormChanged] = useState(false);
  const navigate = useNavigate();
  const { schema, validate } = useCustom();

  function handleDelete(id) {
    axios
      .delete(`http://localhost:3001/api/user/${id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        setMessage({
          text: error.message,
          type: "danger",
        });
      });
  }
  // function handleChange(e) {
  //   setUser({ ...user, [e.target.name]: e.target.value });

  //   setUser((prevUser) => {
  //     try {
  //       if (isEquivalent(formData, prevUser)) {
  //         setIsFormChanged(false);
  //       } else {
  //         setIsFormChanged(true);
  //       }
  //     } catch (err) {
  //       setIsFormChanged(true);
  //     }

  //     return prevUser;
  //   });
  // }
  function handleFormChange(e, handleChange, setFieldError) {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });

    setUser((prevUser) => {
      try {
        if (isEquivalent(formData, prevUser)) {
          setIsFormChanged(false);
        } else {
          setIsFormChanged(true);
        }
      } catch (err) {
        setIsFormChanged(true);
      }

      return prevUser;
    });
    validate({ name, value, setFieldError });
    handleChange(e);
  }
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
  function handleUpdate(e) {
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

  return {
    handleDelete,
    handleFormSubmit,
    handleUpdate,
    message,
    user,
    setUser,
    setFormData,
    isFormChanged,
    isEquivalent,
    handleFormChange,
    setMessage,
  };
};

export { useLogin, useUser };
