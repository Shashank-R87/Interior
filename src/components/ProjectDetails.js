import React from 'react'
import NavBar from './NavBar'
import { useLocation } from 'react-router-dom'
import Footer from './Footer';

function ProjectDetails() {

    const location = useLocation();

    return (
        <div>
            <NavBar />
            <div style={{ padding: "40px 50px", display: 'flex', justifyContent: 'space-between', alignItems: 'start', gap: 50, paddingTop: 100 }}>
                <div style={{ display: 'flex', gap: 10 }}>
                    <div style={{ display: 'flex', flexDirection: "column", gap: 10 }}>
                        <img style={{ width: 100, height: 150, objectFit: 'cover', borderRadius: 10 }} src='https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                        <img style={{ width: 100, height: 150, objectFit: 'cover', borderRadius: 10 }} src='https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                        <img style={{ width: 100, height: 150, objectFit: 'cover', borderRadius: 10 }} src='https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                    </div>
                    <img style={{ width: 600, height: 470, objectFit: 'cover', borderRadius: 20 }} src='https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                </div>
                <div style={{ display: 'flex', justifyContent: "space-evenly", width: "100%", alignItems: 'start', flexDirection: 'column', minHeight: 470 }}>
                    <p style={{ backgroundColor: 'black', padding: "10px 20px", color: 'white', borderRadius: 10, boxShadow: 0, border: 0, fontSize: 14 }}>View Details</p>
                    <h1 style={{ fontWeight: 400, fontSize: 32, paddingTop: 40 }}>Project Name</h1>
                    <h1 style={{ fontWeight: 400, fontSize: 48, paddingBottom: 40 }}>{location.state.data}</h1>
                    <div style={{ display: 'flex', gap: 40, justifyContent: 'center', alignItems: 'center', width: "100%" }}>
                        <p>Quantity</p>
                        <p style={{ backgroundColor: "#e9e9e9", padding: "10px 20px", flexGrow: 1, textAlign: "center", borderRadius: 5 }}>- 1 +</p>
                    </div>
                    <div style={{ display: 'flex', gap: 40, justifyContent: 'center', alignItems: 'center', width: "100%" }}>
                        <p style={{ backgroundColor: "black", color: 'white', padding: "10px 20px", flexGrow: 1, textAlign: "center", borderRadius: 5 }}>Add to Cart</p>
                    </div>
                </div>
            </div>
            <div style={{ padding: "40px 50px", display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 30, paddingTop: 150, width: "100%", flexDirection: "column", paddingBottom: 100 }}>
                <p style={{fontWeight: 400, fontSize: 18}}>Subscribe to Our Newsletter</p>
                <div style={{display: 'flex', gap: 10, width: "30%", justifyContent: 'center'}}>
                    <p style={{backgroundColor: "#e9e9e9", padding: "5px 10px", borderRadius: 5, flexGrow: 1}}>Enter your email here</p>
                    <p style={{backgroundColor: "black",color: 'white', padding: "5px 20px", borderRadius: 5}}>Subscribe</p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default ProjectDetails