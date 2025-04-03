import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  FiCode, 
  FiLayout, 
  FiDatabase, 
  FiCloud,
  FiTerminal,
  FiBox,
  FiTool
} from 'react-icons/fi';

const SkillsSection = styled.section`
  background-color: var(--section-dark);
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
  margin-bottom: var(--spacing-md);
  color: var(--text-primary);
  
  span {
    color: var(--primary);
  }
`;

const SectionDescription = styled(motion.p)`
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
`;

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-xl);
`;

const SkillCard = styled(motion.div)`
  background: var(--card-bg);
  border-radius: var(--radius-lg);
  border: 1px solid var(--card-border);
  padding: var(--spacing-xl);
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-lg);
  
  svg {
    color: var(--primary);
    font-size: var(--fs-2xl);
  }
`;

const CategoryTitle = styled.h3`
  color: var(--text-primary);
  font-size: var(--fs-xl);
`;

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-md);
`;

const TechItem = styled(motion.div)`
  background: var(--background-secondary);
  border-radius: var(--radius-md);
  padding: var(--spacing-sm) var(--spacing-md);
  color: var(--text-secondary);
  font-size: var(--fs-sm);
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  transition: var(--transition);
  cursor: default;
  
  &:hover {
    background: var(--background-tertiary);
    color: var(--primary);
    transform: translateX(5px);
  }

  svg {
    color: var(--primary);
    font-size: var(--fs-lg);
  }
`;

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <FiCode />,
      technologies: [
        { name: 'React.js', icon: <FiBox /> },
        { name: 'Next.js', icon: <FiBox /> },
        { name: 'JavaScript', icon: <FiTerminal /> },
        { name: 'HTML5', icon: <FiCode /> },
        { name: 'CSS3', icon: <FiLayout /> }
      ]
    },
    {
      title: 'Backend Development',
      icon: <FiDatabase />,
      technologies: [
        { name: 'Node.js', icon: <FiTerminal /> },
        { name: 'Express', icon: <FiBox /> },
        { name: 'MongoDB', icon: <FiDatabase /> },
      ]
    },
    {
      title: 'UI/UX Design',
      icon: <FiLayout />,
      technologies: [
        { name: 'Figma', icon: <FiTool /> },
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: <FiCloud />,
      technologies: [
        { name: 'Git', icon: <FiTool /> },
      ]
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const techVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <SkillsSection id="skills">
      <Container>
        <SectionHeader>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            My <span>Skills</span>
          </SectionTitle>
          <SectionDescription
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I specialize in modern web technologies and have expertise in both frontend and backend development.
            Here are my areas of expertise:
          </SectionDescription>
        </SectionHeader>

        <SkillGrid>
          {skillCategories.map((category, categoryIndex) => (
            <SkillCard
              key={category.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <CategoryHeader>
                {category.icon}
                <CategoryTitle>{category.title}</CategoryTitle>
              </CategoryHeader>
              <TechGrid>
                {category.technologies.map((tech, techIndex) => (
                  <TechItem
                    key={tech.name}
                    variants={techVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.3, 
                      delay: (categoryIndex * 0.1) + (techIndex * 0.05)
                    }}
                  >
                    {tech.icon}
                    {tech.name}
                  </TechItem>
                ))}
              </TechGrid>
            </SkillCard>
          ))}
        </SkillGrid>
      </Container>
    </SkillsSection>
  );
};

export default Skills;