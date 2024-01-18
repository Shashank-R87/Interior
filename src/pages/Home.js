import React from 'react'
import NavBar from '../components/NavBar'
import home from "../assets/home.png"
import puzzle from "../assets/puzzle.png"
import bag from "../assets/bag.png"
import paint from "../assets/paint.png"
import write from "../assets/write.png"
import home_main from "../assets//images/home_main.jpg"
import people_group from "../assets//images/people_group.jpg"
import ProjectTab from '../components/ProjectTab'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
      <NavBar />
      <div style={{ display: "flex", flexDirection: 'column' }}>
        <div style={{ padding: "0px 50px", display: "flex", gap: 5, justifyContent: 'start', alignItems: 'center', paddingTop: 40 }}>
          <img src={home} style={{ width: 18, height: 18 }} />
          <p>Welcome to InteriorShowcase</p>
        </div>
        <div style={{ padding: "25px 50px", display: 'flex', gap: 10, justifyContent: "space-between", alignItems: 'end', paddingBottom: 50 }}>
          <p style={{ fontWeight: 600, fontSize: 48, lineHeight: 1.1 }}>We are a passionate team of interior designers with over 10 years of experience.</p>
          <p style={{ textAlign: 'right', fontSize: 14 }}>Explore our portfolio and get inspired by our stunning interior designs. We are evailable for freelance projects, so feel free to reach out to us.</p>
        </div>
        <div style={{ padding: "0px 50px" }}>
          <img src={home_main} style={{ width: "100%", borderRadius: 10, objectFit: "cover", height: 750 }} />
        </div>
        <div style={{ padding: "50px 50px", display: 'flex', justifyContent: 'space-evenly' }}>
          <div>
            <h1>1000+</h1>
            <p style={{ maxWidth: 100 }}>Projects Completed</p>
          </div>
          <div>
            <h1>10+</h1>
            <p style={{ maxWidth: 100 }}>Years of Experience</p>
          </div>
          <div>
            <h1>12</h1>
            <p style={{ maxWidth: 100 }}>Design Awards</p>
          </div>
          <div>
            <h1>69</h1>
            <p style={{ maxWidth: 100 }}>Satisfied Clients</p>
          </div>
        </div>
        <div style={{ padding: "40px 50px", backgroundColor: 'black', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <p style={{ color: 'white', fontStyle: "italic" }}>// Client Testimonial</p>
            <p style={{ color: 'white', fontWeight: 600, fontSize: 32, lineHeight: 1.1, maxWidth: "60%" }}>"We were blown away by the exceptional
              interior designs created by the
              InteriorShowcase team. Their attention to</p>
            <p style={{ color: 'white' }}>Markus Sugarberg, CEO of Feta</p>
          </div>
          <div>
            <img style={{ width: 200, height: 200, objectFit: "cover", borderRadius: "100%" }} src={people_group} />
          </div>
        </div>
        <div style={{ padding: "40px 50px", display: 'flex', justifyContent: 'start', alignItems: 'start', flexDirection: 'column', gap: 20 }}>
          <p style={{ fontStyle: "italic" }}>// Our Services</p>
          <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', width: "100%" }}>
            <div style={{ display: 'flex', gap: 15, justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ backgroundColor: 'black', display: 'flex', padding: 15, borderRadius: 15 }}>
                <img src={puzzle} />
              </div>
              <p style={{ fontSize: 32, fontWeight: 300 }}>Interior</p>
              <img src={write} style={{ width: 20, height: 20, paddingBottom: 30 }} />
            </div>
            <div style={{ display: 'flex', gap: 15, justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ backgroundColor: 'black', display: 'flex', padding: 15, borderRadius: 15 }}>
                <img src={bag} />
              </div>
              <p style={{ fontSize: 32, fontWeight: 300 }}>Furniture</p>
              <img src={write} style={{ width: 20, height: 20, paddingBottom: 30 }} />
            </div>
            <div style={{ display: 'flex', gap: 15, justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ backgroundColor: 'black', display: 'flex', padding: 15, borderRadius: 15 }}>
                <img src={paint} />
              </div>
              <p style={{ fontSize: 32, fontWeight: 300 }}>Colors</p>
              <img src={write} style={{ width: 20, height: 20, paddingBottom: 30 }} />
            </div>
          </div>
        </div>
        <div style={{ padding: "40px 50px", display: 'flex', justifyContent: 'start', alignItems: 'start', flexDirection: 'column', gap: 20 }}>
          <p style={{ fontStyle: "italic" }}>// Our Work</p>
          <div style={{ width: "100%", display: 'grid', gridTemplateColumns: "auto auto", gap: 20 }}>
            <ProjectTab projectID={"Project 1"}/>
            <ProjectTab projectID={"Project 2"}/>
            <ProjectTab projectID={"Project 3"}/>
            <ProjectTab projectID={"Project 4"}/>
          </div>
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: "100%"}}>
            <p style={{backgroundColor: "#e9e9e9", padding: "10px 30px", borderRadius: 10, fontSize: 14}}>View More Projects</p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home