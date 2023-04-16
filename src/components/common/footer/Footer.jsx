import React from "react"
import "./footer.css"

export default function Footer (){
  return (
    <>
      <footer>
        <div className='container'>
          <div className='box logo'>
            <img src='../images/logo.png' alt='' />
            <p>Incase you like our content, please consider giving a feedback.</p>
            <i className='fa fa-envelope'></i>
            <span> teamdailyed@gmail.com </span> <br />
            <i className='fa fa-headphones'></i>
            <span> +91 1234567890</span>
            <p>© all rights reserved</p>
          </div>

          <div className='box'>
            <h3>LABELS</h3>
            <ul>
              <li>
                <span>Boxing</span> <label>(5)</label>
              </li>
              <li>
                <span>Fashion</span> <label>(6)</label>
              </li>
              <li>
                <span>Health</span> <label>(7)</label>
              </li>
              <li>
                <span>Nature</span> <label>(9)</label>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

