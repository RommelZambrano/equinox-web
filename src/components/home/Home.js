import React from "react";
import styled from "styled-components";
import yourImage from '../../images/pexels-rdne-stock-project-9034755.jpg';
import { Button } from "../Button";



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

const Image = styled.img`
  width: 45%;
  height: auto;
  border-radius: 10px;
  margin-left: 30px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  height: 100%;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const TextContainer = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    width: 45%;
    text-align: left;
    margin-bottom: 0;
  }
`;

const Slogan = styled.h1`
  font-size: 2em;
  color: #333;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.2em;
  color: #666;
  margin-bottom: 40px;
`;

const CallToAction = styled(Button)`
  margin-top: 40px;
`;