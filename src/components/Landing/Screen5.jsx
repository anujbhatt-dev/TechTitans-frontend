import { useState } from "react";
import axios from "axios"
import vid from "../../assets/videos/suggestionvideo.mp4"

const Screen5 =()=>{
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        description:''
      });

      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("/suggestions",formData).then(res => console.log(res)).catch(e=> console.log(e))
        setFormData({
            name: '',
            email: '',
            description:''
          })
      };

    return <div className="screen5">
                <div className="screen5__text">
                    <div className="font-heading font-heading--large screen5__text_head">Suggestion for<br/> TechTitans</div> 
                    <p className="screen5__text_para">We highly value and encourage suggestions from our Tech Titans community. Your input is vital in shaping the direction of our club and ensuring that we provide the best possible experience for all members. Whether it's event ideas, workshop topics, resource recommendations, or any other feedback, we welcome and appreciate your contributions. Your suggestions help us continuously improve and tailor our offerings to meet the needs and interests of our members. Please feel free to share your thoughts with us, as together, we can make Tech Titans an even more vibrant and impactful community for all tech enthusiasts.</p>
                </div>
                <form onSubmit={handleSubmit} className="screen5__form" >
                    <label className="screen5__form_label" htmlFor="name">Name</label>
                    <input onChange={handleInputChange} value={formData.name} name="name" required className="screen5__form_name" placeholder="enter your name" type="text" />
                    <label className="screen5__form_label" htmlFor="email">Email</label>
                    <input onChange={handleInputChange} value={formData.email} name="email" required className="screen5__form_email" placeholder="enter your email" type="email" />
                    <label className="screen5__form_label" htmlFor="suggestion">Suggestion</label>
                    <textarea onChange={handleInputChange} value={formData.description} name="description" required className="screen5__form_textarea" placeholder="your suggestion here!" cols="30" rows="10"></textarea>
                    <input type="submit" className="screen5__form_submit btn btn-primary" />
                </form>
            </div>
}


export default Screen5