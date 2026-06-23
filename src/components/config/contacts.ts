import { ContactChannel } from '../types/contact';

export const contactsData: ContactChannel[] = [
  {
    name: 'LinkedIn',
    label: 'Henrique-Dev-Fullstack', 
    url: 'https://linkedin.com/in/henrique-dev-fullstack/',
    icon: 'FiLinkedin',
    isPrimary: true,
  },
  {
    name: 'GitHub',
    label: 'github.com/Henrique Dev Fullstack',
    url: 'https://github.com/henrique-fullstack',
    icon: 'FiGithub',
    isPrimary: true,
  },
  {
  name: 'E-mail',
  label: 'henrique.dev.fullstack@gmail.com',
  url: 'https://mail.google.com/mail/?view=cm&fs=1&to=henrique.dev.fullstack@gmail.com',
  icon: 'FiMail',
  isPrimary: false,
},
  {
    name: 'WhatsApp',
    label: '+55 87 981153260',
    url: 'https://wa.me/5587981153260',
    icon: 'FiMessageSquare',
    isPrimary: false,
  }
];