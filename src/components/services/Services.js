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
      if (item.node.img && item.node.img.childImageSharp)
        servicesArray.push(
          <ProductCard key={index}>
            <ProductImg
              src={item.node.img.childImageSharp.fluid.src}
              
              fluid={item.node.img.childImageSharp.fluid}
            />
            <ProductInfo>
              <TextWrap>
                <ProductTitle>{item.node.title}</ProductTitle>
              </TextWrap>
            </ProductInfo>
          </ProductCard>
        )
    })
    return servicesArray
  }

  return (
    <ProductsContainer>
      <ProductsHeading>Servicios</ProductsHeading>
      <ProductWrapper>{getServices(data)}</ProductWrapper>
    </ProductsContainer>
  )
}

export default Services

const ProductsContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #150f0f;
  color: #fff;
`
const ProductsHeading = styled.div`
  font-size: clamp(1.2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  color: #fff;
`
const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  justify-content: center;
  margin: 0 2rem;

  @media screen and (max-width: 1200px) {
    justify-content: center;
  }

  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
  }
`
const ProductCard = styled.div`
  line-height: 2;
  width: 100%;
  height: 500px;
  position: relative;
  border-radius: 10px;
  transition: 0.2s ease;
  align-items: center; /* Agregar alineación centrada */
  justify-content: center; /* Agregar alineación centrada */
`
const ProductImg = styled(Img)`
  height: 100%;
  max-width: 100%;
  position: absolute;
  border-radius: 10px;
  filter: brightness(70%);
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    filter: brightness(100%);
  }
`

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 2rem;
  align-items: center; /* Agregar alineación centrada */

  @media screen and (max-width: 280px) {
    padding: 0 1rem;
  }
`
const TextWrap = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 375px;
`
const ProductTitle = styled.div`
  font-weight: 500;
  font-size: 2rem;
  margin-left: 0.5rem;
  text-align: center; /* Agregar alineación centrada */
`
