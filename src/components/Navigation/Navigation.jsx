import $ from "jquery"
import logo from "../../assets/images/logo.png"
import menu from "../../assets/images/menu.svg"
import menuLight from "../../assets/images/menu-light.svg"
import darktoggle from "../../assets/images/darktoggle.png"
import lighttoggle from "../../assets/images/lighttoggle.png"
import { useEffect, useState } from "react"
import { NavLink, Link } from "react-router-dom";

const Navigation = (props)=>{

        const [sidebarToggle,setSidebarToggle] = useState(false)

        useEffect(()=>{
            console.log("Navigation did mount");
        },[])

        
        if(props.authenticated){
            return <div className="naviagation-wrapper">
                        <nav className="navigation">
                        <img onClick={()=>{setSidebarToggle(!sidebarToggle)}}  className="sidebarToggler" src={props.theme?menu:menuLight} alt="" />
                        <Link to="/home">
                        <figure className="navigation__figure">
                            <img className="navigation__figure_logo" src={logo} alt="" />
                        </figure>
                        </Link>
                        <div className="navigation__anchorWrapper">
                            <NavLink className="navigation__anchorWrapper_anchor navigation__anchorWrapper_anchor--1 " to="/whatsnew">whatsnew</NavLink> 
                            <NavLink className="navigation__anchorWrapper_anchor navigation__anchorWrapper_anchor--2 " to="/blogs">blogs</NavLink> 
                            <NavLink className="navigation__anchorWrapper_anchor navigation__anchorWrapper_anchor--3 " to="/events">events</NavLink>
                            <NavLink className="navigation__anchorWrapper_anchor navigation__anchorWrapper_anchor--3 " to="/gallary">gallary</NavLink>
                            <NavLink className="navigation__anchorWrapper_anchor navigation__anchorWrapper_anchor--3 " to="/myprofile">
                                <img src={`data:image/jpg;base64,${props.user.pic}`}/>
                            </NavLink>

                        </div>
                        <button className={props.theme?"navigation__toggle-btn navigation__toggle-btn--light":"navigation__toggle-btn navigation__toggle-btn--dark"} onClick={props.toggler}>{props.theme?<img src={lighttoggle} />:<img src={darktoggle}/>}</button>
                        {sidebarToggle?
                        <div className="sidebar">
                            <NavLink onClick={()=>{setSidebarToggle(!sidebarToggle)}} className="navigation__anchorWrapper_anchor navigation__anchorWrapper_anchor--1 " to="/whatsnew">whatsnew</NavLink> 
                            <NavLink onClick={()=>{setSidebarToggle(!sidebarToggle)}} className="navigation__anchorWrapper_anchor navigation__anchorWrapper_anchor--2 " to="/blogs">blogs</NavLink> 
                            <NavLink onClick={()=>{setSidebarToggle(!sidebarToggle)}} className="navigation__anchorWrapper_anchor navigation__anchorWrapper_anchor--3 " to="/events">events</NavLink>
                            <NavLink onClick={()=>{setSidebarToggle(!sidebarToggle)}} className="navigation__anchorWrapper_anchor navigation__anchorWrapper_anchor--3 " to="/gallary">gallary</NavLink>
                            <NavLink onClick={()=>{setSidebarToggle(!sidebarToggle)}} className="navigation__anchorWrapper_anchor navigation__anchorWrapper_anchor--3 " to="/myprofile">My Profile 
                                <img src={`data:image/jpg;base64,${props.user.pic}`}/>
                            </NavLink>
                            
                        </div>:null}
                        </nav>
                    </div>
        }

        return  <div className="naviagation-wrapper">
                    <nav className="navigation">
                        <img onClick={()=>{setSidebarToggle(!sidebarToggle)}}  className="sidebarToggler" src={props.theme?menu:menuLight} alt="" />
                        <Link to="/home">
                        <figure className="navigation__figure">
                            <img className="navigation__figure_logo" src={logo} alt="" />
                        </figure>
                        </Link>
                        <div className="navigation__anchorWrapper">
                            <NavLink className="navigation__anchorWrapper_anchor navigation__anchorWrapper_anchor--1 " to="/home">home</NavLink> 
                            <NavLink className="navigation__anchorWrapper_anchor navigation__anchorWrapper_anchor--2 " to="/login">login</NavLink> 
                            <NavLink className="navigation__anchorWrapper_anchor navigation__anchorWrapper_anchor--3 " to="/register">register</NavLink> 
                            <NavLink className="navigation__anchorWrapper_anchor navigation__anchorWrapper_anchor--3 " to="/gallary">gallary</NavLink> 
                        </div>
                        <button className={props.theme?"navigation__toggle-btn navigation__toggle-btn--light":"navigation__toggle-btn navigation__toggle-btn--dark"} onClick={props.toggler}>{props.theme?<img src={lighttoggle} />:<img src={darktoggle}/>}</button>
                        {sidebarToggle?
                        <div className="sidebar">
                            <NavLink onClick={()=>{setSidebarToggle(!sidebarToggle)}} className="navigation__anchorWrapper_anchor navigation__anchorWrapper_anchor--1 " to="/home">home</NavLink> 
                            <NavLink onClick={()=>{setSidebarToggle(!sidebarToggle)}} className="navigation__anchorWrapper_anchor navigation__anchorWrapper_anchor--2 " to="/login">login</NavLink> 
                            <NavLink onClick={()=>{setSidebarToggle(!sidebarToggle)}} className="navigation__anchorWrapper_anchor navigation__anchorWrapper_anchor--3 " to="/register">register</NavLink> 
                            <NavLink onClick={()=>{setSidebarToggle(!sidebarToggle)}} className="navigation__anchorWrapper_anchor navigation__anchorWrapper_anchor--3 " to="/gallary">gallary</NavLink> 
                        </div>:null}
                    </nav>
                </div>
}

export default Navigation 