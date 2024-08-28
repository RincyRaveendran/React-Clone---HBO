import React from 'react'
import hbo from '../assets/hbo.png'

function Footer() {
  return (
    <>
    <div className='footermain'>
     <div className='text-center p-3'>
     <img src={hbo} alt="" style={{height:'80px', width:'100px'}} />
     </div>
    <div className='d-flex align-items-center justify-content-center mt-3' style={{color:'white'}}>
      <p className='me-4'>ABOUT</p>
      <p className='me-4'>GET HBO</p>
      <p className='me-4'>HELP</p>
      <p className='me-4'>SHOP</p>
      <p className='me-4'>CAREERS</p>
      <p className='me-4'>HBO INSPIRES</p>
      <p className='me-4'>HOW TO WATCH MAX</p>
    
    </div>
    <div className='d-flex align-items-center justify-content-center mt-1' style={{color:'white', fontSize:'15px'}}>
      <p className='me-4'>Privacy Policy</p>
      <p className='me-4'>Terms of Use</p>
      <p className='me-4'>Ad Choices</p>
      <p className='me-4'>Cookie Settings</p>

    </div>
    <div className='text-center' style={{color:'white', fontSize:'15px',paddingBottom:'20px'}}>
      <p style={{marginBottom:'1px'}}>© 2024 Home Box Office, Inc. All Rights Reserved.</p>
      <p >This website may contain mature content</p>
    </div>


    </div>
    </>
  )
}

export default Footer