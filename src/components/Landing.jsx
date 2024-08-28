import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import imag from '../assets/imag.png'



function Landing() {
  return (
    <>
    <div id='landstart' style={{marginTop:'1px'}}>
      
      <div className='bgcontent' style={{marginTop:'1px'}}>
      <p style={{color:'white'}}>AVAILABLE NOW</p>
      <h1 className='fw-bold fs-1' style={{color:'white'}}>House of the Dragon</h1>
      <p style={{color:'white'}}>Based on George R.R. Martin’s <i>Fire & Blood, House of the Dragon</i> is set 200 years before the events of Game of Thrones and tells the story of House Targaryen.
      </p>
      <Button className='me-5' variant="primary"><FontAwesomeIcon icon={faPlay} /> WATCH THE TRAILER</Button>
      <Button variant="primary">FIND OUT MORE</Button>
      </div>  
    
    </div>

    <div>
      <div className="row">
        <h1 className='text-center mt-4 fw-bold'>Stream the Latest</h1>
        <div className="row mt-4">
          <div className="col-md-1"></div>
          <div className="col-md-10 d-md-flex">
            <div className="col-md-3 col-xs-12 me-4">
            <Card className='border-0 w-100'>
      <Card.Img variant="top" src="https://beam-images.warnermediacdn.com/2024-07/wild-wild-space-og-image-final.jpg?host=wbd-dotcom-drupal-prd-us-east-1.s3.amazonaws.com" style={{width:'250px', height:'150px'}} />
      <Card.Body>
        <Card.Title>
          <p className='ptag'>AVAILABLE NOW</p>
          <h5 className='titletag fw-bold'>WILD WILD SPACE</h5></Card.Title>
        <Card.Text className='descr me-5' style={{textAlign:'justify'}}>
         A modern day celestial land grab for low Earth orbit in a fast paced, high stakesrace of epic proportions.
        </Card.Text>
      </Card.Body>
    </Card>
            </div>
            <div className="col-md-3 me-4 col-xs-12 me-4">
            <Card className='border-0 w-100'>
      <Card.Img variant="top" src="https://static.cdn.turner.com/styles/header_image_1500x500_cropped/s3/2024-04/FD001_0.jpg?h=e4d3577c&itok=pyd8RFx4" style={{width:'250px', height:'150px'}} />
      <Card.Body>
        <Card.Title>
          <p className='ptag'>AVAILABLE NOW</p>
          <h5 className='titletag fw-bold'>FAYE</h5></Card.Title>
        <Card.Text className='descr me-5' style={{textAlign:'justify'}}>
        Hollywood legend Faye Dunaway candidly discusses the triumphs and challenges of her illustrious career in this intimate portrait.
        </Card.Text>
      </Card.Body>
    </Card>
            </div>
            <div className="col-md-3 me-4 col-xs-12 me-4">
            <Card className='border-0 w-100'>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVriThwO7E76wB-RKeh3p4cfNEY66K5U94WA&s" style={{width:'250px', height:'150px'}} />
      <Card.Body>
        <Card.Title>
          <p className='ptag'>AVAILABLE NOW</p>
          <h5 className='titletag fw-bold'>Quad Gods</h5></Card.Title>
        <Card.Text className='descr me-5' style={{textAlign:'justify'}}>
         Follow the first quadriplegic e-sports team as they compete in the billion-dolor video gaming world while subverting ssumptions about disability
        </Card.Text>
      </Card.Body>
    </Card>
            </div>
            <div className="col-md-3 col-xs-12 me-4 ">
            <Card className='border-0 w-100'>
      <Card.Img variant="top" src="https://static.hbo.com/2024-06/hard-knocks-offseason-ny-giants-version-A-ka-1920.jpg" style={{width:'250px', height:'150px'}} />
      <Card.Body>
        <Card.Title>
          <p className='ptag'>AVAILABLE NOW</p>
          <h5 className='titletag fw-bold'>Hard Knocks: Offseason with the New York Giants</h5></Card.Title>
        <Card.Text className='descr me-5' style={{textAlign:'justify'}}>
        Go inside the New York Giants as they prepare for their highly anticipated 100th season
        </Card.Text>
      </Card.Body>
    </Card>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
        
      </div>
    </div>


    <div className=' bluecol mt-5 p-5'>
      <div className="row">
        <div className="col-md-8 d-md-flex">
          <div className="col-md-1"></div>
          <div className="col-md-3">
          <img  src="https://static.hbo.com/2024-07/house-of-the-dragon-mid-season-2.jpg" alt="" style={{height:'400px', width:'250px'}}/>
       
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-3">
          <img src="https://static.hbo.com/2024-07/sporanos-max-banner-vanilla-2x3.jpg" alt="" style={{height:'400px', width:'250px'}}/>
       
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-3">
          <img src="https://static.hbo.com/2024-03/TheLastofUs_2560x3840-c.jpg" alt="" style={{height:'400px', width:'250px'}} />
  
          </div>
        </div>
        

        <div className="col-md-4 text-center">
        <img className='mt-4' src={imag} alt="" style={{height:'100px', width:'250px'}} />
          <p className='fs-1 mt-5' style={{color:'white', marginTop:'1px'}}>It's All Here</p>
          <button className='btn btn-light fw-bold border-rounded px-4'> SIGN UP NOW</button>

        </div>
      </div>
      
    </div>

    <div className="row">
      <h1 className='text-center mt-5 mb-5 fw-bold'>Coming Soon to HBO</h1>
      <div className="col-md-1"></div>
      <div className="col-md-5">
        <img src="https://static.hbo.com/2024-07/industry_s3_teaser.png" alt="" style={{height:'350px', width:'600px'}}/>
        <p style={{marginBottom:'3px'}}>PREMIERES AUGUST 11 AT 9PM</p>
        <h5 className='fw-bold'>Industry</h5>
        <p>Young bankers forge their identities within the sex and drug-fueled-pressure-cooker of international high finance</p>
      </div>
      <div className="col-md-5">
       <img src="https://static.hbo.com/2023-04/KnightOfTheSevenKingdoms_16x9_texted.jpg?w=1200" alt="" style={{height:'350px', width:'600px'}}/>
       <p style={{marginBottom:'3px'}}>COMING SOON</p>
       <h5 className='fw-bold'>A Knight of the Seven Kingdoms: The Hedge Knight</h5>
       <p>A century before the events of Game of Thrones, there was Ser duncan the Tail and his Squire, Egg</p>
        </div>
      <div className="col-md-1"></div>
    </div>

    <div className="footerbanner mt-5">
     <div className='foot'>
     <img src={imag} alt="" style={{height:'120px', width:'200px'}} />
     </div>
     <div className='foot2'>
     <h3 className='fw-bold' style={{color:'white', marginTop:'2px'}}>THE ONE TO WATCH</h3>
     <p style={{color:'white', marginTop:'2px', fontSize:'20px'}}>Stream all of HBO, plus hit series, movies, reality, and more.</p>
     <button className='btn btn-light fw-bold border-0 rounded' style={{color:'black'}}>SIGN UP NOW</button>
     </div>
  
    </div>
    </>
  )
}

export default Landing