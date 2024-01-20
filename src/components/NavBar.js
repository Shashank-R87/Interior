import React from 'react'

function NavBar({currentPath}) {
  return (
    <div style={{position: "sticky", backgroundColor: '#e9e9e9', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: "10px 50px", top: 0}}>
        <div>
            <h1 style={{fontWeight: 600, fontSize: 24}}>Interior</h1>
        </div>
        <div style={{display: "flex", justifyContent: 'center', alignItems: 'center', gap: 30}}>
            <a className={currentPath==='/home'? "current": ""} href='/home'>Home</a>
            <a className={currentPath==='/projects'? "current": ""} href='/projects'>Projects</a>
            <a className={currentPath==='/contact'? "current": ""} href='/contact'>Contact</a>
        </div>
        <div style={{display: "flex", justifyContent: 'center', alignItems: 'center', gap: 30}}>
            <p>Search</p>
            <p>Cart (0)</p>
        </div>
    </div>
  )
}

export default NavBar