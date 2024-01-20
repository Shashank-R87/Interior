import React from 'react'
import NavBar from '../components/NavBar'
import PortfolioTab from '../components/PortfolioTab'

function Projects() {
  return (
    <div style={{ height: "100vh"}}>
      <NavBar />
      <h1 style={{ padding: "40px 50px", display: 'flex', justifyContent: 'start', alignItems: 'start', flexDirection: 'column', gap: 20 }}>
        Explore our Portfolio
      </h1>   

      <div style={{ width: "100%", padding: "120px 120px 20px 50px", display: 'grid', gridTemplateColumns: "auto auto", gap: 25 }}>
        <PortfolioTab />
        <PortfolioTab />
        <PortfolioTab />
        <PortfolioTab />
      </div>
    </div>
    
  )
}

export default Projects