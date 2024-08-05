import axios from "axios";
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router";
import moment from "moment";
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
                
                    
                <div className="singleEvent">
                            <div className="singleEvent__name">{event.title}</div>
                            <img className="singleEvent__img" src={`https://techtitans-backend-deploy-production.up.railway.app/api/blogs/${event._id}/image`} />                        
                            <div className="singleEvent__description">{event.content}</div>                           
                            <div className="flex-wrapper">
                                <div className="singleEvent__createdAt"><span>published on </span>{moment(event.createdAt).format('Do MMM YYYY')}</div>
                                <div className="singleEvent__status"><span>Author </span>{event.author}</div>                    
                            </div>
                </div>    
            </div>
}

export default Blog