import React from "react";
import Layout from "../components/layout";
import ContactForm from "../components/contact/Contact";
import Seo from "../components/seo";

const ContactPage = () => {
  return (
    <Layout>
      <Seo
        title="Contacto"
        description="Ponte en contacto con nosotros utilizando nuestro formulario de contacto."
      />
      <ContactForm />
    </Layout>
  );
};

export default ContactPage;
