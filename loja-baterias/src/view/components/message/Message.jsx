import React from "react";
import Alert from "react-bootstrap/Alert";
import { useEffect, useState } from "react";

export default function Message({ text, type }) {
  const [isMessageVisible, setIsMessageVisible] = useState(false);

  useEffect(() => {
    if (!text) {
      setIsMessageVisible(false);
      return;
    }

    setIsMessageVisible(true);
    const timer = setTimeout(() => {
      setIsMessageVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [text]);

  return (
    <>
      {isMessageVisible && (
        <Alert key={type} variant={type}>
          {text}
        </Alert>
      )}
    </>
  );
}
