import React from 'react'

const Footer = () => {
    const year = new Date();
  return (
    <footer>
          <div>Copyright &copy; {year.getFullYear()} </div>
    </footer>
  )
}

export default Footer