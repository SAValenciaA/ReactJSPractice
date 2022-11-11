import { useState, useRef, useEffect } from 'react';

import iconUp from "../img/icon-arrow-up.svg"

export default function MenuDropdown(props) {
  
  const [show, setShow] = useState(false)
  const dropdownRef = useRef()
  const dropDisplay = useRef()
  const dropArrow = useRef()

  const [isDesktop, desktopIs] = useState();
  
  useEffect(() => {
    const resizeWindows = () => {
      if(window.innerWidth > 1100) {
        desktopIs(true)
        dropdownRef.current.style.overflow = "visible"
        dropDisplay.current.style.opacity = 0
        window.addEventListener("resize", resizeWindows)
      } else {
        desktopIs(false)
        dropdownRef.current.style.overflow = "hidden"
        dropDisplay.current.style.opacity = 1
      }
    }
    resizeWindows()
  }, [])

  useEffect(() => {
    const drop = dropdownRef.current
    if(show && !isDesktop) {

      drop.style.animationName = "dropdown-display"
      drop.style.height = "210px"

      dropArrow.current.style.transitionDuration = "0.5s"
      dropArrow.current.style.transform = "rotate(180deg)"

    } else if(!show && !isDesktop) {

      drop.style.animationName = "dropdown-undisplay"
      drop.style.height = "30px"

      dropArrow.current.style.transform = "rotate(0deg)"
      
    }
    if(isDesktop) {
      dropDisplay.current.style.transitionDuration = "0.5s"
      dropDisplay.current.style.opacity = show ? 1 : 0

      dropArrow.current.style.transitionDuration = "0.5s"
      dropArrow.current.style.transform = show ? "rotate(180deg)" : "rotate(0deg)"
    }
  }, [show])


  return (
    <div ref={dropdownRef} className={(show ? "show" : "") + " dropdown " + props.title}>
      <div className='dropdown-title d-flex align-items-center' onClick={() => setShow(!show)}>
        {props.title} 
        <img ref={dropArrow} className='arrow-icon' src={iconUp} alt="icon" />
      </div>
      <ul ref={dropDisplay} className='dropdown-display p-0'>
        {props.links.map((element, idx) => 
          <li className='dropdown-display-item' key={idx}>
            {props.imgs.length > 0 ? <img className='dropdown-icon' src={props.imgs[idx]} alt="icon" /> : ""}
            {element}
          </li>
        )}
      </ul>
    </div>
  )
}
