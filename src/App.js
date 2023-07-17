import { useState } from "react";
import "./App.scss"
import $ from "jquery"
import Landing from "./components/Landing/Landing"
import Navigation from "./components/Navigation/Navigation";
const App=() => {

  const [theme,setTheme]=useState(true)

        const toggleHandler = ()=>{
            if(theme){
                $("body"). css({"background-color":"#011930", "color":"white"});
                setTheme(!theme)
            }else{
                $("body"). css({"background-color":"white", "color":"#011930"});
                setTheme(!theme)
            }
        }

  return (
    <div className="App">
      <Navigation theme={theme} toggler={()=>toggleHandler()}/> 
      <Landing/>
    </div>
  );
}

export default App;
