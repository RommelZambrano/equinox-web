import React from "react"
import styled from "styled-components"
import { FaFacebook, FaLinkedin, FaMapMarkedAlt, FaTwitter } from "react-icons/fa"

const TopBar = styled.div`
  background: #f8f9fa;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`;

const SocialIconLink = styled.a`
  color: #333;
  margin-left: 1rem;
  text-decoration: none;

  &:hover {
    color: #007bff;
  }
`;

const Topbar = () => {
  return (
    <TopBar>
      <div>
        <SocialIconLink href="https://twitter.com/RommelZambrano">
          <FaTwitter size="lg" />
        </SocialIconLink>
        <SocialIconLink href="https://www.facebook.com/">
          <FaFacebook size="lg" />
        </SocialIconLink>
        <SocialIconLink href="https://www.linkedin.com/">
          <FaLinkedin size="lg" />
        </SocialIconLink>
      </div>
      <p>asistente1@equinox-services.com</p>
      <div>
        <FaMapMarkedAlt />
        <span>Dirección</span>
      </div>
    </TopBar>
  )
}

export default Topbar
