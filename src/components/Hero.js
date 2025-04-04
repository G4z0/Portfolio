import React, { useCallback, useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import profileImage from '../assets/images/profile/profile.jpg';

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, var(--background) 0%, var(--background-secondary) 100%);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 70% 30%, var(--background-tertiary) 0%, transparent 70%);
  }
`;

const ParticlesContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const HeroContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 992px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap: var(--spacing-2xl);
  }
`;

const HeroContent = styled.div`
  flex: 1;
  z-index: 10;
`;

const Greeting = styled(motion.p)`
  color: var(--primary);
  font-size: var(--fs-lg);
  font-weight: 500;
  margin-bottom: var(--spacing-md);
`;

const Name = styled(motion.h1)`
  color: var(--text-primary);
  margin-bottom: var(--spacing-sm);
  
  span {
    display: inline-block;
    color: var(--primary);
  }
`;

const JobTitle = styled(motion.h2)`
  color: var(--text-secondary);
  margin-bottom: var(--spacing-lg);
  font-weight: 600;
  font-size: var(--fs-3xl);
`;

const Bio = styled(motion.p)`
  color: var(--text-secondary);
  opacity: 0.9;
  max-width: 550px;
  margin-bottom: var(--spacing-xl);
  
  @media (max-width: 992px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const CTAButtons = styled(motion.div)`
  display: flex;
  gap: var(--spacing-md);
  
  @media (max-width: 992px) {
    justify-content: center;
  }
`;

const PrimaryButton = styled.a`
  background: var(--gradient);
  color: var(--white);
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: var(--radius-md);
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-md);
  }
`;

const SecondaryButton = styled.a`
  border: 2px solid var(--primary);
  color: var(--white);
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: var(--radius-md);
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
  
  &:hover {
    background-color: var(--primary);
    transform: translateY(-3px);
    box-shadow: var(--shadow-md);
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: var(--spacing-md);
  margin-top: var(--spacing-xl);
  
  @media (max-width: 992px) {
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  color: var(--white);
  font-size: var(--fs-xl);
  transition: var(--transition);
  
  &:hover {
    color: var(--primary);
    transform: translateY(-3px);
  }
`;

const HeroImage = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  z-index: 10;
  
  @media (max-width: 992px) {
    justify-content: center;
  }
`;

const ProfileImage = styled.div`
  width: 400px;
  height: 400px;
  border-radius: var(--radius-lg);
  background-image: url(${profileImage});
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 576px) {
    width: 280px;
    height: 280px;
  }
`;

const Hero = () => {
  const particlesInit = useCallback(async engine => {
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
        value: getComputedStyle(document.documentElement).getPropertyValue('--primary').trim()
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
        color: getComputedStyle(document.documentElement).getPropertyValue('--primary').trim(),
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;
        
        // Reduced max rotation to 7 degrees for a more subtle effect
        const rotateY = mouseX / (rect.width / 2) * 5;  // max 7 degrees
        const rotateX = -mouseY / (rect.height / 2) * 5; // max 7 degrees
        
        setMousePosition({ x: rotateY, y: rotateX });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
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
              <span>Kamil</span>
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
          ref={imageRef}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div
            style={{
              transformStyle: 'preserve-3d',
              transform: `perspective(1000px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)`,
              transition: 'transform 0.5s cubic-bezier(0.03, 0.98, 0.52, 0.99)'
            }}
          >
            <ProfileImage />
          </motion.div>
        </HeroImage>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
