// Write your JS code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import Home from '../Home'
import About from '../About'
import Contact from '../Contact'
import './index.css'

class Header extends Component {
  render() {
    return (
      <div className="app-container">
        <nav className="navbar">
          <div className="logo-container">
            <img
              className="logo-wave"
              src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
              alt="wave"
            />
            <p className="wave-text">Wave</p>
          </div>
          <ul className="ul-options">
            <li>
              <Link className="options" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="options" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="options" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}
export default Header
