import React, { useCallback } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Tilt from 'react-parallax-tilt';
import profileImage from '../assets/images/profile/profile.jpg';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  background: var(--background);
  overflow: hidden;
`;

const ParticlesContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const HeroContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-2xl);
  position: relative;
  z-index: 1;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Greeting = styled(motion.p)`
  color: var(--primary);
  font-size: var(--fs-lg);
  font-weight: 500;
  margin-bottom: var(--spacing-md);
`;

const Name = styled(motion.h1)`
  color: var(--text-primary);
  font-size: var(--fs-5xl);
  margin-bottom: var(--spacing-sm);
  
  span {
    color: var(--primary);
  }
  
  @media (max-width: 768px) {
    font-size: var(--fs-4xl);
  }
`;

const JobTitle = styled(motion.h2)`
  color: var(--text-secondary);
  font-size: var(--fs-3xl);
  margin-bottom: var(--spacing-lg);
  font-weight: 600;
  
  @media (max-width: 768px) {
    font-size: var(--fs-2xl);
  }
`;

const Bio = styled(motion.p)`
  color: var(--text-secondary);
  font-size: var(--fs-lg);
  margin-bottom: var(--spacing-xl);
  max-width: 500px;
  
  @media (max-width: 992px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const CTAButtons = styled(motion.div)`
  display: flex;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-xl);
  
  @media (max-width: 992px) {
    justify-content: center;
  }
`;

const PrimaryButton = styled.a`
  background: var(--gradient);
  color: var(--white);
  padding: var(--spacing-sm) var(--spacing-xl);
  border-radius: var(--radius-md);
  font-weight: 500;
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-md);
  }
`;

const SecondaryButton = styled.a`
  background: transparent;
  color: var(--text-primary);
  padding: var(--spacing-sm) var(--spacing-xl);
  border-radius: var(--radius-md);
  font-weight: 500;
  border: 2px solid var(--primary);
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-md);
    background: var(--primary);
    color: var(--white);
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: var(--spacing-md);
  
  @media (max-width: 992px) {
    justify-content: center;
  }
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

const HeroImage = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 992px) {
    display: none;
  }
`;

const ProfileImage = styled.div`
  width: 400px;
  height: 400px;
  border-radius: var(--radius-lg);
  background-image: url(${profileImage});
  background-size: cover;
  background-position: center;
  box-shadow: var(--shadow-lg);
  
  @media (max-width: 1200px) {
    width: 350px;
    height: 350px;
  }
`;

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0
  }
};

const Hero = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesConfig = {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#6366f1"
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.3,
        random: true
      },
      size: {
        value: 3,
        random: true
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#6366f1",
        opacity: 0.2,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 0.5
          }
        },
        push: {
          particles_nb: 4
        }
      }
    },
    retina_detect: true
  };

  return (
    <HeroSection id="home">
      <ParticlesContainer>
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesConfig}
        />
      </ParticlesContainer>
      
      <HeroContainer>
        <HeroContent>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <Greeting variants={itemVariants}>Hello, I'm</Greeting>
            <Name variants={itemVariants}>
              John <span>Doe</span>
            </Name>
            <JobTitle variants={itemVariants}>Frontend Developer</JobTitle>
            <Bio variants={itemVariants}>
              I create beautiful, responsive websites with modern technologies
              that help businesses achieve their goals.
            </Bio>
            
            <CTAButtons variants={itemVariants}>
              <PrimaryButton href="#projects">View My Work</PrimaryButton>
              <SecondaryButton href="#contact">Contact Me</SecondaryButton>
            </CTAButtons>
            
            <SocialLinks variants={itemVariants}>
              <SocialLink href="https://github.com/" target="_blank" rel="noopener noreferrer">
                <FiGithub />
              </SocialLink>
              <SocialLink href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                <FiLinkedin />
              </SocialLink>
              <SocialLink href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <FiTwitter />
              </SocialLink>
            </SocialLinks>
          </motion.div>
        </HeroContent>
        
        <HeroImage
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Tilt
            tiltMaxAngleX={7}
            tiltMaxAngleY={7}
            perspective={1000}
            scale={1}
            transitionSpeed={2000}
            gyroscope={true}
          >
            <ProfileImage />
          </Tilt>
        </HeroImage>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;