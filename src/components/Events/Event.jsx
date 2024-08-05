import axios from "axios";
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router";
import moment
 from "moment";
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

    // if(!props.authenticated){
    //     return navigate("/home")
    // }
    return <div className="Event">
                
                    
                        <div className="singleEvent">
                            <div className="singleEvent__name">{event.name}</div>
                            <div className="flex-wrapper">
                                <div className="singleEvent__createdAt"><span>On </span>{moment(event.eventDate).format('Do MMM YYYY')}</div>
                                <div className="singleEvent__status"><span>time </span>{event.eventTime}</div>          
                                <div><span>status </span>{event.status}</div>          
                            </div>
                            <img className="singleEvent__img" src={`https://techtitans-backend-deploy-production.up.railway.app/api/events/${event._id}/image`} />
                            <div className="flex-wrapper">
                                <div className="singleEvent__type"><span>Type </span>{event.type}</div>
                                <div className="singleEvent__createdAt"><span>Announced on </span>{moment(event.createdAt).format('Do MMM YYYY')}</div>
                            </div>
                            <div className="singleEvent__description">{event.description}</div>
                            {registered?<button disabled className="btn btn-success singleEvent__btn">registered</button>
                            :<button onClick={handleRegister} className="btn btn-success singleEvent__btn">want to register</button>}
                            {/*  */}
                        </div>    
                    
                
            </div>
}
 
export default Event