import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router";

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
    return <div className="Event">
                {events.map(event=>{
                    return (
                        <div className="eventWrapper">
                        <div className="event">
                            <div className="flex-wrapper">
                                <div className="event__createdAt"><span>Date </span>{event.createdAt}</div>
                                <div className="event__status"><span>Author </span>{event.author}</div>                    
                            </div>
                            {/* <div className="flex-wrapper">
                                <div className="event__type"><span>Type </span>{event.type}</div>
                                <div className="event__createdAt"><span>Announced on </span>{event.createdAt}</div>
                            </div> */}
                            <div className="event__name">{event.title}</div>
                            <div className="event__description">{event.content.slice(0,25)+"..."}</div>
                            <button onClick={()=>handleClick(event)} className="btn btn-primary">Quick View</button>
                            {/*  */}
                        </div>
                        </div>    
                    )
                })}
            </div>
}

export default Blogs