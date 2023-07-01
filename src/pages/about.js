import React from "react";
import Layout from "../components/layout";
import AboutUs from "../components/about us/About";
import Seo from "../components/seo";

const AboutPage = () => {
    return (
        <Layout>
        <Seo
            title="Acerca de Nosotros"
            description="Conoce más sobre nosotros."
        />
        <AboutUs />
        </Layout>
    );
    }

export default AboutPage;