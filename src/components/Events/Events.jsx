import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router";
import moment from "moment"

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
    // if(!props.authenticated){
    //     return navigate("/home")
    // }

    const handleClick =(event)=>{
        navigate(`/events/${event.name}`,{state:{...event}})
    }
    return <div className="events">
            <div className="events__mainTitle">Events</div>
                {events.map(event=>{
                    return (
                        // <div className="eventWrapper">
                            <div onClick={()=>handleClick(event)} className="event row">
                                
                                <img className="event__miniImg" src={`https://techtitans.chickenkiller.com/api/events/${event._id}/image`}/>
                                <div className="event__2">
                                    <div className="event__name">{event.name.length>=24?event.name.slice(0,23)+"...":event.name}</div>                    
                                    <div className="flex-wrapper">
                                        <div className="event__createdAt">{moment(event.createdAt).format('Do MMM YYYY')}</div>
                                        <div className="event__readMore">read more</div>
                                    </div>
                                </div>
                                
                            </div>
                        // </div>    
                    )
                })}
            </div>
}

export default Events