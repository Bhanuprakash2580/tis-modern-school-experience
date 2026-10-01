import Navigation from './components/layout/Navigation.jsx';
import Footer from './components/layout/Footer.jsx';
import { CustomCursor, ScrollProgress } from './components/animation/ScrollEffects.jsx';
import Hero from './components/sections/Hero.jsx';
import LearningSection from './components/sections/LearningSection.jsx';
import LearningPathsSection from './components/sections/LearningPathsSection.jsx';
import CampusSection from './components/sections/CampusSection.jsx';
import AdmissionsSection from './components/sections/AdmissionsSection.jsx';
import FAQSection from './components/sections/FAQSection.jsx';
import useTheme from './hooks/useTheme.js';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <Navigation theme={theme} onToggleTheme={toggleTheme} />
      <main id="top">
        <Hero />
        <LearningSection />
        <LearningPathsSection />
        <CampusSection />
        <AdmissionsSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}