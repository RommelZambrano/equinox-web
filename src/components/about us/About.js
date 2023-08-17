import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

function AboutUs() {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      allAboutJson {
        edges {
          node {
            title
            alt
            img {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  function getAbout(data) {
    const aboutArray = []
    data.allAboutJson.edges.forEach((item, index) => {
      if (item.node.img && item.node.img.childImageSharp) {
        const isValuesCard = item.node.title === "Valores"
        aboutArray.push(
          <AboutCard key={index} isValuesCard={isValuesCard}>
            <AboutImg fluid={item.node.img.childImageSharp.fluid} />
            <AboutContent>
              <AboutTitle>{item.node.title}</AboutTitle>
              {isValuesCard ? (
                <AboutDescription>
                  <ul>
                    {item.node.alt.split("\n").map((value, index) => (
                      <li key={index}>{value.trim()}</li>
                    ))}
                  </ul>
                </AboutDescription>
              ) : (
                <AboutDescription>{item.node.alt}</AboutDescription>
              )}
            </AboutContent>
          </AboutCard>
        )
      }
    })
    return aboutArray
  }

  return (
    <AboutContainer>
      <AboutHeading>Quienes Somos</AboutHeading>
      <AboutWrapper>{getAbout(data)}</AboutWrapper>
    </AboutContainer>
  )
}

export default AboutUs

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 1400px;
  padding: 50px 20px;
  background-color: #fafafa;
`

const AboutHeading = styled.h2`
  font-size: 3rem;
  margin-bottom: 50px;
  color: #000000;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const AboutWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
`

const AboutCard = styled.div`
  width: 380px;
  margin: 20px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
  background-color: #fff;
  border: 1px solid #ddd;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }

  @media screen and (max-width: 1200px) {
    width: 90%;
  }
  ${({ isValuesCard }) =>
    isValuesCard &&
    `
  ul {
    list-style-type: disc; /* Tipo de viñeta */
    padding-left: 1em; /* Espaciado a la izquierda para las viñetas */
  }
  li {
    font-size: 1rem;
    color: #ffffff;
    line-height: 1.5;
    text-align: justify;
  }
`}
`

const AboutImg = styled(Img)`
  width: 100%;
  height: 250px;
  object-fit: cover;

  @media screen and (max-width: 1200px) {
    height: 200px;
  }
`

const AboutContent = styled.div`
  padding: 25px;
  overflow: auto;
  height: 480px;
  transition: all 0.3s ease;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  &:hover {
    scroll-padding-top: 10px;
  }

  @media screen and (max-width: 1200px) {
    height: 250px;
  }
`

const AboutTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #efa23a;
  transition: 0.2s ease;
  text-align: center;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;

  &:hover {
    color: #fff;
  }
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`

const AboutDescription = styled.p`
  font-size: 1rem;
  color: #ffffff;
  line-height: 1.5;
  text-align: justify;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`
