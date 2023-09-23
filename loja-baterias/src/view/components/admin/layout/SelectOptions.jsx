import React, { useEffect, useState } from "react";
import axios from "axios";

export default function SelectOptions({ reference, setMessage, options }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    reference &&
      axios
        .get(`http://localhost:3001/api/${reference}`, {
          headers: { "Content-Type": "application/json" },
        })
        .then((response) => {
          setList(response.data);
        })
        .catch((error) => {
          setMessage({
            text: error.message,
            type: "danger",
          });
        });
  }, [reference]);

  return (
    <>
      <option key="empty" value="" name="">
        Selecione uma opção
      </option>
      {options
        ? options.map((value) => {
            return (
              <option key={value} value={value} name={value}>
                {value}
              </option>
            );
          })
        : list.map((item) => {
            return (
              <option key={item.id} value={item.id} name={item.id}>
                {item.description}
              </option>
            );
          })}
    </>
  );
}
