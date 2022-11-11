import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import iconMenu from "../img/icon-menu.svg";
import iconMenuClose from "../img/icon-close-menu.svg";
import ToDo from "../img/icon-todo.svg";
import Calendar from "../img/icon-calendar.svg";
import Reminders from "../img/icon-reminders.svg";
import Planning from "../img/icon-planning.svg";

import MenuDropdown from './MenuDropdown';

//This component is for mobile screens
function SideBar(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button onClick={handleShow} className="burger-button me-2">
                <img src={iconMenu} alt="icon of the menu" />
            </Button>
            <Offcanvas placement={"end"} name={"end"} key={3} show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header className='sidebar-header' closeButton><img src={iconMenuClose} alt="icon" /></Offcanvas.Header>
                <Offcanvas.Body className='pt-0'>
                    <nav>
                        <ul className='nav-links'>
                            {props.list.map((element) => <li className='nav-item'>{element}</li>)}
                            <div className='nav-login nav-item row'>
                                <div className='btn-log text-center p-2 col-6 rounded'>Login</div>
                                <div className='btn-log border text-center p-2 col-6 rounded'>Register</div>
                            </div>
                        </ul>
                    </nav>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

//This component is for desktop screens
function NavBar(props) {
  return (
    <nav className="navbar">
        <ul className='nav-links d-flex'>
            {props.list.map((element) => <li className='nav-item d-flex align-items-center'>{element}</li>)}
            <div className='nav-login nav-item row'>
                <div className='btn-log text-center p-2 col-6 mx-auto text-center rounded'>Login</div>
                <div className='btn-log border text-center p-2 rounded'>Register</div>
            </div>
        </ul>
    </nav>
  )
}


export default function Nav() {
    const featuresImages = [ToDo, Calendar, Reminders, Planning]
    const featuresLinks = [ <MenuDropdown title="Features" links={["Todo List", "Calendar", "Reminders", "Planning"]} imgs={featuresImages}/>,
                            <MenuDropdown title="Company" links={["History", "Our Team", "Blog"]} imgs={[]} />,
                            <a href='/'>Careers</a>,
                            <a href='/'>About</a>,
                        ]
    //CSS makes one componente desapper according to the width of screen
    return (
        <>
            <SideBar className="sidebar" list={featuresLinks}  /> 
            <NavBar list={featuresLinks} />
            
        </>
    );
}
