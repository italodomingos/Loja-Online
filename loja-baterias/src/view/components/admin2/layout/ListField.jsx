import React, { useEffect, useState } from "react";
import axios from "axios";
import { SelectField } from "react-admin";

export default function ListField({ type, source }) {
  const [fields, setFields] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/${type}/`)
      .then((items) => {
        const data = items.data.map((item) => {
          return { id: item.id, name: item.description };
        });
        setFields(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [type]);
  return <SelectField source={source} choices={fields} />;
}
