import React from 'react'
import {Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn, 
    NavBtnLink
   } from './NavbarElements';

const Navbar = () => {
    return (
        <>
           <Nav>
               <NavLink to="/" >
               <img src="https://i.imgur.com/rKsvR29.png"  alt="LOGO" width="300" height="300" style={{ marginLeft: '-740px'}}/>
               </NavLink>
               <Bars />
                    <NavMenu>
                        <NavLink to="/about" activeStyle>
                            About Us
                        </NavLink>
                        <NavLink to="/jobs" activeStyle>
                            Jobs
                        </NavLink>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/login" activeStyle >Login</NavBtnLink>
                    </NavBtn>
            
           </Nav>
        </>
    )
}

export default Navbar