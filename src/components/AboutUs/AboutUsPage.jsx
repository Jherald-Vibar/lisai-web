import AboutHero from './AboutHero'
import TheStory from './Thestory'
import OurJourney from './Ourjourney'
import IndustriesServed from './IndustriesServed'
import FAQ from './FAQ'

export default function AboutUsPage() {
  return (
    <div className="font-sans">
      <AboutHero />
      <TheStory />
      <OurJourney />
      <FAQ />
    </div>
  )
}