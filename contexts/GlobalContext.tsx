import React, { createContext, useEffect, useState } from "react";

export const Contexts = createContext<any | null>(null);

export const GlobalContext = ({ children }: any) => {
  const [width, setWidth] = useState<Number>(() => {
    return typeof window !== "undefined" ? window.innerWidth : 0;
  });
  const [mobile, setMobile] = useState<any>(false);
  const [modalForm, setModalForm] = useState<boolean>(false);
  const [contactForm, setContactForm] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    if (width <= 1000) {
      setMobile(true);
    } else {
      setMobile(false);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [mobile, width]);

  return (
    <Contexts.Provider
      value={{
        mobile,
        modalForm,
        setModalForm,
        width,
        contactForm,
        setContactForm,
      }}
    >
      {children}
    </Contexts.Provider>
  );
};
