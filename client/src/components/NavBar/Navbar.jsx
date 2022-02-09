import React from "react";
import {Link} from "react-router-dom";
import logo from "../../assets/logo.png";
import search from "../../assets/search.svg";
import Avatar from "../../components/Avatar/Avatar"
import './Navbar.css'

const Navbar = () =>{
    var User = null;
    return (
        <nav>
            <div className="navbar">
                <Link to='/' className="nav-item nav-logo">
                <img src={logo} alt="logo" />
                </Link>
                <Link to='/' className="nav-item nav-btn">About</Link>
                <Link to='/' className="nav-item nav-btn">Products</Link>
                <Link to='/' className="nav-item nav-btn">For Teams</Link>
                <form>
                    <input type="text" placeholder="Search.."/>
                    <img src={search} alt="search" width="18px" className='search-icon' />
                </form>
                { User === null ? 
                <Link to='/Auth' className="nav-item nav-links">Log in</Link>:
                <>
                <Avatar background='#009dff' borderRadius='50%' color='white'><Link to='/' >M</Link></Avatar>
                <button className="nav-item nav-links">Log out</button>
                </>    
            }
            </div>
        </nav>
    )
}

export default Navbar