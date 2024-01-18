import React from 'react'
import arrow from "../assets/arrow.png"

function Footer() {
    return (
        <div style={{ backgroundColor: "#e9e9e9", display: 'flex', justifyContent: 'center', alignItems: "center", flexDirection: 'column', padding: "40px 50px 20px 50px", gap: 60 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', width: "100%" }}>
                <div>
                    <h1>Interior</h1>
                </div>
                <div style={{display: 'flex',  justifyContent: "space-between", minWidth: 600}}>
                    <div style={{display: 'flex', flexDirection: "column", gap: 10}}>
                        <p style={{fontSize: 13}}>Connect with</p>
                        <div>
                            <p>Instagram</p>
                            <p>Facebook</p>
                            <p>Pinterest</p>
                            <p>YouTube</p>
                        </div>
                    </div>
                    <div style={{display: 'flex', flexDirection: "column", gap: 10}}>
                        <p style={{fontSize: 13}}>Services</p>
                        <div>
                            <p>Contact Us</p>
                            <p>Track Your Order</p>
                            <p>FAQs</p>
                            <p>Privacy Policy</p>
                        </div>
                    </div>
                    <div style={{display: 'flex', flexDirection: "column", gap: 10}}>
                        <p style={{fontSize: 13}}>About Us</p>
                        <div>
                            <p>Our Story</p>
                            <p>Careers</p>
                            <p>Press</p>
                        </div>
                    </div>
                </div>
                <div style={{display: 'flex' ,paddingTop: 10, alignItems: 'center'}}>
                    <p style={{fontSize: 13}}>Currency</p>
                    <img style={{width: 20, height: 20}} src={arrow}/>
                </div>
            </div>
            <div>
                <p style={{fontSize: 13}}>Designed by Interior Showcase</p>
            </div>
        </div>
    )
}

export default Footer