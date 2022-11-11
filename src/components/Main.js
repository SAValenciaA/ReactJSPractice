import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import clientAudiophile from '../img/clientAudiophile.svg'
import clientDatabiz from'../img/clientDatabiz.svg'
import clientMaker from'../img/clientMaker.svg'
import clientMeet from'../img/clientMeet.svg'

import imgDesktop from "../img/image-hero-desktop.png"

import { useEffect, useRef } from 'react';

export default function Main() {
  var mainImg = require("../img/image-hero-mobile.png")
  const businessesFeatured = [clientDatabiz, clientAudiophile, clientMeet, clientMaker]

  const mobileImg = useRef();
  const desktopImg = useRef();

  useEffect(() => {
    let resizeWindows = () => {
      if(window.innerWidth > 1200) {
        mobileImg.current.style.display = "none"
        desktopImg.current.style.display  = "block"
        window.addEventListener("resize", resizeWindows)
      } else {
        mobileImg.current.style.display = "block"
        desktopImg.current.style.display  = "none"
        window.addEventListener("resize", () => {})
      }
      console.log(window.innerWidth)
      window.addEventListener("resize", resizeWindows)
    }
    resizeWindows()
  }, [])

  return (
    <div className='main-container d-flex'>
      <Card className='main border-0 mx-auto'>
        <Card.Img ref={mobileImg} variant="top" src={mainImg} alt="decorative image" />
        <Card.Body className='main-body p-0 mt-4 row'>
          <Card.Title className='p-0'>
            <p className='main-title font-weight-bold text-center'>Make <br /> remote work</p>
          </Card.Title>
          <Card.Text className='main-p text-center p-0'>
              Get your team in sync, no matter your location. Streamline processes, 
              create team rituals, and watch productivity soar.
          </Card.Text>
          <Button className='main-btn d-flex mt-2 mb-5 col-12'><strong>Learn more</strong></Button>
          <div className='main-businesses-featured p-0 mx-auto col-12 d-flex justify-content-between'>
            {businessesFeatured.map((image) => 
              <div className='main-businesses-item'>
                <img className='main-businesses-img m-auto d-block mx-auto' src={image} alt="companies logos" />
              </div>
            )}
          </div>
        </Card.Body>
      </Card>
      <img ref={desktopImg} className='main-desktop-img mx-auto' src={imgDesktop} alt="" />
    </div>
  )
}
