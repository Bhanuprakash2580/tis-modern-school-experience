import { ArrowDown, ArrowUpRight } from 'lucide-react';
import ActionLink from '../ui/ActionLink.jsx';

const campusImage = 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=2200&q=90';

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <img className="hero-image" src={campusImage} alt="The green campus of Tulas International School in Dehradun" fetchPriority="high" />
      <div className="hero-shade" />
      <div className="hero-content">
        <span className="hero-kicker"><span className="live-dot" /> A school with room to grow</span>
        <h1 id="hero-title">A place to belong.<br /><em>A future to become.</em></h1>
        <p>Good things happen when young people feel at home in the world, and in themselves.</p>
        <div className="hero-actions">
          <ActionLink href="#admissions">Find your place <ArrowUpRight size={17} /></ActionLink>
          <a className="hero-link" href="#approach">Get to know Tulas <ArrowDown size={15} /></a>
        </div>
      </div>
      <div className="hero-caption">
        <span>CBSE BOARDING & DAY SCHOOL</span>
        <span>DEHRADUN, INDIA</span>
      </div>
      <a className="hero-side-link" href="#campus" aria-label="Explore campus life"><span>EXPLORE CAMPUS</span><ArrowDown size={15} /></a>
    </section>
  );
}