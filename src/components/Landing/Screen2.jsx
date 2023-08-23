import image1 from "../../assets/images/image1.jpg"
import image2 from "../../assets/images/image2.jpg"
import image3 from "../../assets/images/image3.jpg"
import image4 from "../../assets/images/image4.jpg"

import Aos from "aos"
import "aos/dist/aos.css"

const Screen2 =()=>{

    Aos.init({
        duration: 100,
        delay: 0
      });

    return <div className="screen2">
            <center className="font-heading font-heading--xLarge screen2__heading">
                <div data-aos-once="true" data-aos="flip-down" className="screen2__heading_div screen2__heading_div--1">What Do We</div>
                <div data-aos-once="true" data-aos="flip-down" className="screen2__heading_div screen2__heading_div--2">Do in</div>
                <div data-aos-once="true" data-aos="flip-down" className="screen2__heading_div screen2__heading_div--3">TechTitans?</div>  
            </center>

            <div className="screen2__items screen2__items--1">
                {/* first */}
                <div className="screen2__items_item screen2__items_item--1">
                    <img className="item__img" src={image1} alt="" />
                    <div data-aos-once="true" data-aos="flip-down" className="item__digit">1</div>
                    <div className="item__text">
                        <div className="item__text_heading font-heading">
                            Coding Challenges
                        </div>
                        <div className="font-content item__text_content">
                            We organize regular coding challenges to help members enhance their problem-solving skills, programming techniques, and algorithmic thinking. These challenges cover various difficulty levels and programming languages.
                        </div>
                    </div>

                </div>

                <hr  className="hr-primary"/>

                {/* second */}

                <div className="screen2__items_item screen2__items_item--1">
                    <div className="item__text">
                        <div className="item__text_heading font-heading">
                            Workshops and Training
                        </div>
                        <div className="font-content item__text_content">
                        We conduct workshops and training sessions on popular programming languages, frameworks, and technologies. These sessions provide hands-on learning opportunities, allowing members to gain practical knowledge and stay updated with the latest industry trends
                        </div>
                    </div>
                    <div data-aos-once="true" data-aos="flip-left" className="item__digit">2</div>
                    <img className="item__img" src={image2} alt="" />

                </div>

                <hr  className="hr-primary"/>
                {/* third */}

                <div className="screen2__items_item screen2__items_item--1">
                    <img className="item__img" src={image3} alt="" />
                    <div data-aos-once="true" data-aos="flip-left" className="item__digit">3</div>
                    <div className="item__text">
                        <div className="item__text_heading font-heading">
                            Mentorship Programs
                        </div>
                        <div className="font-content item__text_content">
                        We offer mentorship programs where experienced members and industry professionals provide guidance, support, and advice to help others navigate their coding and development journey. Mentors share their expertise and assist mentees in achieving their goals.
                        </div>
                    </div>

                </div>

                <hr  className="hr-primary"/>

                {/* fourth */}

                <div className="screen2__items_item screen2__items_item--1">
                    <div className="item__text">
                        <div className="item__text_heading font-heading">
                            Guest Lectures and Tech Talks
                        </div>
                        <div className="font-content item__text_content">
                            We invite industry experts, guest speakers, and renowned professionals to deliver engaging talks and share insights on emerging technologies, career development, and industry trends. These sessions inspire and motivate members, broadening their knowledge and perspectives.
                        </div>
                    </div>
                    <div data-aos-once="true" data-aos="flip-left" className="item__digit">4</div>
                    <img className="item__img" src={image4} alt="" />

                </div>

                
                
            </div>
    </div>
}


export default Screen2