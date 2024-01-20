import React, { useState } from 'react'
import Kitchen_interior from "../assets//images/Kitchen_interior.jpg"
import { useNavigate } from 'react-router-dom';

function PortfolioTab({projectID}) {

    const navigate = useNavigate();

    const [hovering, setHovering] = useState(false);

    return (
        <div onMouseOver={() => { setHovering(true) }} onMouseOut={() => { setHovering(false) }} style={{ backgroundImage: `url(${Kitchen_interior}) `, backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", objectFit: 'cover', display: 'flex', borderRadius: 10, justifyContent: 'center', alignItems: 'center', height: 400, overflow: 'hidden', cursor: "pointer", boxShadow: hovering ? "inset 0 0 0 2000px rgba(0, 0, 0, 0.3)" : "", transition: "ease-in-out", transitionDuration: "500ms" }}>
            {hovering ?
                <button onClick={() => { navigate("/getProject", { state: { data: projectID } }) }} style={{ width: 100, backgroundColor: 'black', padding: 10, color: 'white', borderRadius: 10, border: 0, cursor: "pointer" }}>View Details</button> :
                <p style={{ width: 100, padding: 10 }}></p>
            }
        </div>
    )
}

export default PortfolioTab