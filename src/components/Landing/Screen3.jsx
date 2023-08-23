import vision from "../../assets/images/vision.png"
import triangle from "../../assets/images/triangle.png"
import triangle2 from "../../assets/images/triangle2.png"
import Aos from "aos"
import "aos/dist/aos.css"
const Screen3 =()=>{
    Aos.init({
        duration: 2000,
        delay: 0
      });
    return <div className="screen3">
            <div className="font-heading font-heading--xLarge screen3__heading"><span>Vision</span> <img className="screen3__heading_img" src={vision}/></div>
            <center className="screen3__text">
            The vision of Tech Titans is to create a vibrant and inclusive community that empowers tech enthusiasts to excel in their coding and development journey. We aim to foster continuous learning, innovation, and collaboration through workshops, coding challenges, and project collaborations. Our vision is to inspire our members to leverage technology for positive impact, celebrate diversity, and become the tech leaders of tomorrow, shaping a brighter future for themselves and the world.
            </center>
    </div>
}


export default Screen3