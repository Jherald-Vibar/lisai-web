import AboutHero from './AboutHero'
import TheStory from './TheStory'
import StatsBar from './StatsBar'
import OurJourney from './OurJourney'
import IndustriesServed from './IndustriesServed'
import FAQ from './FAQ'

export default function AboutUsPage() {
  return (
    <div className="font-sans">
      <AboutHero />
      <TheStory />
      <StatsBar />
      <OurJourney />
      <IndustriesServed />
      <FAQ />
    </div>
  )
}