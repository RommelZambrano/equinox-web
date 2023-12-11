import React from "react";
import Layout from "../components/layout";
import Services from "../components/services/Services";
import Clients from "../components/services/Clients";
import Seo from "../components/seo";

const ContactPage = () => {
  return (
    <Layout>
      <Seo
        title="Servicios"
        description="Nuestros servicios son los mejores."
      />
      <Services />
    </Layout>
  );
};

export default ContactPage;
