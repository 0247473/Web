import React, {useState} from "react";
import axios from "axios";

function Login(props){

    //const [user, setUser] = useState("");
    //const [password, setPassword] = useState("");
    const [userProfile, setUserProfile] = useState({user: "", password: "" });
    const [message, setMessage] = useState("");
    function fieldListener(event){
        const {value, name} = event.target;
        // setUser(event.target.value);
        setUserProfile((prevValue) => {
            return {
                ...prevValue,
                [name]: value,
            };
        });
    }

    //function passwordListener(event){
        //setPassword(event.target.value);
      //  setUserProfile((prevValue) => {
        //    return {
        //        ...prevValue,
        //        password: event.target.value,
        //    };
      //  });
    //}

    function submitForm(event){
        axios.post("/Login", {
            uesr: userProfile.user,
            password: userProfile.password
        }).then((res) =>{
            if(res.data.authorization === 1){
                console.log("You are logged in");
                setMessage("");
                props.listener();
            } else {
                console.log("Wrong data");
                setMessage("Wrong data");
            }
        }).catch((err) => {
            console.error(err.error);
        });
        
        event.preventDefault();
    }
    const errorStyle = {
        color: "red",
    };

    return(
        <div>
            <form onSubmit={submitForm}>
                <input 
                    type="text" 
                    placeholder="Username" 
                    name="user"
                    onChange={fieldListener}
                    value={userProfile.user}
                    />
                <input 
                    type="password" 
                    placeholder="Password"
                    name="password" 
                    onChange={fieldListener}
                    value={userProfile.password}
                    />
                <button type="submit">Login</button>
            </form>
            <div style={errorStyle}>
                {message}
            </div>
        </div>
    )
}

export default Login;