import * as React from "react";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import "../styles/404.css";

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="404: No Encontrado" />
      <div className="notFoundContainer">
        <StaticImage
          src="../images/undraw_Not_found_re_bh2e.png"
          alt="Ilustración 404"
          className="notFoundIllustration"
        />
        <h1 className="notFoundTitle">404: No Encontrado</h1>
        <p className="notFoundText">
          Acabas de intentar acceder a una ruta que no existe... qué tristeza.
        </p>
        <Link to="/" className="backToHomeBtn">
          Regresar al inicio
        </Link>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
