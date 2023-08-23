import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router";
import moment from "moment";

const Blogs=(props)=>{
    const [events,setEvents]= useState([]);
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get("/blogs").then(res=>{
            setEvents(res.data)
        }).catch(e=>{
            console.log(e);
        })
    },[])
    if(!props.authenticated){
        return navigate("/home")
    }

    const handleClick =(event)=>{
        navigate(`/blogs/${event.title}`,{state:{...event}})
    }
    return <div className="events">
            <div className="events__mainTitle">Blogs</div>
                {events.map(event=>{
                    return (
                        <div onClick={()=>handleClick(event)} className="event row">
                            <img className="event__miniImg" src={`http://localhost:3001/api/blogs/${event._id}/image`} alt="" />
                            <div className="event__2">
                                <div className="event__name">{event.title.length>=24?event.title.slice(0,23)+"...":event.title}</div>
                                <div className="flex-wrapper">
                                    <div className="event__createdAt">{moment(event.eventDate).format('Do MMM YYYY')}</div>
                                    <div className="event__readMore">read more</div>
                                </div>
                            </div>                        
                        </div>   
                    )
                })}
            </div>
}

export default Blogs