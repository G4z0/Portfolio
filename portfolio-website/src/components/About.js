import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import profile from '../assets/images/profile/profile2.jpg'; // Add this import


const AboutSection = styled.section`
  background-color: var(--background);
  padding: var(--spacing-2xl) 0;
`;

const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-2xl);
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const AboutContent = styled.div``;

const SectionTitle = styled(motion.h2)`
  color: var(--text);
  margin-bottom: var(--spacing-lg);
  
  span {
    color: var(--primary);
  }
`;

const AboutText = styled(motion.p)`
  color: var(--text-light);
  margin-bottom: var(--spacing-lg);
  line-height: 1.8;
`;

const Stats = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
  
  @media (max-width: 992px) {
    justify-items: center;
  }
`;

const StatItem = styled.div`
  h3 {
    color: var(--primary);
    font-size: var(--fs-4xl);
    font-weight: 700;
    margin-bottom: var(--spacing-xs);
  }
  
  p {
    color: var(--text-light);
    font-size: var(--fs-sm);
  }
`;

const ResumeButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  background: var(--gradient);
  color: var(--white);
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: var(--radius-md);
  font-weight: 500;
  transition: var(--transition);
  
  svg {
    font-size: var(--fs-lg);
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-md);
  }
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    width: 100%;
    height: 100%;
    border: 2px solid var(--primary);
    border-radius: var(--radius-lg);
    z-index: 1;
  }
  
  @media (max-width: 992px) {
    width: 80%;
    margin: 0 auto;
  }
`;

const AboutImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: var(--radius-lg);
  position: relative;
  z-index: 2;
`;

const About = () => {
  return (
    <AboutSection id="about">
      <Container>
        <AboutContent>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            About <span>Me</span>
          </SectionTitle>
          
          <AboutText
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I am a passionate frontend developer with a keen eye for design and a love for creating
            seamless user experiences. With expertise in modern web technologies and frameworks,
            I transform ideas into beautiful, functional websites that leave a lasting impression.
          </AboutText>
          
          <Stats
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <StatItem>
              <h3>3+</h3>
              <p>Years of Experience</p>
            </StatItem>
            <StatItem>
              <h3>50+</h3>
              <p>Projects Completed</p>
            </StatItem>
          </Stats>
          
          <ResumeButton
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <FiDownload /> Download Resume
          </ResumeButton>
        </AboutContent>
        
        <ImageContainer
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <AboutImage src={profile} alt="Profile" />
        </ImageContainer>
      </Container>
    </AboutSection>
  );
};

export default About;