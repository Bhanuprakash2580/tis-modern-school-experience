import { MoveUpRight, Trees } from 'lucide-react';
import { experiences } from '../../data/homepage.js';
import { Reveal } from '../animation/ScrollEffects.jsx';

export default function LearningSection() {
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