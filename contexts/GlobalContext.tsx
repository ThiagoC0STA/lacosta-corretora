import React, { createContext, useEffect, useState } from "react";

export const Contexts = createContext<any | null>(null);

export const GlobalContext = ({ children }: any) => {
  const [width, setWidth] = useState<Number>(() => {
    return typeof window !== "undefined" ? window.innerWidth : 0;
  });
  const [mobile, setMobile] = useState<any>(false);
  const [modalForm, setModalForm] = useState<boolean>(false);
  const [contactForm, setContactForm] = useState<boolean>(false);
  const [activeAside, setActiveAside] = useState(false);

  useEffect(() => {
    if (modalForm || contactForm === true) {
      setActiveAside(false);
    }
  }, [contactForm, modalForm]);

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
        setActiveAside,
        activeAside,
      }}
    >
      {children}
    </Contexts.Provider>
  );
};
