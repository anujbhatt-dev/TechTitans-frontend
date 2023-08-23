import axios from "axios";
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router";
import gallary11 from "../../assets/images/gallary11.jpg";

const Blog=(props)=>{
    const locate = useLocation();
    const [registered,setRegsitered] = useState(false)
    const [event,setEvent]= useState({});
    const [image,setImage]= useState(null)
    useEffect(()=>{
        setEvent(locate.state)
        console.log(event);
        
        // axios.get(`/events/${event._id}/image`).then(res=>{
        //     setImage(res.data)
            
        // }).catch(e=>console.log(e))
    },[])
    const navigate = useNavigate()

    if(!props.authenticated){
        return navigate("/home")
    }
    return <div className="Event">
                
                    
                <div className="event">
                            <div className="flex-wrapper">
                                <div className="event__createdAt"><span>Date </span>{event.createdAt}</div>
                                <div className="event__status"><span>Author </span>{event.author}</div>                    
                            </div>
                            <img className="event__img" src={`http://localhost:3001/api/blogs/${event._id}/image`} />
                            <div className="flex-wrapper">
                                {/* <div className="event__type"><span>Type </span>{event.type}</div> */}
                                <div className="event__createdAt"><span>Announced on </span>{event.createdAt}</div>
                            </div>
                            <div className="event__name">{event.title}</div>
                            <div className="event__description">{event.content}</div>                           
                            {/*  */}
                        </div>    
                    
                
            </div>
}

export default Blog