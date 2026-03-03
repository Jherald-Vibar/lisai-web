import { useEffect } from 'react';
import AboutHero from './AboutHero'
import TheStory from './Thestory'
import OurJourney from './Ourjourney'
import FAQ from './FAQ'

export default function AboutUsPage() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans">
      <AboutHero />
      <TheStory />
      <OurJourney />
      <FAQ />
    </div>
  )
}
