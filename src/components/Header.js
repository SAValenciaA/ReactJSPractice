import Nav from "./NavBar"
import mainLogo from "../img/logo.svg"

export default function Header() {
  return (
    <div className="header d-flex justify-content-start">
        <img className="main-logo h-75 my-4 mx-3" src={mainLogo} alt="logo" />
        <Nav />
    </div>
  )
}
