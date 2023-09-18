import React from "react";
import NavBarCustom from "../pages/NavBarCustom";
import Footer from "../pages/Footer";
import Message from "../message/Message";
import { useState } from "react";

export default function NavFooter({ children }) {
  const [message, setMessage] = useState();
  return (
    <>
      <NavBarCustom />
      <Message text={message?.text} type={message?.type} />
      {children}
      <Footer />
    </>
  );
}
