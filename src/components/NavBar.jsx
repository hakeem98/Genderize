import React  from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'
import { BiUserCircle } from 'react-icons/bi'


const NavBar = ({ theme , toggleTheme}) => {
  return (
    <div>
      <ul className='Outer-list'>
        <li className='logo'>Gendrize.io</li>
        <li>
          <ul className='innerList'>
            <li className={`innerItem ${theme}`}>Home</li>
            <li className={`innerItem ${theme}`}>Jokes</li>
            <li className={`innerItem ${theme}`}>About</li>
          </ul>
        </li>
        <li>
          <div className='switchButton'>
            { theme === "light" ?
            <BsMoon className='moon' onClick={toggleTheme}/> 
            : <BsSun className={`sun  ${theme}`} onClick={toggleTheme}/>}
            <div className="profile">
              <p className="user">AbdulHakeem Mohammed</p>
              <BiUserCircle id="user-icon"/>
            </div>
          </div>
          
        </li>
      </ul>
    </div>
  )
}

export default NavBar