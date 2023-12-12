import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// Componente de estilo para el contenedor de los clientes
const ClientsSection = styled.section`
  padding: 20px 0px 100px;
  background-color: #ffffff; // O el color que prefiera para el fondo
`

const ClientsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center; // Centra los elementos en el contenedor
  align-items: center;
  max-width: 1200px;
  margin: 0 auto; // Centra el contenedor en la página
`

const ClientsHeading = styled.h2`
  width: 100%; // Esto asegura que el encabezado ocupe la línea entera
  font-size: clamp(1.2rem, 5vw, 3rem);
  text-align: center; // Alineación del texto al centro
  margin-bottom: 3rem; // Espacio entre el encabezado y los logos
`

const ClientLogo = styled(Img)`
  margin: 20px; // Espaciado alrededor de cada logo
  width: 150px; // O el tamaño que prefiera para los logos
  height: auto;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1); // Efecto de zoom al pasar el ratón por encima
  }

  @media screen and (max-width: 768px) {
    width: 100px; // Tamaño más pequeño para móviles
  }
`

function Clients() {
  const data = useStaticQuery(graphql`
    query {
      allClientsJson {
        edges {
          node {
            img {
              childImageSharp {
                fluid(maxWidth: 150) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <ClientsSection>
      <ClientsHeading>Nuestros Clientes</ClientsHeading>
      <ClientsContainer>
        {data.allClientsJson.edges.map(({ node }) => (
          <ClientLogo
            key={node.img.childImageSharp.fluid.src}
            fluid={node.img.childImageSharp.fluid}
            alt="Client logo"
          />
        ))}
      </ClientsContainer>
    </ClientsSection>
  )
}

export default Clients
