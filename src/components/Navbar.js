import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: ${({ scrolled }) => scrolled ? 'var(--navbar-bg)' : 'transparent'};
  backdrop-filter: ${({ scrolled }) => scrolled ? 'blur(10px)' : 'none'};
  box-shadow: ${({ scrolled }) => scrolled ? 'var(--shadow-md)' : 'none'};
  transition: var(--transition);
  border-bottom: ${({ scrolled }) => scrolled ? '1px solid var(--card-border)' : 'none'};
`;

const NavInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-md) 0;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled.a`
  font-size: var(--fs-xl);
  font-weight: 700;
  color: ${({ scrolled }) => scrolled ? 'var(--text-primary)' : 'var(--white)'};
  transition: var(--transition);
  
  span {
    color: var(--primary);
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ scrolled }) => scrolled ? 'var(--text-primary)' : 'var(--white)'};
  font-weight: 500;
  transition: var(--transition);
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--primary);
    transition: var(--transition);
  }
  
  &:hover {
    color: var(--primary);
    
    &:after {
      width: 100%;
    }
  }
`;

const MenuButton = styled.button`
  display: none;
  color: ${({ scrolled }) => scrolled ? 'var(--text-primary)' : 'var(--white)'};
  font-size: var(--fs-2xl);
  transition: var(--transition);
  
  &:hover {
    color: var(--primary);
  }
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 250px;
  background-color: var(--card-bg);
  z-index: 200;
  padding: var(--spacing-xl);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
  box-shadow: var(--shadow-lg);
  border-left: 1px solid var(--card-border);
`;

const CloseButton = styled.button`
  align-self: flex-end;
  font-size: var(--fs-2xl);
  color: var(--text-primary);
  
  &:hover {
    color: var(--primary);
  }
`;

const MobileNavLink = styled.a`
  color: var(--text-primary);
  font-size: var(--fs-lg);
  font-weight: 500;
  transition: var(--transition);
  
  &:hover {
    color: var(--primary);
    transform: translateX(5px);
  }
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--overlay-dark);
  z-index: 150;
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <>
      <NavbarContainer scrolled={scrolled}>
        <NavInner>
          <Logo href="#home" scrolled={scrolled}>
            Port<span>folio</span>
          </Logo>
          
          <NavLinks>
            <NavLink href="#home" scrolled={scrolled}>Home</NavLink>
            <NavLink href="#about" scrolled={scrolled}>About</NavLink>
            <NavLink href="#skills" scrolled={scrolled}>Skills</NavLink>
            <NavLink href="#projects" scrolled={scrolled}>Projects</NavLink>
            <NavLink href="#contact" scrolled={scrolled}>Contact</NavLink>
          </NavLinks>
          
          <MenuButton 
            onClick={toggleMenu} 
            scrolled={scrolled}
            aria-label="Toggle menu"
          >
            <FiMenu />
          </MenuButton>
        </NavInner>
      </NavbarContainer>
      
      <AnimatePresence>
        {isOpen && (
          <>
            <Overlay 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
            />
            
            <MobileMenu
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <CloseButton onClick={toggleMenu} aria-label="Close menu">
                <FiX />
              </CloseButton>
              
              <MobileNavLink href="#home" onClick={toggleMenu}>Home</MobileNavLink>
              <MobileNavLink href="#about" onClick={toggleMenu}>About</MobileNavLink>
              <MobileNavLink href="#skills" onClick={toggleMenu}>Skills</MobileNavLink>
              <MobileNavLink href="#projects" onClick={toggleMenu}>Projects</MobileNavLink>
              <MobileNavLink href="#contact" onClick={toggleMenu}>Contact</MobileNavLink>
            </MobileMenu>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;