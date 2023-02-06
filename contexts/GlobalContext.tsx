import React, { createContext, useEffect, useState } from "react";

export type ContextProps = {
  mobile: boolean;
  modalForm: boolean;
  setModalForm: React.Dispatch<React.SetStateAction<boolean>>;
  width: number;
  contactForm: boolean;
  setContactForm: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveAside: React.Dispatch<React.SetStateAction<boolean>>;
  activeAside: boolean;
}

export const Contexts = createContext<ContextProps | null>(null);

interface Props {
  children: React.ReactNode;
}

const GlobalContext: React.FC<Props> = ({ children }) => {
  const [width, setWidth] = useState(() => {
    return typeof window !== "undefined" ? window.innerWidth : 0;
  });
  const [mobile, setMobile] = useState(false);
  const [modalForm, setModalForm] = useState(false);
  const [contactForm, setContactForm] = useState(false);
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

export default GlobalContext;
