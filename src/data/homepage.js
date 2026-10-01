import { BookOpen, Compass, Heart } from 'lucide-react';

export const navigationLinks = [
  { href: '#approach', label: 'Our approach' },
  { href: '#learning-paths', label: 'Learning paths' },
  { href: '#campus', label: 'Life at Tulas' },
  { href: '#admissions', label: 'Admissions' },
  { href: '#faq', label: 'FAQs' },
];

export const experiences = [
  {
    number: '01',
    icon: BookOpen,
    title: 'Curiosity comes first',
    description: 'A CBSE education that gives students a strong foundation, while leaving plenty of room for questions, ideas and their own point of view.',
    tone: 'tone-pistachio',
  },
  {
    number: '02',
    icon: Compass,
    title: 'Confidence, earned daily',
    description: 'New skills, shared responsibilities and the freedom to try again help young people find out what they are capable of.',
    tone: 'tone-peach',
  },
  {
    number: '03',
    icon: Heart,
    title: 'Known, not just enrolled',
    description: 'Boarding and day-school life come together in a community where friendships grow and every student has people in their corner.',
    tone: 'tone-lavender',
  },
];

export const learningPaths = [
  {
    id: 'academics',
    label: 'Academics',
    title: 'A strong foundation, room to explore.',
    description: 'The CBSE curriculum gives students a clear academic foundation from Classes 4 to 12, with space to follow questions and develop their own point of view.',
    detail: 'CBSE · CLASSES 4–12',
  },
  {
    id: 'boarding',
    label: 'Boarding life',
    title: 'A community beyond the classroom.',
    description: 'Boarding brings learning into everyday life: shared routines, friendships, new responsibilities and the confidence that comes from trying things for yourself.',
    detail: 'BOARDING · COMMUNITY · INDEPENDENCE',
  },
  {
    id: 'day-school',
    label: 'Day school',
    title: 'A full school day, a familiar homecoming.',
    description: 'Day students are part of the same school community, sharing lessons, interests and campus life before heading home at the end of the day.',
    detail: 'DAY SCHOOL · DEHRADUN',
  },
];

export const commonQuestions = [
  {
    question: 'Which classes does Tulas offer?',
    answer: 'Tulas International School offers classes 4 to 12. Contact the admissions team to ask about current availability and the application process.',
  },
  {
    question: 'Is Tulas a boarding school or a day school?',
    answer: 'Tulas offers both boarding and day-school options. The admissions team can help you understand which arrangement may suit your family.',
  },
  {
    question: 'Which curriculum does the school follow?',
    answer: 'Tulas follows the CBSE curriculum. For details about subjects and grade-specific academic planning, please contact the school directly.',
  },
  {
    question: 'How can we arrange a conversation or campus visit?',
    answer: 'Write to info@tis.edu.in or call +91 94583 19102 to speak with the school and ask about arranging a visit.',
  },
];