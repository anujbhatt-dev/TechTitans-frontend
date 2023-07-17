import $ from "jquery"
import logo from "../../assets/images/logo.png"
import darktoggle from "../../assets/images/darktoggle.png"
import lighttoggle from "../../assets/images/lighttoggle.png"
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom";

const Navigation = (props)=>{

        

        useEffect(()=>{
            console.log("Navigation did mount");
        },[])

        


        return  <div className="naviagation-wrapper">
                    <nav className="navigation"> 
                        <figure className="navigation__figure">
                            <img className="navigation__figure_logo" src={logo} alt="" />
                        </figure>
                        <button className={props.theme?"navigation__toggle-btn navigation__toggle-btn--light":"navigation__toggle-btn navigation__toggle-btn--dark"} onClick={props.toggler}>{props.theme?<img src={lighttoggle} />:<img src={darktoggle}/>}</button>
                    </nav>
                </div>
}

export default Navigation 