import React from 'react'

const Footer = () => {
  let footerStyle = {
    position: "relative",
    top: "10vh",
    width: "100%"
  }
  return (
    <footer className="bg-1 text-center text-lg-start">
        <div className="text-center p-3">
            © 2024 Copyright:
            <a className="text-dark" href="#">MyTodosList.com</a>
        </div>
    </footer>
  )
}

export default Footer
