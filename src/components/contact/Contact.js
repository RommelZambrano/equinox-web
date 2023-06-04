import React from 'react';
import styled from 'styled-components';
import { Button } from './../Button';
import emailjs from 'emailjs-com';

const ContactPage = () => {

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm('service_90yfjcq', 'template_tqcdq7q', event.target, '4R8umsTX70OHtK4bvNJDR')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    event.target.reset();
  }

  return (
    <Container>
      <Wrapper>
        <Form onSubmit={sendEmail}>
          <Title>Contáctanos</Title>
          <Text>Envíanos un mensaje y te responderemos lo más pronto posible.</Text>
          <FormWrapper>
            <Input name="name" type="text" placeholder="Nombre" required />
            <Input name="email" type="email" placeholder="Correo" required />
            <MessageInput name="message" type="text" placeholder="Mensaje" required />
            <SubmitButton type="submit" primary="true" round="true">Enviar</SubmitButton>
          </FormWrapper>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default ContactPage;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #FFF9C4;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  background-color: #E9ECEF;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  color: #fff;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #343a40;
  margin-bottom: 10px;
  text-align: center;
`;

const Text = styled.p`
  font-size: 1rem;
  color: #868e96;
  margin-bottom: 20px;
  text-align: center;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

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
`;

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
`;

const SubmitButton = styled(Button)`
  align-self: center;
  margin-top: 10px;
`;
