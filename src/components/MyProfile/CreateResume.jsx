import axios from "axios"
import { useEffect, useState } from "react"
import plus from "../../assets/images/plus.png"

const CreateResume = ()=>{
    return <div className="myProfile__resume_create"><div><img src={plus} alt="" /><button>create your resume</button></div></div>
}

export default CreateResume