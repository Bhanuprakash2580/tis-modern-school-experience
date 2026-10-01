import { ArrowUpRight, Trees } from 'lucide-react';
import { Reveal } from '../animation/ScrollEffects.jsx';

export default function CampusSection() {
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