import React from 'react'
import styled from 'styled-components'

function Services() {
  return (
    <ProductsContainer>
        <ProductsHeading>Heading</ProductsHeading>
        <ProductWrapper>Wrapper</ProductWrapper>
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
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
`
