import { ArrowUpRight } from 'lucide-react';
import { commonQuestions } from '../../data/homepage.js';
import { Reveal } from '../animation/ScrollEffects.jsx';

export default function FAQSection() {
  return (
    <section className="faq section-wrap" id="faq" aria-labelledby="faq-title">
      <Reveal className="faq-heading">
        <span className="eyebrow">A FEW THINGS FAMILIES ASK</span>
        <h2 id="faq-title">Good questions.<br /><em>Human answers.</em></h2>
        <p>Still wondering about something? The admissions team is happy to talk it through.</p>
        <a className="text-link" href="mailto:info@tis.edu.in?subject=Admissions%20enquiry">Email the admissions team <ArrowUpRight size={16} /></a>
      </Reveal>
      <div className="faq-list">
        {commonQuestions.map(({ question, answer }, index) => (
          <Reveal as="div" className="faq-item-wrap" delay={index * 0.06} key={question}>
            <details className="faq-item">
              <summary>{question}<span aria-hidden="true" /></summary>
              <p>{answer}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </section>
  );
}