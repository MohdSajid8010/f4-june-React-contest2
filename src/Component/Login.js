
import React, { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";


const Login = ({ setId }) => {
    let [uname, setUname] = useState("");
    let [pass, setPass] = useState("");
    let [error, setError] = useState("");
    let [success, setSuccess] = useState("");
    let navigator = useNavigate()

    useEffect(() => {
        let User_Obj = JSON.parse(localStorage.getItem("User_Obj")) || null
        if (User_Obj && User_Obj.token) {//if Token is exist , navigate user to the profilr page
            navigator("/profile")
        }

    }, [])

    function handle_submit(e) {
        e.preventDefault()

        if (!uname.trim() || !pass.trim()) {
            setError("Error : All the fields are mandatory!");
        }
        else {

            function request1() {
                let obj = {
                    username: `${uname.trim()}`,
                    password: `${pass.trim()}`,
                }
                axios.post("https://dummyjson.com/auth/login", obj)
                    .then((res) => {
                        console.log(res.data, res.data.id)
                        setError("")
                        setSuccess("Successfully Signed Up!");
                        console.log(uname, pass);
                        setId(res.data.id);//set the user id 


                        localStorage.setItem("User_Obj", JSON.stringify(res.data));//save data in local storage
                        navigator("/profile");
                    })
                    .catch((error) => {
                        console.log(error.response.data.message)
                        setError(error.response.data.message)

                    })
            }
            request1();


        }
    }

    return (
        <div>

            <form onSubmit={handle_submit}>
                <h1>Sign in</h1>
                <input type="text" autoFocus onChange={(e) => setUname(e.target.value)} placeholder="Enter User Name" />
                <input type="password" onChange={(e) => setPass(e.target.value)} placeholder="Enter Password" />
                <div className="error">{error}</div>
                <div className="success">{success}</div>
                <button type="submit"  >Sign in</button>
            </form>


        </div>
    )
}

export default Login;
