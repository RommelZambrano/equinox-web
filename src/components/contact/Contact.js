import React from "react";

const ContactForm = () => {
  return (
    <div className="contactFormContainer">
      <h2>Contacto</h2>
      <form className="contactForm">
        <div className="inputGroup">
          <label htmlFor="name">Nombre</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div className="inputGroup">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="inputGroup">
          <label htmlFor="message">Mensaje</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>

        <button type="submit" className="submitBtn">Enviar</button>
      </form>
    </div>
  );
};

export default ContactForm;
