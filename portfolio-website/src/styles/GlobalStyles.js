import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    /* Base brand colors - consistent across themes */
    --primary: #6366f1;
    --primary-dark: #4f46e5;
    --primary-light: #818cf8;
    --secondary: #0ea5e9;
    --accent: #8b5cf6;
    --success: #22c55e;
    --error: #ef4444;
    --gradient: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
    
    /* Font sizes */
    --fs-xs: 0.75rem;
    --fs-sm: 0.875rem;
    --fs-md: 1rem;
    --fs-lg: 1.125rem;
    --fs-xl: 1.25rem;
    --fs-2xl: 1.5rem;
    --fs-3xl: 1.875rem;
    --fs-4xl: 2.25rem;
    --fs-5xl: 3rem;
    
    /* Spacing */
    --spacing-xs: 0.25rem;
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 1.5rem;
    --spacing-xl: 2rem;
    --spacing-2xl: 3rem;
    
    /* Border radius */
    --radius-sm: 0.25rem;
    --radius-md: 0.5rem;
    --radius-lg: 1rem;
    --radius-full: 9999px;
    
    /* Transitions */
    --transition: 0.3s ease-in-out;
  }

  /* Light theme */
  [data-theme='light'] {
    /* Background colors */
    --background: #ffffff;
    --background-secondary: #f8fafc;
    --background-tertiary: #f1f5f9;
    
    /* Text colors */
    --text-primary: #0f172a;
    --text-secondary: #334155;
    --text-tertiary: #64748b;
    
    /* UI colors */
    --card-bg: #ffffff;
    --card-border: #e2e8f0;
    --navbar-bg: rgba(255, 255, 255, 0.8);
    --divider: #e2e8f0;
    
    /* Component colors */
    --input-bg: #ffffff;
    --input-border: #e2e8f0;
    --input-focus: var(--primary);
    
    /* Shadow colors */
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px rgba(15, 23, 42, 0.05);
    --shadow-lg: 0 10px 15px rgba(15, 23, 42, 0.05);
    
    /* Section backgrounds */
    --section-light: #ffffff;
    --section-dark: #f8fafc;
    
    /* Overlay colors */
    --overlay-bg: rgba(255, 255, 255, 0.8);
    --overlay-dark: rgba(0, 0, 0, 0.5);
  }

  /* Dark theme */
  [data-theme='dark'] {
    /* Background colors */
    --background: #0f172a;
    --background-secondary: #1e293b;
    --background-tertiary: #334155;
    
    /* Text colors */
    --text-primary: #f8fafc;
    --text-secondary: #e2e8f0;
    --text-tertiary: #94a3b8;
    
    /* UI colors */
    --card-bg: #1e293b;
    --card-border: #334155;
    --navbar-bg: rgba(15, 23, 42, 0.8);
    --divider: #334155;
    
    /* Component colors */
    --input-bg: #1e293b;
    --input-border: #334155;
    --input-focus: var(--primary-light);
    
    /* Shadow colors */
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.3);
    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.2);
    --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.2);
    
    /* Section backgrounds */
    --section-light: #1e293b;
    --section-dark: #0f172a;
    
    /* Overlay colors */
    --overlay-bg: rgba(15, 23, 42, 0.8);
    --overlay-dark: rgba(0, 0, 0, 0.7);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, 
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: var(--background);
    color: var(--text-primary);
    line-height: 1.6;
    overflow-x: hidden;
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  button, input, textarea {
    font-family: inherit;
    font-size: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
  }

  section {
    padding: var(--spacing-2xl) 0;
  }

  .container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: 1.2;
    font-weight: 700;
    color: var(--text-primary);
  }

  h1 {
    font-size: var(--fs-5xl);
  }

  h2 {
    font-size: var(--fs-4xl);
  }

  h3 {
    font-size: var(--fs-3xl);
  }

  h4 {
    font-size: var(--fs-2xl);
  }

  p {
    margin-bottom: var(--spacing-md);
    color: var(--text-secondary);
  }

  @media (max-width: 768px) {
    h1 {
      font-size: var(--fs-4xl);
    }

    h2 {
      font-size: var(--fs-3xl);
    }

    h3 {
      font-size: var(--fs-2xl);
    }

    h4 {
      font-size: var(--fs-xl);
    }
  }
`;

export default GlobalStyles;