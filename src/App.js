import { useState } from "react";
import "./App.scss"
import $ from "jquery"
import Landing from "./components/Landing/Landing"
import Navigation from "./components/Navigation/Navigation";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Prelanding from "./components/Prelanding";
import { Route, Routes, useNavigate } from "react-router";
import Footer from "./components/Footer/Footer";
import Gallary from "./components/gallary/gallary";
import axios from "axios"
import Whatsnew from "./components/Whatsnew/Whatsnew";
import Events from "./components/Events/Events";
import MyProfile from "./components/MyProfile/MyProfile";
import Event from "./components/Events/Event";
import Blogs from "./components/Blogs/Blogs"
import Blog from "./components/Blogs/Blog"

const setAuthToken =  (token) => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common['Authorization'];
    }
  };

// axios.interceptors.response.use(response =>{
//     console.log("intercept->"+JSON.stringify(response.headers));
//      let authorization=response.headers.authorization;
//      if(authorization){
//      axios.defaults.headers.common['authorization'] = authorization;
//    }
//      return response;});

const App=() => {
  const navigate = useNavigate()
  const [theme,setTheme]=useState(true)

  const [authenticated,setAuthentication] = useState(false)
  const [user,setUser]= useState({})

  const getAuthenticated =(data)=>{
    setAuthToken(data.token)
    setUser(data.user)
    setAuthentication(true)
    console.log(user)
  }

  const reset = ()=>{
    setAuthToken(null)
    setUser(null)
    setAuthentication(false)
    navigate("/home")
  }


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
        <Navigation user={user} authenticated={authenticated}  theme={theme} toggler={()=>toggleHandler()}/>
        <Routes>
            <Route path="/" element={<Prelanding />}/>
            <Route path="/home" element={<><Landing authenticated={authenticated} theme={theme}/></>}/>
            <Route path="/register" element={<Register authenticated={authenticated} getAuthenticated={getAuthenticated}/>}/>
            <Route path="/login" element={<Login authenticated={authenticated} getAuthenticated={getAuthenticated}/>}/>
            <Route path="/whatsnew" element={<Whatsnew authenticated={authenticated} user={user}/>}/>
            <Route path="/events" element={<Events authenticated={authenticated} user={user}/>}/>
            <Route path="/events/:id" element={<Event authenticated={authenticated} user={user}/>}/>
            <Route path="/gallary" element={<Gallary />}/>
            <Route path="/myprofile" element={<MyProfile reset={reset} authenticated={authenticated} user={user}/>}/>
            <Route path="/blogs" element={<Blogs authenticated={authenticated} user={user}/>}/>
            <Route path="/blogs/:id" element={<Blog authenticated={authenticated} user={user}/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;