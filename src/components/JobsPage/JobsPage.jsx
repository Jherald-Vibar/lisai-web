import { useEffect } from 'react'
import JobsHero from './JobsHero'
import OpenPositions from './OpenPositions'
import TrainingProgram from './TrainingProgram'
import BasicRequirements from './BasicRequirements'
import JoinFamily from './JoinFamily'

export default function JobsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <JobsHero />
      <OpenPositions />
      <TrainingProgram />
      <BasicRequirements />
      <JoinFamily />
    </>
  )
}
