import Header from '../components/Header.jsx';
import Hero from '../components/Hero.jsx';
import AboutSection from '../components/AboutSection.jsx';
import PerksSection from '../components/PerksSection.jsx';
import EligibilitySection from '../components/EligibilitySection.jsx';
import TimelineSection from '../components/TimelineSection.jsx';
import ApplicationForm from '../components/ApplicationForm.jsx';
import FaqSection from '../components/FaqSection.jsx';
import Footer from '../components/Footer.jsx';

export default function FanFestPage() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <AboutSection />
        <PerksSection />
        <EligibilitySection />
        <TimelineSection />
        <ApplicationForm />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
