import '../styles/Header.css'
import logo from '../images/logo.png'

export const Header = () => {
  return (
    <div className="header">
      
      <img src={logo} alt='Logo'/>
      
      <div className="header-right">
        <a href="#home">Home</a>
        <a href="#home">About Us</a>
        <a href="#home">The App</a>
        <a href="#home">FAQs</a>
        <a href="#home">Footer</a>
      </div>
    </div>
  )
}