import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const SwitcherButton = styled(motion.button)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--gradient);
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--fs-xl);
  cursor: pointer;
  z-index: 100;
  box-shadow: var(--shadow-lg);

  &:hover {
    transform: translateY(-2px);
  }

  svg {
    transition: var(--transition);
  }
`;

const ThemeSwitcher = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <SwitcherButton
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {isDarkMode ? <FiSun /> : <FiMoon />}
    </SwitcherButton>
  );
};

export default ThemeSwitcher;