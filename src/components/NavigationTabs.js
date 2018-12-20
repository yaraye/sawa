import React from "react";
import { Link} from "react-router-dom";
import '../App.css';


const NavigationTabs = () => (
    <ul className="nav nav-tabs">
        <li className="nav-item">
            <Link to="/" className="nav-link active">Home</Link>
        </li>
        <li className="nav-item">
           <Link to="/about" className="nav-link">About</Link>
        </li>
        <li className="nav-item">
            <Link to="/project" className="nav-link">Projects</Link>
        </li>
        <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
        </li>
        <span>
        <li className="nav-item1" >
            <Link to="/signin" className="nav-link">Signin</Link>
        </li>
        </span>
       
    </ul>
)


export default NavigationTabs;