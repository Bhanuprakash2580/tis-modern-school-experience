import { ArrowUpRight, BookOpen, Compass, Heart, MoveUpRight, Trees } from 'lucide-react';
import { Reveal } from '../animation/ScrollEffects.jsx';

const experiences = [
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

export function LearningSection() {
  return (
    <section className="approach section-wrap" id="approach" aria-labelledby="approach-title">
      <div className="section-heading">
        <Reveal className="section-intro">
          <span className="eyebrow">A LITTLE MORE THAN LESSONS</span>
          <h2 id="approach-title">Growing into<br /><em>your own kind of great.</em></h2>
        </Reveal>
        <Reveal className="section-aside" delay={0.1}>
          <p>School is more than what you learn. It is the person you meet, the thing you make, and the moment you surprise yourself.</p>
          <span className="aside-mark"><Trees size={23} strokeWidth={1.5} /></span>
        </Reveal>
      </div>
      <div className="experience-grid">
        {experiences.map(({ number, icon: Icon, title, description, tone }, index) => (
          <Reveal className={`experience ${tone}`} delay={index * 0.09} key={number}>
            <div className="experience-top"><span>{number} / 03</span><Icon size={22} strokeWidth={1.5} /></div>
            <div><h3>{title}</h3><p>{description}</p></div>
            <span className="experience-arrow" aria-hidden="true"><MoveUpRight size={16} /></span>
          </Reveal>
        ))}
      </div>
      <div className="approach-bottom"><span>CLASSES 4–12</span><span>ONE COMMUNITY, MANY WAYS TO GROW</span></div>
    </section>
  );
}

export function CampusSection() {
  return (
    <section className="campus" id="campus" aria-labelledby="campus-title">
      <div className="campus-image-wrap">
        <img
          src="https://images.unsplash.com/photo-1476231682828-37e571bc172f?auto=format&fit=crop&w=1500&q=85"
          alt="Sunlight falling through a quiet forest canopy"
          loading="lazy"
        />
        <span className="image-label">A LITTLE SPACE TO FIND YOURSELF</span>
      </div>
      <div className="campus-copy">
        <Reveal>
          <span className="eyebrow">A CAMPUS THAT OPENS UP</span>
          <h2 id="campus-title">Room to try.<br /><em>Room to thrive.</em></h2>
          <p>Set in the foothills of Dehradun, Tulas brings learning and everyday life together. Here, the day has space for a good lesson, a new interest and the kind of conversations that stay with you.</p>
          <a className="text-link" href="https://tis.edu.in/" target="_blank" rel="noreferrer">See the Tulas campus <ArrowUpRight size={16} /></a>
        </Reveal>
        <div className="campus-note"><span className="note-icon"><Trees size={20} /></span><span>DEHRADUN<br /><strong>Where the foothills feel close</strong></span></div>
      </div>
    </section>
  );
}

export function AdmissionsSection() {
  return (
    <section className="admissions" id="admissions" aria-labelledby="admissions-title">
      <Reveal className="admissions-copy">
        <span className="eyebrow eyebrow-light">FOR THE YEARS THAT SHAPE YOU</span>
        <h2 id="admissions-title">Your story has<br />a next chapter.</h2>
        <p>From Class 4 to 12, find the kind of school that makes space for who you are and who you are becoming.</p>
        <a className="button button-cream" href="mailto:info@tis.edu.in?subject=Admissions%20enquiry">Start a conversation <ArrowUpRight size={17} /></a>
      </Reveal>
      <div className="admissions-aside">
        <span className="admissions-number">04<span>—</span>12</span>
        <span>CLASSES AT TULAS</span>
        <span className="admissions-line" />
        <span>BOARDING & DAY SCHOOL<br />CBSE · DEHRADUN</span>
      </div>
    </section>
  );
}