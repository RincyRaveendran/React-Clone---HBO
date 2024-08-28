import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

import imgw from '../assets/scree.png'


function Header() {
  return (
    <>
    <div className='navo'> 
    <Navbar >
        <Navbar.Brand href=""><img className='logo' src="https://cdn.icon-icons.com/icons2/2845/PNG/512/hbo_logo_icon_181389.png" alt="" height={80} width={80} /> </Navbar.Brand>
        <Nav >
        <Nav.Link id='link' href="">SERIES</Nav.Link>
          <Nav.Link id='link' href="">MOVIES</Nav.Link>
          <Nav.Link id='link' href="">NEW & LAST CHANCE</Nav.Link>
          <Nav.Link id='link' href="">SCHEDULE</Nav.Link>
          <Nav.Link id='link' href="#">FREE EPISODES</Nav.Link>
        <NavDropdown id='link' title="MORE" >
        
            <NavDropdown.Item id='dropitem' href="">
              DOCUMENTARIES
            </NavDropdown.Item>
            <NavDropdown.Divider />
            
            <NavDropdown.Item id='dropitem' href="">
              SPECIALS
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item id='dropitem' href="">
              SPORTS
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item id='dropitem' href="">
              PODCASTS
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item id='dropitem' href="">
              MAX
            </NavDropdown.Item>
          
          </NavDropdown>
         
          
          <Button id='button1' className='fw-bold' variant="light">SIGN IN</Button>
          <button className='border-0' style={{height:'40px'}}> <img src={imgw} alt="" style={{height:'40px'}} /></button>
        </Nav>
     
    </Navbar>

    </div>
    </>    
  )
}

export default Header