import '../styles/Header.css'
import logo from '../images/logo.png'

export const Header = () => {
  return (
    <div className="header">
      
      <img src={logo} alt='Logo'/>
      
      <div className="header-right">
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">The App</a>
        <a href="#">FAQs</a>
        <a href="#">Footer</a>
      </div>
    </div>
  )
}