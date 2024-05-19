import React from 'react'

const footer = () => {
  let footerStyle = {
    position: "relative",
    top: "20vh",
    width: "100%",
    color: "black",
    backgroundColor: "Black"
  }

  return (
    <footer className="text-light py-3 " style={footerStyle}>
      <p className="text-center">copyright &copy; MyTodosList.com</p>
    </footer>
  )
}

export default footer
