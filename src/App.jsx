import { ArrowUpRight, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import Navigation from './components/layout/Navigation.jsx';
import { CustomCursor, ScrollProgress } from './components/animation/ScrollEffects.jsx';
import Hero from './components/sections/Hero.jsx';
import { LearningSection, CampusSection, AdmissionsSection } from './components/sections/StorySections.jsx';

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-top">
        <div className="footer-invite">
          <span className="eyebrow eyebrow-light">YOUR NEXT CHAPTER STARTS HERE</span>
          <h2>Come see what<br /><em>you can become.</em></h2>
          <a className="button button-coral" href="mailto:info@tis.edu.in?subject=Admissions%20enquiry">
            Talk to admissions <ArrowUpRight size={17} />
          </a>
        </div>
        <div className="footer-details">
          <a href="https://maps.google.com/?q=Tulas+International+School+Dehradun" target="_blank" rel="noreferrer">
            <MapPin size={17} /> Dhoolkot, Chakrata Road<br />Dehradun, Uttarakhand 248011
          </a>
          <a href="tel:+919458319102"><Phone size={16} /> +91 94583 19102</a>
          <a href="mailto:info@tis.edu.in"><Mail size={16} /> info@tis.edu.in</a>
          <a href="https://www.instagram.com/tulasinternationalschool/" target="_blank" rel="noreferrer"><Instagram size={16} /> Follow along</a>
        </div>
      </div>
      <div className="footer-bottom">
        <a className="brand brand-footer" href="#top" aria-label="Tulas International School home">
          <span className="brand-mark">T</span>
          <span className="brand-name">TULAS <small>INTERNATIONAL SCHOOL</small></span>
        </a>
        <span>Dehradun, India · CBSE · Classes 4–12</span>
        <a href="https://tis.edu.in/" target="_blank" rel="noreferrer">Visit TIS online <ArrowUpRight size={14} /></a>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <Navigation />
      <main id="top">
        <Hero />
        <LearningSection />
        <CampusSection />
        <AdmissionsSection />
      </main>
      <Footer />
    </>
  );
}