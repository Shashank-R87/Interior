import React, { useState } from 'react'
import interiorSample from "../assets//images/imteriorsample.jpg"

function ProjectTab() {

    const [hovering, setHovering] = useState(false);

    return (
        <div onMouseOver={() => { setHovering(true) }} onMouseOut={() => { setHovering(false) }} style={{ backgroundImage: `url(${interiorSample}) `, backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", objectFit: 'cover', display: 'flex', borderRadius: 10, justifyContent: 'center', alignItems: 'center', height: 400, overflow: 'hidden', cursor: "pointer", boxShadow: hovering ? "inset 0 0 0 2000px rgba(0, 0, 0, 0.3)" : "", transition: "ease-in-out", transitionDuration: "500ms" }}>
            {hovering ?
                <p style={{ width: 100, backgroundColor: 'black', padding: 10, color: 'white', borderRadius: 10 }}>View Details</p> :
                <p style={{ width: 100, padding: 10 }}></p>
            }
        </div>
    )
}

export default ProjectTab