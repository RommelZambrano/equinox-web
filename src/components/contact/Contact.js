import React, { useState } from "react"
import styled from "styled-components"
import { ButtonForm } from "./../Button"
import { useForm, ValidationError } from "@formspree/react"
import { Link } from "gatsby"

const ContactPage = () => {
  const [state, handleSubmit] = useForm(process.env.GATSBY_FORMSPREE_FORM_ID)
  const [redirectToHome, setRedirectToHome] = useState(false)

  if (state.succeeded) {
    // Redirige a la página principal después de 2 segundos
    setTimeout(() => setRedirectToHome(true), 2000)

    return (
      <Container>
        <SuccessMessage>
          <Title>🎉 ¡Gracias por contactarnos! 🎉</Title>
          <Text>Nos pondremos en contacto con usted pronto.</Text>
          <SubmitButton as={Link} to="/" primary="true" round="true">
            Volver a la página principal
          </SubmitButton>
        </SuccessMessage>
      </Container>
    )
  }

  if (redirectToHome) {
    return <Link to="/" />
  }

  return (
    <Container>
      <Wrapper>
        <Form onSubmit={handleSubmit} method="POST">
          <Title>Contáctenos</Title>
          <Text>
            Dinos tu nombre, correo electrónico y el motivo de tu consulta y te
            responderemos lo antes posible. ¡Gracias!
          </Text>
          <FormWrapper>
            <Input
              id="name"
              type="text"
              placeholder="Nombre"
              name="name"
              required
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            <Input
              id="email"
              type="email"
              placeholder="Correo electrónico"
              name="email"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <Input
              id="subject"
              type="text"
              placeholder="Asunto"
              name="subject"
              required
            />
            <ValidationError
              prefix="Subject"
              field="subject"
              errors={state.errors}
            />
            <MessageInput placeholder="Mensaje" name="message" required />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <SubmitButton
              primary="true"
              type="submit"
              round="true"
              disabled={state.submitting}
            >
              Enviar
            </SubmitButton>
          </FormWrapper>
        </Form>
          <br />
        <Text>
          O visitanos en nuestras oficinas ubicadas en Av. 6 de diciembre (N37-185) y el comercio. Edificio Mena Salazar - piso 8.
        </Text>
      </Wrapper>
    </Container>
  )
}

export default ContactPage

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  background-color: #e9ecef;

  @media screen and (max-width: 768px) {
    width: 350px;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  color: #fff;

  @media screen and (max-width: 768px) {
    width: 300px;
  }
`

const Title = styled.h1`
  font-size: 2rem;
  color: #343a40;
  margin-bottom: 10px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`

const Text = styled.p`
  font-size: 1rem;
  color: #868e96;
  margin-bottom: 20px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: 300px;
  }
`

const Input = styled.input`
  padding: 10px 15px;
  border-radius: 5px;
  border: 1px solid #ced4da;
  margin-bottom: 10px;
  font-size: 1rem;
  &:focus {
    border-color: #495057;
    outline: none;
  }

  @media screen and (max-width: 768px) {
    width: 300px;
  }
`

const MessageInput = styled.textarea`
  padding: 10px 15px;
  border-radius: 5px;
  border: 1px solid #ced4da;
  margin-bottom: 10px;
  font-size: 1rem;
  resize: none;
  height: 150px;
  &:focus {
    border-color: #495057;
    outline: none;
  }

  @media screen and (max-width: 768px) {
    height: 100px;
  }
`

const SubmitButton = styled(ButtonForm)`
  align-self: center;
  margin-top: 20px;

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(2px);
  }

  &:disabled {
    background-color: #adb5bd;
    color: #fff;
    cursor: not-allowed;
  }

  &:disabled:hover {
    transform: translateY(0);
  }

  &:disabled:active {
    transform: translateY(0);
  }

  @media screen and (max-width: 768px) {
    width: 300px;
  }
`

const SuccessMessage = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 250px;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  background-color: #e9ecef;
  text-align: center;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 300px;
  }
`
