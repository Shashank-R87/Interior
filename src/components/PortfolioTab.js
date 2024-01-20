import React, { useState } from 'react'
import Kitchen_interior from "../assets//images/Kitchen_interior.jpg"
import { useNavigate } from 'react-router-dom';

function PortfolioTab({ details }) {

    const navigate = useNavigate();

    const [hovering, setHovering] = useState(false);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: "100%" }}>
            <div onMouseOver={() => { setHovering(true) }} onMouseOut={() => { setHovering(false) }} style={{ backgroundImage: `url(${Kitchen_interior}) `, backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", objectFit: 'cover', display: 'flex', borderRadius: 10, justifyContent: 'center', alignItems: 'center', height: 400, overflow: 'hidden', cursor: "pointer", boxShadow: hovering ? "inset 0 0 0 2000px rgba(0, 0, 0, 0.3)" : "", transition: "ease-in-out", transitionDuration: "500ms" }}>
                {hovering ?
                    <button onClick={() => { navigate("/getProject", { state: { data: details } }) }} style={{ width: 100, backgroundColor: 'black', padding: 10, color: 'white', borderRadius: 10, border: 0, cursor: "pointer" }}>View Details</button> :
                    <p style={{ width: 100, padding: 10 }}></p>
                }
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <p style={{ fontSize: 18 }}>{details.name}</p>
                <div  style={{ display: 'flex', gap: 10 }}>
                    {details.tags?.map((item) =>
                        <p style={{padding: "5px 10px", backgroundColor: "#e9e9e9", borderRadius: 5, fontSize: 13}}>{item}</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default PortfolioTab