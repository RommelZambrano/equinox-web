import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

function Services() {
  const data = useStaticQuery(graphql`
    query ServicesQuery {
      allServicesJson {
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

  function getServices(data) {
    const servicesArray = []
    data.allServicesJson.edges.forEach((item, index) => {
      if (item.node.img && item.node.img.childImageSharp) {
        servicesArray.push(
          <ProductCard key={index}>
            <ProductImg fluid={item.node.img.childImageSharp.fluid} />
            <ProductContent>
              <ProductTitle>{item.node.title}</ProductTitle>
              <ProductDescription
                className="service-description"
                dangerouslySetInnerHTML={{ __html: item.node.alt }}
              />
            </ProductContent>
          </ProductCard>
        )
      }
    })
    return servicesArray
  }

  return (
    <ProductsContainer>
      <ProductsHeading>Nuestros Servicios</ProductsHeading>
      <ProductWrapper>{getServices(data)}</ProductWrapper>
    </ProductsContainer>
  )
}

export default Services

const ProductsContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: #000;
`

const ProductsHeading = styled.h2`
  font-size: clamp(1.2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 3rem;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`

const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  justify-content: center;
  margin: 0 2rem;

  @media screen and (max-width: 1200px) {
    justify-content: center;
  }
`

const ProductCard = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 750px;
  border-radius: 10px;
  overflow: hidden;
  transition: 0.2s ease;

  &:hover {
    transform: scale(1.02);
    cursor: pointer;
  }

  @media screen and (max-width: 868px) {
    height: auto;
    flex-direction: column;
  }
`

const ProductImg = styled(Img)`
  width: 50%;
  height: 80%;
  border-radius: 10px;
  filter: brightness(70%);
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
  object-fit: cover;

  @media screen and (max-width: 868px) {
    width: 100%;
    height: 250px;
    margin-bottom: 1rem;
  }
`

const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
  border-radius: 10px;
  width: 60%;
  height: 80%;
  padding: 2rem;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;

  @media screen and (max-width: 868px) {
    width: 100%;
    height: auto;
    margin-left: 0.1rem;
  }
`

const ProductTitle = styled.h3`
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
`

const ProductDescription = styled.p`
  font-size: 1rem;
  color: #ffffff;
  line-height: 1.5;
  text-align: justify;
  white-space: pre-line;

  ul {
    list-style-type: none;
    margin-left: 0;
    padding-left: 1.5em;
  }

  ul li::before {
    content: "-";
    display: inline-block;
    width: 1em;
    margin-left: -1.5em;
  }

  @media screen and (max-width: 868px) {
    margin-top: 0;
  }
`
