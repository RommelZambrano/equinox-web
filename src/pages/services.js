import React from "react";
import Layout from "../components/layout";
import ContactForm from "../components/services/Services";
import Seo from "../components/seo";

const ContactPage = () => {
  return (
    <Layout>
      <Seo
        title="Servicios"
        description="Nuestros servicios son los mejores."
      />
      <ContactForm />
    </Layout>
  );
};

export default ContactPage;
