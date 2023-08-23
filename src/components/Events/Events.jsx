import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router";

const Events=(props)=>{
    const [events,setEvents]= useState([]);
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get("/events").then(res=>{
            setEvents(res.data)
        }).catch(e=>{
            console.log(e);
        })
    },[])
    if(!props.authenticated){
        return navigate("/home")
    }

    const handleClick =(event)=>{
        navigate(`/events/${event.name}`,{state:{...event}})
    }
    return <div className="Event">
                {events.map(event=>{
                    return (
                        <div className="eventWrapper">
                        <div className="event">
                            <div className="flex-wrapper">
                                <div className="event__createdAt"><span>On </span>{event.eventDate}</div>
                                <div className="event__status"><span>time </span>{event.eventTime}</div>                    
                            </div>
                            <div className="flex-wrapper">
                                <div className="event__type"><span>Type </span>{event.type}</div>
                                <div className="event__createdAt"><span>Announced on </span>{event.createdAt}</div>
                            </div>
                            <div className="event__name">{event.name}</div>
                            <div className="event__description">{event.description.slice(0,25)+"..."}</div>
                            <button onClick={()=>handleClick(event)} className="btn btn-primary">Quick View</button>
                            {/*  */}
                        </div>
                        </div>    
                    )
                })}
            </div>
}

export default Events