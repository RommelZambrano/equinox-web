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

const TopBar = styled.div`
  background: #000;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.5rem 1rem;
  color: #fff;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 1rem 0;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    justify-content: center;
    margin-bottom: 0.5rem;
  }
`;

const SocialIconLink = styled.a`
  color: inherit;
  margin-left: 0.5rem;
  text-decoration: none;

  &:hover {
    color: #007bff;
  }

  @media screen and (max-width: 768px) {
    margin-left: 0;
    margin-right: 0.5rem;
  }
`;

const TopbarText = styled.p`
  color: #efa23a;
  margin: 0 1rem;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;

const TopbarAddress = styled.div`
  color: #efa23a;
  display: flex;
  align-items: center;
  margin: 0 1rem;

  @media screen and (max-width: 768px) {
    margin: 0.5rem 0;
  }

  span {
    margin-left: 0.5rem;
  }
`;

const TopbarLink = styled.a`
  color: #efa23a;
  text-decoration: none;
  margin: 0 1rem;
  display: flex;
  align-items: center;

  &:hover {
    color: #007bff;
  }

  @media screen and (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;

const Topbar = () => {
  return (
    <TopBar>
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
      <TopbarText>
        <FaEnvelope size="1em" /> asistente1@equinox-services.com
      </TopbarText>
      <TopbarAddress>
        <FaMapMarkedAlt size="1em" />
        <span>Calle N40J #E14-247 y los Motilones. Urb. Gabriela Marina. sector redondel del ciclista</span>
      </TopbarAddress>
      <TopbarLink href="https://sdmconsultores.com.co/" target="_blank">
        También estamos ubicados en Colombia <FaExternalLinkAlt />
      </TopbarLink>
    </TopBar>
  );
};

export default Topbar;
