import React from 'react'

function PageNotFound() {
  return (
    <div style={{height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: 'column', gap: 5, backgroundColor: "white"}}>
      <h1 style={{color: "#ff5733"}}>Oops..</h1>
      <h3 style={{color: "#ff5733"}}>The page you are searching for doesn't exist</h3>
    </div>
  )
}

export default PageNotFound