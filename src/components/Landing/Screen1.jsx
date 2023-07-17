import { useState } from "react"
import cArrow from "../../assets/images/circular-arrows.png"

const Screen1 =()=>{

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
    

    

    return <div className="screen1">
            <div className="screen1__1">
                <div className="font-heading">Code.Create.Conquor</div>
                <button className="btn btn-primary screen1__1_btn">Get Started</button>
            </div>
            <div className="screen1__2">
                <div className="screen1__2_boxes">
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
                    <div className="box box--3">
                        
                        {level==1?<>
                            <button onClick={factorialCalculator} className="box--3__btn">Submit</button>
                            <input className="box--3__input" onChange={factorialHandler} type="text" value={number}/>
                        </>:null}
                    </div>
                    <div className="box box--4">
                        {level!=0?<button onClick={()=>setLevel(0)} className="box--3__btn">Reset</button>:null}
                        {factorial}
                    </div>
                </div>
            </div>
    </div>
}


export default Screen1