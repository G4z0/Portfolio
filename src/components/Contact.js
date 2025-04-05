import React, { useState } from 'react';
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
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-2xl);
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
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

const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
`;

const Label = styled.label`
  color: var(--text-primary);
  font-size: var(--fs-sm);
  font-weight: 500;
`;

const Input = styled.input`
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-md);
  border: 1px solid ${props => props.error ? 'var(--error)' : 'var(--input-border)'};
  background: var(--input-bg);
  color: var(--text-primary);
  font-size: var(--fs-md);
  width: 100%;
  transition: var(--transition);
  
  &:focus {
    outline: none;
    border-color: var(--input-focus);
    box-shadow: 0 0 0 2px ${props => props.error ? 'var(--error)' : 'var(--primary)'}20;
  }
`;

const TextArea = styled.textarea`
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-md);
  border: 1px solid ${props => props.error ? 'var(--error)' : 'var(--input-border)'};
  background: var(--input-bg);
  color: var(--text-primary);
  font-size: var(--fs-md);
  min-height: 150px;
  resize: vertical;
  width: 100%;
  transition: var(--transition);
  
  &:focus {
    outline: none;
    border-color: var(--input-focus);
    box-shadow: 0 0 0 2px ${props => props.error ? 'var(--error)' : 'var(--primary)'}20;
  }
`;

const MailtoButton = styled(motion.a)`
  background: var(--gradient);
  color: var(--white);
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: var(--radius-md);
  font-weight: 500;
  font-size: var(--fs-md);
  width: 100%;
  display: block;
  text-align: center;
  text-decoration: none;
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-md);
  }
`;

const ErrorText = styled.span`
  color: var(--error);
  font-size: var(--fs-sm);
  margin-top: var(--spacing-xs);
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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  const generateMailtoLink = () => {
    if (!validateForm()) return '#';
    
    const { name, email, subject, message } = formData;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`;
    return `mailto:kamuil1234@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  const stats = [
    { number: '3', text: 'Successful Projects' },
    { number: '2+', text: 'Years Experience' }
  ];

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
                <p>kamuil1234@gmail.com</p>
              </ContactDetails>
            </ContactItem>

            <ContactItem
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
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
          </ContactInfo>

          <ContactForm
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={(e) => e.preventDefault()}
          >
            <FormGroup>
              <Label>Name</Label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
              />
              {errors.name && <ErrorText>{errors.name}</ErrorText>}
            </FormGroup>

            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
              />
              {errors.email && <ErrorText>{errors.email}</ErrorText>}
            </FormGroup>

            <FormGroup>
              <Label>Subject</Label>
              <Input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                error={errors.subject}
              />
              {errors.subject && <ErrorText>{errors.subject}</ErrorText>}
            </FormGroup>

            <FormGroup>
              <Label>Message</Label>
              <TextArea
                name="message"
                value={formData.message}
                onChange={handleChange}
                error={errors.message}
              />
              {errors.message && <ErrorText>{errors.message}</ErrorText>}
            </FormGroup>

            <MailtoButton
              href={generateMailtoLink()}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              onClick={validateForm}
            >
              Open Email Client
            </MailtoButton>
          </ContactForm>
        </ContactContainer>
      </Container>
    </ContactSection>
  );
};

export default Contact;