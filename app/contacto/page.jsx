"use client";

import { useRef, useState } from "react";

import Section from "@/components/Sections";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Loading from "@/components/Loading";

import contactStyles from "./page.module.css";

const Contacto = () => {
  const inputRef = useRef(null);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState("");
  const [loading, setLoading] = useState(false);

  // simula una peticion a API-REST
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      console.log("Form data:", { name, email, message });
      setSubmitted(true);
      setLoading(false);
    }, 2000);
    setName("");
    setEmail("");
    setMessage("");
  };

  const handleValidateEmail = (event) => {
    const email = event.target.value;
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.(com|es|org|net|edu|gov|mil)(\.[a-zA-Z]{2,3})?$/;


    if (email === "") {
      setError("El campo de correo electrónico no puede estar vacío.");
      return;
    }

    if (!regex.test(email)) {
      setError("El formato de correo electrónico no es válido.");
      return;
    }

    setError(""); // Si el correo electrónico es válido, se limpia el error
  };

  return (
    <>
      <Header />
      <Section>
        <div className={contactStyles.formContent}>
          <h2>Contacto</h2>
          <form
            action=""
            onSubmit={handleSubmit}
            className={contactStyles.form}
          >
            <label for="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label for="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                handleValidateEmail(e);
              }}
              name="email"
              ref={inputRef}
              required
            />
            {error && <p style={{ color: "red", fontSize: "12px" }}>{error}</p>}
            <label for="mensaje">Mensaje:</label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            {submitted && (
              <p
                style={{
                  color: "#4CAF50",
                  fontSize: "12px",
                  fontWeight: " 600",
                  marginBottom: "8px",
                }}
              >
                Gracias por enviar sus datos, en breve sera contactado.
              </p>
            )}
            <button type="submit" disabled={loading}>
              {loading ? <Loading /> : "Enviar"}
            </button>
          </form>
        </div>
      </Section>
      <Footer />
    </>
  );
};

export default Contacto;
