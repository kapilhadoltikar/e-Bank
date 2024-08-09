// import React, {useState} from "react"
import "./login.css"
// import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useReducer, useState } from "react";
import { AuthData } from "../../authenticator/AuthWrapper";

export const Login = ({ setLoginUser }) => {

    // const history = useNavigate()

    // const [ user, setUser] = useState({
    //     email:"",
    //     password:""
    // })

    // const handleChange = e => {
    //     const { name, value } = e.target
    //     setUser({
    //         ...user,
    //         [name]: value
    //     })
    // }

    // const login = () => {
    //     axios.post("http://localhost:9002/login", user)
    //     .then(res => {
    //         alert(res.data.message)
    //         setLoginUser(res.data.user)
    //         Navigate.push("/")
    //     })
    // }

    const navigate = useNavigate();
    const { login } = AuthData();
    const [formData, setFormData] = useReducer((formData, newItem) => { return ({ ...formData, ...newItem }) }, { userName: "", password: "" })
    const [errorMessage, setErrorMessage] = useState(null)

    const doLogin = async () => {

        try {

            await login(formData.userName, formData.password)
            navigate("/account")

        } catch (error) {

            setErrorMessage(error)

        }

    }








    return (
        <div>
        <div className="login">
            <h1>Login</h1>
            <input type="text" name="email" value={formData.userName} onChange={(e) => setFormData({ userName: e.target.value })} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={formData.password} onChange={(e) => setFormData({ password: e.target.value })} placeholder="Enter your Password" ></input>
            <div className="button" onClick={doLogin}>Login</div>
        </div>
                { errorMessage ? <div className="error">{errorMessage}</div> : null }
              
        </div >
    )
}