import React from "react"
import "./userpage.css"

const Userpage = ({setLoginUser}) => {
    return (
        <div>
        <div className="userpage">
            <h1>Hello Faqs</h1>
            <div className="loutbutton" onClick={() => setLoginUser({})} >Logout</div>
        </div>
        </div>
    )
}

export default Userpage