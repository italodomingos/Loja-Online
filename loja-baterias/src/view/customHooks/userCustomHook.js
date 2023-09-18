import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

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
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [isFormChanged, setIsFormChanged] = useState(false);

  function handleDelete(id) {
    axios
      .delete(`http://localhost:3001/api/user/${id}`)
      .then((response) => {
        setMessage({
          text: "Usuário removido com sucesso.",
          type: "success",
        });
      })
      .catch((error) => {
        setMessage({
          text: error.message,
          type: "danger",
        });
      });
  }
  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(e.target.name, e.target.value, user);

    setUser((prevUser) => {
      try {
        if (formData[e.target.name] === prevUser[e.target.name]) {
          setIsFormChanged(false);
        } else {
          setIsFormChanged(true);
        }
      } catch (err) {}

      return prevUser;
    });

    // const { name, value } = e.target;
    // setUser((prevUser) => {
    //   const updatedUser = { ...prevUser, [name]: value };

    //   if (formData[name] === updatedUser[name]) {
    //     setIsFormChanged(false);
    //   } else {
    //     setIsFormChanged(true);
    //   }

    //   return updatedUser;
    // });
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!e.currentTarget.checkValidity()) {
      e.stopPropagation();
    }
    setValidated(true);

    axios
      .post("http://localhost:3001/api/user", user, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        setMessage({
          text: "Usuário cadastrado com sucesso.",
          type: "success",
        });
        navigate("/admin/users");
      })
      .catch((error) => {
        setMessage({
          text: error.message,
          type: "danger",
        });
      });
  }
  function handleUpdate(e) {
    e.preventDefault();
    if (!e.currentTarget.checkValidity()) {
      e.stopPropagation();
    }
    setValidated(true);

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

  return {
    handleDelete,
    handleChange,
    handleSubmit,
    handleUpdate,
    validated,
    message,
    user,
    setUser,
    setFormData,
    isFormChanged,
  };
};

export { useLogin, useUser };
