import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin } from 'react-icons/fi';

const ContactSection = styled.section`
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
  
  span {
    color: var(--primary);
  }
`;

const SectionDescription = styled(motion.p)`
  color: var(--white);
  opacity: 0.8;
  max-width: 600px;
  margin: 0 auto;
`;

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-2xl);
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: var(--spacing-xl);
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
`;

const IconBox = styled.div`
  width: 50px;
  height: 50px;
  border-radius: var(--radius-md);
  background: var(--gradient);
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    font-size: var(--fs-xl);
    color: var(--white);
  }
`;

const ContactDetails = styled.div`
  h3 {
    color: var(--text-primary);
    margin-bottom: var(--spacing-xs);
    font-size: var(--fs-lg);
  }
  
  p {
    color: var(--text-secondary);
    margin-bottom: 0;
  }
`;

const MailtoButton = styled(motion.a)`
  background: var(--gradient);
  color: var(--white);
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--radius-md);
  font-weight: 500;
  font-size: var(--fs-md);
  display: inline-block;
  text-align: center;
  border: none;
  cursor: pointer;
  transition: var(--transition);
  text-decoration: none;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-md);
  }
  
  @media (max-width: 768px) {
    margin-top: var(--spacing-lg);
    align-self: flex-start;
  }
`;

const ContactStats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-2xl);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled(motion.div)`
  background: var(--card-bg);
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  text-align: center;
  border: 1px solid var(--card-border);
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }
  
  h4 {
    color: var(--primary);
    font-size: var(--fs-3xl);
    margin-bottom: var(--spacing-sm);
  }
  
  p {
    color: var(--text-secondary);
    margin-bottom: 0;
  }
`;

const Contact = () => {
  const stats = [
    { number: '3', text: 'Successful Projects' },
    { number: '2+', text: 'Years Experience' }
  ];

  const emailAddress = "kamuil1234@gmail.com";
  const emailSubject = "Let's Connect!";

  return (
    <ContactSection id="contact">
      <Container>
        <SectionHeader>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Get in <span>Touch</span>
          </SectionTitle>
          <SectionDescription
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Feel free to reach out if you want to collaborate with me, or simply have a chat
          </SectionDescription>
        </SectionHeader>

        <ContactStats>
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h4>{stat.number}</h4>
              <p>{stat.text}</p>
            </StatCard>
          ))}
        </ContactStats>

        <ContactContainer>
          <ContactInfo>
            <ContactItem
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ x: 10 }}
            >
              <IconBox>
                <FiMail />
              </IconBox>
              <ContactDetails>
                <h3>Email</h3>
                <p>{emailAddress}</p>
              </ContactDetails>
            </ContactItem>

            <ContactItem
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ x: 10 }}
            >
              <IconBox>
                <FiMapPin />
              </IconBox>
              <ContactDetails>
                <h3>Location</h3>
                <p>Poland, Crakow</p>
              </ContactDetails>
            </ContactItem>
            
            <MailtoButton
              href={`mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Me an Email
            </MailtoButton>
          </ContactInfo>
        </ContactContainer>
      </Container>
    </ContactSection>
  );
};

export default Contact;