import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { learningPaths } from '../../data/homepage.js';
import { Reveal } from '../animation/ScrollEffects.jsx';

export default function LearningPathsSection() {
  const [activePath, setActivePath] = useState(learningPaths[0]);

  return (
    <section className="learning-paths" id="learning-paths" aria-labelledby="paths-title">
      <Reveal className="paths-heading">
        <span className="eyebrow">FIND YOUR WAY AT TULAS</span>
        <h2 id="paths-title">One school.<br /><em>Many ways to grow.</em></h2>
      </Reveal>
      <div className="paths-explorer">
        <div className="path-tabs" role="tablist" aria-label="Explore school experiences">
          {learningPaths.map((path) => (
            <button
              className={`path-tab${activePath.id === path.id ? ' is-active' : ''}`}
              type="button"
              role="tab"
              id={`tab-${path.id}`}
              aria-selected={activePath.id === path.id}
              aria-controls="path-panel"
              key={path.id}
              onClick={() => setActivePath(path)}
            >
              {path.label}
            </button>
          ))}
        </div>
        <div className="path-panel" id="path-panel" role="tabpanel" aria-labelledby={`tab-${activePath.id}`}>
          <span className="path-detail">{activePath.detail}</span>
          <h3>{activePath.title}</h3>
          <p>{activePath.description}</p>
          <a className="text-link" href="#admissions">Ask us about {activePath.label.toLowerCase()} <ArrowUpRight size={16} /></a>
        </div>
      </div>
    </section>
  );
}