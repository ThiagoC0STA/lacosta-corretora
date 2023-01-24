import React, { useContext, useState } from "react";
import { Contexts } from "../../contexts/GlobalContext";
import { FormDiv } from "./styled";

interface FormData {
  name: string;
  telephone: string;
  email: string;
  city: string;
  example: string;
}

const Form: any = () => {
  const { modalForm, setModalForm } = useContext(Contexts);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    telephone: "",
    email: "",
    city: "",
    example: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div>
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="telephone">Telefone:</label>
            <input
              type="text"
              id="telephone"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="city">Cidade:</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
            <button type="button" onClick={() => setCurrentStep(2)}>
              Próximo passo
            </button>
          </div>
        );
      case 2:
        return (
          <div>
            <label htmlFor="example">Exemplo:</label>
            <select
              id="example"
              name="example"
              value={formData.example}
              onChange={() => handleChange}
            >
              <option value="test1">Teste 1</option>
              <option value="test2">Teste 2</option>
            </select>
            <button type="button" onClick={() => setCurrentStep(1)}>
              Passo anterior
            </button>
            <button type="button" onClick={() => setCurrentStep(3)}>
              Próximo passo
            </button>
          </div>
        );
      case 3:
        return (
          <div>
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="telephone">Telefone:</label>
            <input
              type="text"
              id="telephone"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <button type="button" onClick={() => setCurrentStep(2)}>
              Passo anterior
            </button>
            <button type="submit" onClick={() => handleSubmit}>
              Enviar
            </button>
          </div>
        );
      default:
        return <div>Erro</div>;
    }
  };

  return modalForm ? (
    <FormDiv
      className="modal"
      onClick={(event) => {
        if (event.currentTarget.className.includes("modal")) {
          setModalForm(false);
        }
      }}
    >
      <form onSubmit={handleSubmit}>{renderStep()}</form>
    </FormDiv>
  ) : (
    <p></p>
  );
};

export default Form;
