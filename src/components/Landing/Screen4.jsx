import { useState } from "react";
import manjiri from "../../assets/images/manjiri.jpg"
import abhishek from "../../assets/images/abhishek.jpg"
import sourav from "../../assets/images/sourav.jpg"
import sayali from "../../assets/images/sayali.jpg"


const Screen4 =()=>{

    const [image , setImage] = useState("Dr. Manjri Patwari");

    

    return <div className="screen4">
                <div className="font-heading font-heading--xLarge"><span>Team</span> </div>
                <div  className="screen4__imageWrapper">
                    <p>Hover on names to see who is who</p>
                    <img style={{animatioName:"appear"}} className="screen4__imageWrapper_img" 
                    src={image==="Dr. Manjiri Patwari"?manjiri:
                        image==="abhishek"?abhishek:
                        image==="sourav"?sourav:
                        image==="sayali"?sayali
                        :manjiri
                        } />
                    
                </div>
                <div className="screen4__title screen4__title--1">Club Supervisor</div>
                <div className="screen4__div">
                    <figure>
                        <div onMouseOver={()=>setImage("Dr. Manjiri Patwari")} className="fig">Dr. Manjiri Patwari</div>
                        
                    </figure>
                </div>
                <div className="screen4__title">Anchoring</div>
                <div className="screen4__div">
                    <figure>
                        <div className="fig">Karishma Shende</div>
                    </figure>
                    <figure>
                        <div onMouseOver={()=>setImage("abhishek")} className="fig">Abhishek Soni</div>
                    </figure>
                </div>
                <div className="screen4__title">Registration Incharge</div>
                <div className="screen4__div">
                    <figure>
                        <div onMouseOver={()=>setImage("sayali")} className="fig">Sayali Bodkhe</div>
                    </figure>
                    <figure>
                        <div className="fig">Harshada Girase</div>
                    </figure>
                </div>
                <div className="screen4__title">Rules and Regulation Incharge</div>
                <div className="screen4__div">
                    <figure>
                        <div className="fig">Sanil Jain</div>
                    </figure>
                    <figure>
                        <div onMouseOver={()=>setImage("sourav")} className="fig">Sourav Rathour</div>
                    </figure>
                </div>
                <div className="screen4__title">Anchoring</div>
                <div className="screen4__div">
                    <figure>
                        <div className="fig">Varun Zende</div>
                    </figure>
                    <figure>
                        <div className="fig">Vijay Indalkar</div>
                    </figure>
                    <figure>
                        <div className="fig">Anushka Mehra</div>
                    </figure>
                    <figure>
                        <div className="fig">Shivam Ingale</div>
                    </figure>
                    <figure>
                        <div className="fig">Akshay Salukhe</div>
                    </figure>
                </div>
                
            </div>
}


export default Screen4