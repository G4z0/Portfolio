import React from 'react';
import styled from 'styled-components';
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi';

const FooterContainer = styled.footer`
  background-color: var(--section-dark);
  padding: var(--spacing-xl) 0 var(--spacing-lg);
  border-top: 1px solid var(--card-border);
`;

const FooterContent = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.div`
  font-size: var(--fs-xl);
  font-weight: 700;
  margin-bottom: var(--spacing-lg);
  color: var(--text-primary);
  
  span {
    color: var(--primary);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-xl);
`;

const SocialLink = styled.a`
  color: var(--text-secondary);
  font-size: var(--fs-xl);
  transition: var(--transition);
  
  &:hover {
    color: var(--primary);
    transform: translateY(-3px);
  }
`;

const FooterNav = styled.div`
  display: flex;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
  
  @media (max-width: 576px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const FooterLink = styled.a`
  color: var(--text-secondary);
  transition: var(--transition);
  
  &:hover {
    color: var(--primary);
  }
`;

const Copyright = styled.p`
  color: var(--text-tertiary);
  text-align: center;
  font-size: var(--fs-sm);
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterContent>
        <Logo>
          Port<span>folio</span>
        </Logo>
        
        <SocialLinks>
          <SocialLink href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <FiGithub />
          </SocialLink>
          <SocialLink href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FiLinkedin />
          </SocialLink>
          <SocialLink href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <FiTwitter />
          </SocialLink>
          <SocialLink href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
            <FiInstagram />
          </SocialLink>
        </SocialLinks>
        
        <FooterNav>
          <FooterLink href="#home">Home</FooterLink>
          <FooterLink href="#about">About</FooterLink>
          <FooterLink href="#skills">Skills</FooterLink>
          <FooterLink href="#projects">Projects</FooterLink>
          <FooterLink href="#contact">Contact</FooterLink>
        </FooterNav>
        
        <Copyright>
          &copy; {currentYear} Portfolio. All rights reserved.
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;