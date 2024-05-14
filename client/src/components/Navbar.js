import { Link } from "react-router-dom";

function Navbar() {
    return(
        <nav>
        <Link to="/">Home</Link> 
        <Link to="/services">Services</Link> 
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
        </nav>
    );
}

export default Navbar;