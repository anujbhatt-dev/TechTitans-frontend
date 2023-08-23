import { Link } from "react-router-dom"
import logo from "../assets/images/logo.png"
import { useEffect, useState } from "react"
import axios from "axios"

const Prelanding = ()=>{
    console.log(process.env);
    
    return <div className="prelanding">
                <div className="prelanding__imgWrapper">
                    <img src={logo} alt="techtitans logo" />
                </div>
                <div className="prelanding__text">
                Join our dynamic coding club! Dive into software development, web design, and app creation. Collaborate, learn, and innovate with like-minded enthusiasts. Unleash your coding potential today!
                </div>
                <Link to="/home">
                <button className="btn btn-primary screen1__1_btn">Proceed</button>
                </Link>
            </div>
}

export default Prelanding