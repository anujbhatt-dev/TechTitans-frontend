import Screen1 from "./Screen1"
import Screen2 from "./Screen2"
import Screen3 from "./Screen3"
import Screen4 from "./Screen4"
import Screen5 from "./Screen5"
import Screen6 from "./Screen6"

const Landing =(props)=>{
    return <div className="landing">
            <Screen1 authenticated={props.authenticated} theme={props.theme}/>
            <hr className="hr-primary"/>
            <Screen2/>
            <hr className="hr-primary"/>
            <Screen3/>
            <hr className="hr-primary"/>
            <Screen5/>
            <hr className="hr-primary"/>
            <Screen4/>
            {/* <hr className="hr-primary"/>
            <Screen6/> */}
    </div>
}


export default Landing