import { useState } from "react"
import Aos from "aos"
import "aos/dist/aos.css"
import cArrow from "../../assets/images/circular-arrows.png"
import fakecode from "../../assets/images/fakecode.png"
import fakeresult from "../../assets/images/fakeresult.png"
import { Link } from "react-router-dom"

const Screen1 =(props)=>{

    const [factorial,setFactorial] = useState("");
    const [number,setNumber] = useState("")
    const [level,setLevel] = useState(0);

    const factorialCalculator=()=>{
        let fact=1
        for(let i=1;i<=number;i++){
            fact=fact*i
        }
        setFactorial(fact)
    }

    const factorialHandler=(e)=>{
        setNumber(e.target.value)
    }
    
    Aos.init({
        duration: 100,
        delay: 0
      });

    

    return <div className="screen1">
            <div  className="screen1__1">
                <div data-aos="fade-up" className="font-heading font-heading--xLarge screen1__heading">TechTitans</div>
                <div className="font-heading screen1__1_moto">{"{"}Code.Create.Conquer{"}"}</div>
                <Link data-aos="fade-left" to={props.authenticated?"/dashboard":"/register"} className="btn btn-primary screen1__1_btn">Get Started</Link>
            </div>
            <div className="screen1__2">
                <div data-aos="flip-right" className="screen1__2_boxes">
                    <div className="screen1__2_boxesWrapper">

                    <div className="box box--1">
                        <button onClick={()=>setLevel(1)} className="box--1__btn">Run</button>
                        <div className="box--1__code">
                            <div>let factorial=1</div><br/>
                            <div>console.log{"('Enter a Number')"}</div><br/>
                            <div>{"for(let i=1;i<=n;i++){"}</div><br/>
                            <div style={{paddingLeft:"1rem"}}>factorial=factorial * i</div><br/>
                            <div>{"}"}</div><br/>
                            <div>console.log{"('The factorial is')"+factorial}</div>
                        </div>
                    </div>

                    <div className="box box--2">
                        {level==0?<img src={cArrow} alt="" />:<img className="add-animation-codeLoad" src={cArrow} alt="" />}
                    </div>
                    </div>
                    <div className="screen1__2_boxesWrapper">

                    <div  className="box box--3">
                        
                        {level==1?<>
                            <button onClick={factorialCalculator} className="box--3__btn">Submit</button>
                            <div>Enter a Number</div>
                            <input className="box--3__input" onChange={factorialHandler} type="text" value={number}/>
                        </>:<img src={fakecode} className="box--3__img"/>}
                    </div>
                    <div className="box box--4">
                        {level!=0?<><button onClick={()=>setLevel(0)} className="box--3__btn">Reset</button>{factorial}</>:<img src={fakeresult} className="box--3__img"/>}
                        
                    </div>
                    </div>
                </div>
            </div>
    </div>
}


export default Screen1