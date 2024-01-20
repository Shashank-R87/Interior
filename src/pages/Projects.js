import React, { useEffect } from 'react'
import NavBar from '../components/NavBar'
import PortfolioTab from '../components/PortfolioTab'
import Footer from '../components/Footer'

const details = [{ name: 'Our Services', tags: ["UX Design", "UI Design", "Branding"] },
{ name: 'Project Quizzard', tags: ["UI Design"] },
{ name: 'Weather App Desgin', tags: ["UX Design"] },
{ name: 'JobSnap', tags: ["UX Design", "Branding"] },
{ name: 'Crypto Wallet', tags: ["UX Design", "UI Design"] },
{ name: 'Homelogy', tags: ["Branding"] },]

function Projects() {

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" })
  }, [])

  return (
    <div>
      <NavBar />
      <h1 style={{ padding: "50px 50px", display: 'flex', justifyContent: 'start', alignItems: 'start', flexDirection: 'column', fontWeight: 600, fontSize: 48 }}>
        Explore our Portfolio
      </h1>

      <div style={{ padding: "40px 50px", paddingBottom: 100 }}>
        <div style={{ width: "100%", display: 'grid', gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          {
            details?.map((item) =>
              <PortfolioTab details={item} />
            )
          }
        </div>
      </div>
      <Footer />
    </div>

  )
}

export default Projects