import React from "react";
import styled from "styled-components";
import {
  FaFacebook,
  FaLinkedin,
  FaMapMarkedAlt,
  FaEnvelope,
  FaExternalLinkAlt,
  FaInstagram,
} from "react-icons/fa";

const TopBarContainer = styled.div`
  background: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  color: #fff;
  font-size: 0.85rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 1rem 0;
    font-size: 0.75rem;
  }
`;

const Section = styled.div`
color: #efa23a;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    justify-content: center;
    margin-bottom: 0.5rem;
  }
`;

const SocialIcons = styled.div`
color: #fff;
  display: flex;
  align-items: center;
  margin-right: 1rem;
`;

const SocialIconLink = styled.a`
  color: inherit;
  margin: 0 0.3rem;
  text-decoration: none;

  &:hover {
    color: #007bff;
  }
`;

const TextLink = styled.a`
  color: #efa23a;
  text-decoration: none;
  margin-left: 0.5rem;

  &:hover {
    color: #007bff;
  }

  svg {
    margin-left: 0.8rem;
  }
`;

const Topbar = () => {
  return (
    <TopBarContainer>
      <Section>
        <SocialIcons>
          <SocialIconLink href="https://www.instagram.com/equinoxservicesec/">
            <FaInstagram size="1em" />
          </SocialIconLink>
          <SocialIconLink href="https://www.facebook.com/people/Equinox-Services/100093292205309/">
            <FaFacebook size="1em" />
          </SocialIconLink>
          <SocialIconLink href="https://www.linkedin.com/in/equinox-services-ec-570614278/">
            <FaLinkedin size="1em" />
          </SocialIconLink>
        </SocialIcons>
        <FaEnvelope size="1em" style={{ marginRight: '0.5rem' }} /> asistente1@equinox-services.com
      </Section>
      <Section>
        <FaMapMarkedAlt size="1em" style={{ marginRight: '0.5rem' }} />
        Calle N40J #E14-247 y los Motilones. Urb. Gabriela Marina. sector redondel del ciclista
      </Section>
      <Section>
        <TextLink href="https://sdmconsultores.com.co/" target="_blank">
          También estamos ubicados en Colombia <FaExternalLinkAlt size="0.8rem" style={{ marginRight: '0.4rem' }}/>
        </TextLink>
      </Section>
    </TopBarContainer>
  );
};

export default Topbar;
