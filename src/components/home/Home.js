import React from "react";
import styled from "styled-components";
import yourImage from '../../images/pexels-rdne-stock-project-9034755.jpg';
import { Button } from "../Button";

const Image = styled.img`
  width: 50%;
  height: auto;
`;

// Home Page
const Home = () => {
  return (
    <Container>
      <Content>
        <TextContainer>
          <Slogan>
            Cada número cuenta, cada cliente importa. Más que contabilidad, confianza
          </Slogan>
          <Description>
            En Equinox Services, nos dedicamos a proporcionar servicios de contabilidad de alta calidad con un enfoque personalizado. Creemos en la importancia de cada número y valoramos a cada uno de nuestros clientes.
          </Description>
          <CallToAction
          primary="true"
          big="true"
          round="true"
          to="/about">
            Conoce más sobre nosotros
          </CallToAction>
        </TextContainer>
        <Image src={yourImage} alt="Imagen descriptiva" />
      </Content>
    </Container>
  )
}

export default Home

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #FFF9C4;
  padding: 20px;
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
`

const TextContainer = styled.div`
  width: 45%;
`

const Slogan = styled.h1`
  font-size: 2em;
  color: #333;
  margin-bottom: 20px;
`

const Description = styled.p`
  font-size: 1.2em;
  color: #666;
  margin: 20px 0 50px 0;`

const CallToAction = styled(Button)`
  margin-top: 50px;
`
