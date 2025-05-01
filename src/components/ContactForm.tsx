import { useState } from "react";
import { CreateContact } from "../services/dto";
import { ApiCalls } from "../services/services";
import "./ContactForm.css";

const initialFormState: CreateContact = {
  name: "",
  email: "",
  message: "",
};

export const ContactForm = () => {
  const [formData, setFormData] = useState<CreateContact>(initialFormState);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const success = await ApiCalls.postContact(formData);
    setLoading(false);
    if (success) {
      setSubmitted(true);
      setFormData(initialFormState);
    } else {
      alert("Erro ao enviar mensagem.");
      setLoading(false);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>Formulário de contato</h2>

      <label htmlFor="name">Nome</label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Como deseja ser chamado"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email para resposta"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label htmlFor="message">Mensagem</label>
      <textarea
        name="message"
        id="message"
        placeholder="Escreva sua mensagem..."
        rows={5}
        value={formData.message}
        onChange={handleChange}
        required
      />

      <button type="submit" disabled={loading}>
        {loading ? "Enviando..." : "Enviar Mensagem"}
      </button>

      {submitted && (
        <p className="success-msg">Mensagem enviada com sucesso!</p>
      )}
    </form>
  );
};
