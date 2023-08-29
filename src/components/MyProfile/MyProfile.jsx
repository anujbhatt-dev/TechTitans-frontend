import axios from "axios"
import { useEffect, useState } from "react"
import Resume from "./Resume"

const MyProfile = (props) =>{
    const [resume,setResume] =useState(null)
    useEffect(()=>{
        axios.get("/resume").then((res)=>{
            if(!res.data.message){
                    setResume(res.data)
                }
                console.log(res.data);
        }).catch((e)=>{
                console.log("error");
        })
    },[])
    return <div className="myProfile">  
                <div className="myProfile__info">
                    <img src={`data:image/jpg;base64,${props.user.pic}`}/>
                    <div className="myProfile__info_name"><span>name </span>{props.user.name}</div>
                    <div className="myProfile__info_username"><span>username </span>{props.user.username}</div>
                    <div className="myProfile__info_email"><span>email </span>{props.user.email}</div>
                    <div className="myProfile__info_phone"><span>phone </span>{props.user.phone}</div>
                    <button onClick={props.reset} className="btn btn-primary">Logout</button>
                </div>
                <div className="myProfile__resume">
                    <div className="font-heading font-heading-large"><center>Resume</center></div>
                    {
                        resume?
                        <Resume resume={resume} user={props.user}/>:
                        <div className="myProfile__resume_create"><button>create your resume</button></div>
                    }
                </div>
    </div>
}

export default MyProfile