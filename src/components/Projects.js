import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import ecommerceImg from '../assets/images/projects/ecommerce.jpg';
import taskManagerImg from '../assets/images/projects/taskmanager.jpg';
import travelBlogImg from '../assets/images/projects/travelblog.jpg';
import chatAppImg from '../assets/images/projects/chatapp.jpg';
import aiGeneratorImg from '../assets/images/projects/aigenerator.jpg';

const ProjectsSection = styled.section`
  background-color: var(--section-light);
  padding: var(--spacing-2xl) 0;
`;

const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: var(--spacing-2xl);
`;

const SectionTitle = styled(motion.h2)`
  color: var(--text);
  margin-bottom: var(--spacing-md);
  
  span {
    color: var(--primary);
  }
`;

const SectionDescription = styled(motion.p)`
  color: var(--text-light);
  max-width: 600px;
  margin: 0 auto;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-2xl);
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: var(--radius-full);
  background: ${props => props.active ? 'var(--gradient)' : 'var(--background-secondary)'};
  color: ${props => props.active ? 'var(--white)' : 'var(--text-secondary)'};
  border: none;
  font-weight: 500;
  transition: var(--transition);

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.active ? 'var(--shadow-md)' : 'none'};
    background: ${props => props.active ? 'var(--gradient)' : 'var(--background-tertiary)'};
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-xl);
`;

const ProjectCard = styled(motion.div)`
  background: var(--card-bg);
  border-radius: var(--radius-lg);
  border: 1px solid var(--card-border);
  overflow: hidden;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 250px;
  background-size: cover;
  background-position: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, transparent 0%, var(--overlay-dark) 100%);
    opacity: 0;
    transition: var(--transition);
  }
  
  ${ProjectCard}:hover &::after {
    opacity: 1;
  }
`;

const ProjectLinks = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: var(--spacing-md);
  opacity: 0;
  transition: var(--transition);
  z-index: 2;
  
  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

const ProjectLink = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--card-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary);
  transition: var(--transition);
  
  &:hover {
    background: var(--primary);
    color: var(--white);
    transform: translateY(-3px);
  }
  
  svg {
    font-size: var(--fs-lg);
  }
`;

const ProjectContent = styled.div`
  padding: var(--spacing-lg);
  flex: 1;
  display: flex;
  flex-direction: column;
  background: var(--card-bg);
`;

const ProjectTitle = styled.h3`
  color: var(--text-primary);
  margin-bottom: var(--spacing-sm);
  font-size: var(--fs-xl);
`;

const ProjectDescription = styled.p`
  color: var(--text-secondary);
  font-size: var(--fs-sm);
  margin-bottom: var(--spacing-md);
  flex: 1;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
  margin-top: auto;
`;

const TechTag = styled.span`
  background: var(--background-secondary);
  color: var(--primary);
  padding: 4px 8px;
  border-radius: var(--radius-full);
  font-size: var(--fs-xs);
`;

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: 'Email Backup Tool',
      description: 'An automatic email backup system that checks storage usage, finds messages older than a specified age, removes them from the server and stores them in a database including all data and attachments.',
      image: ecommerceImg,
      tech: ['Node.js', 'SQL', 'API Integration', 'File Management'],
      github: 'https://github.com',
      live: 'https://project-demo.com',
      category: 'fullstack'
    },
    {
      title: 'Email Database Frontend',
      description: 'A frontend interface that works with the email backup tool. Allows users to filter archived messages, preview content, and download full emails or individual attachments from the database.',
      image: taskManagerImg,
      tech: ['React', 'JavaScript', 'SQL', 'REST API'],
      github: 'https://github.com',
      live: 'https://project-demo.com',
      category: 'frontend'
    },
    {
      title: 'Chrome Automation Extension',
      description: 'A productivity Chrome extension that speeds up employee workflows by automating repetitive tasks. Reads data from web pages, automatically fills form fields, submits data, and closes forms to improve efficiency.',
      image: travelBlogImg,
      tech: ['JavaScript', 'Chrome API', 'DOM Manipulation', 'HTML/CSS'],
      github: 'https://github.com',
      live: 'https://project-demo.com',
      category: 'frontend'
    },
  ];

  const filters = [
    { label: 'All', value: 'all' },
    { label: 'Frontend', value: 'frontend' },
    { label: 'Full Stack', value: 'fullstack' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <ProjectsSection id="projects">
      <Container>
        <SectionHeader>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            My <span>Projects</span>
          </SectionTitle>
          <SectionDescription
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Here are some of my recent projects that showcase my skills and experience
          </SectionDescription>
        </SectionHeader>

        <FilterContainer>
          {filters.map((filter, index) => (
            <FilterButton
              key={filter.value}
              active={activeFilter === filter.value}
              onClick={() => setActiveFilter(filter.value)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {filter.label}
            </FilterButton>
          ))}
        </FilterContainer>

        <ProjectsGrid>
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
            >
              <ProjectImage style={{ backgroundImage: `url(${project.image})` }}>
                <ProjectLinks>
                  <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                    <FiGithub />
                  </ProjectLink>
                  <ProjectLink href={project.live} target="_blank" rel="noopener noreferrer">
                    <FiExternalLink />
                  </ProjectLink>
                </ProjectLinks>
              </ProjectImage>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TechStack>
                  {project.tech.map((tech, techIndex) => (
                    <TechTag key={techIndex}>{tech}</TechTag>
                  ))}
                </TechStack>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;