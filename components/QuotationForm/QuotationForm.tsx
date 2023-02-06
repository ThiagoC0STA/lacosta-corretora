import Image from "next/image";
import React, { useContext, useState } from "react";
import { ContextProps, Contexts } from "../../contexts/GlobalContext";
import { Quotationformimg } from "../E__export";
import { FormComponent, FormDiv, LabelsDiv } from "./styled";

interface FormData {
  name: string;
  telephone: string;
  email: string;
  city: string;
  example: string;
}

const QuotationForm: any = () => {
  const context = useContext(Contexts) as ContextProps;
  const { modalForm, setModalForm } = context;

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

  const handleCloseModal = (event: any) => {
    if (event.target.classList.contains("myModal")) {
      setModalForm(false);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <LabelsDiv>
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
            </div>
            <div>
              <button
                style={{ width: "100%" }}
                type="button"
                onClick={() => setCurrentStep(2)}
              >
                Próximo passo
              </button>
            </div>
          </LabelsDiv>
        );
      case 2:
        return (
          <LabelsDiv>
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
            </div>
            <div>
              <button type="button" onClick={() => setCurrentStep(1)}>
                Passo anterior
              </button>
              <button type="button" onClick={() => setCurrentStep(3)}>
                Próximo passo
              </button>
            </div>
          </LabelsDiv>
        );
      case 3:
        return (
          <LabelsDiv>
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
            </div>
            <div>
              <button type="button" onClick={() => setCurrentStep(2)}>
                Passo anterior
              </button>
              <button type="submit" onClick={() => handleSubmit}>
                Enviar cotação
              </button>
            </div>
          </LabelsDiv>
        );
      default:
        return <div>Erro</div>;
    }
  };

  return modalForm ? (
    <FormDiv className="myModal" onClick={handleCloseModal}>
      <FormComponent>
        <form onSubmit={handleSubmit}>
          <div>
            <h3>Cotação Online</h3>
            <p>{currentStep}/3</p>
            <p>
              Faça sua cotação <strong>gratuita!</strong>
            </p>
          </div>
          {renderStep()}
        </form>
        <figure>
          <Image src={Quotationformimg} alt="contato" priority={true} />
        </figure>
      </FormComponent>
    </FormDiv>
  ) : (
    <p></p>
  );
};

export default QuotationForm;
