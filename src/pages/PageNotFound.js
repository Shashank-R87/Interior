import React from 'react'

function PageNotFound() {
  return (
    <div style={{height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: 'column', gap: 5, backgroundColor: "#ff4545"}}>
      <h1 style={{color: "white"}}>Oops..</h1>
      <p style={{color: "white"}}>The page you are searching for doesn't exist</p>
    </div>
  )
}

export default PageNotFound