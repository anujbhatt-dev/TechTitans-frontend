const MyProfile = (props) =>{
    return <div className="myProfile__wrapper">  
                <div className="myProfile">
                    <img src={`data:image/jpg;base64,${props.user.pic}`}/>
                    <div className="myProfile__name"><span>name </span>{props.user.name}</div>
                    <div className="myProfile__username"><span>username </span>{props.user.username}</div>
                    <div className="myProfile__email"><span>email </span>{props.user.email}</div>
                    <div className="myProfile__phone"><span>phone </span>{props.user.phone}</div>
                    <button onClick={props.reset} className="btn btn-primary">Logout</button>
                </div>
    </div>
}

export default MyProfile