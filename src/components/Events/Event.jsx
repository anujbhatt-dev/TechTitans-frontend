import axios from "axios";
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router";
import gallary11 from "../../assets/images/gallary11.jpg";

const Event=(props)=>{
    const locate = useLocation();
    const [registered,setRegsitered] = useState(false)
    const [event,setEvent]= useState({});
    const [image,setImage]= useState(null)
    useEffect(()=>{
        setEvent(locate.state)
        console.log(event);
        if(locate.state.registered.includes(event._id)){
            setRegsitered(true)
        }
        // axios.get(`/events/${event._id}/image`).then(res=>{
        //     setImage(res.data)
            
        // }).catch(e=>console.log(e))
    },[])
    const navigate = useNavigate()

    const handleRegister = ()=>{
        axios.post(`/events/register/${event._id}`).then(res=>{
            setRegsitered(true)
        }).catch(e=>console.log(e))
    }

    if(!props.authenticated){
        return navigate("/home")
    }
    return <div className="Event">
                
                    
                        <div className="event">
                            <div className="flex-wrapper">
                                <div className="event__createdAt"><span>On </span>{event.eventDate}</div>
                                <div className="event__status"><span>time </span>{event.eventTime}</div>                    
                            </div>
                            <img className="event__img" src={`http://localhost:3001/api/events/${event._id}/image`} />
                            <div className="flex-wrapper">
                                <div className="event__type"><span>Type </span>{event.type}</div>
                                <div className="event__createdAt"><span>Announced on </span>{event.createdAt}</div>
                            </div>
                            <div className="event__name">{event.name}</div>
                            <div className="event__description">{event.description}</div>
                            {registered?<button disabled className="btn btn-success event__btn">registered</button>
                            :<button onClick={handleRegister} className="btn btn-success event__btn">want to register</button>}
                            {/*  */}
                        </div>    
                    
                
            </div>
}
 
export default Event