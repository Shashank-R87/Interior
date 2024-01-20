import React from 'react'
import NavBar from '../components/NavBar'
import PortfolioTab from '../components/PortfolioTab'
import Footer from '../components/Footer'

function Projects() {
  return (
    <div>
      <NavBar />
      <h1 style={{ padding: "50px 50px", display: 'flex', justifyContent: 'start', alignItems: 'start', flexDirection: 'column', fontWeight: 600, fontSize: 48 }}>
        Explore our Portfolio
      </h1>

      <div style={{padding: "40px 50px", paddingBottom: 100}}>
        <div style={{ width: "100%", display: 'grid', gridTemplateColumns: "auto auto", gap: 20 }}>
          <PortfolioTab projectID={"Project 1"} />
          <PortfolioTab />
          <PortfolioTab />
          <PortfolioTab />
        </div>
      </div>
      <Footer />
    </div>

  )
}

export default Projects