import { useEffect } from 'react'
import ContactHero from './ContactHero'
import ContactInfo from './ContactInfo'
import DepartmentContacts from './DepartmentContacts'
import FollowUs from './FollowUs'

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <ContactHero />
      <ContactInfo />
      <DepartmentContacts />
      <FollowUs />
    </>
  )
}
