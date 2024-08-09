import React from "react"
import "./faqs.css"

const Faqs = ({ setLoginUser }) => {
    return (
        <div>
            <div className="faqs">


                <div class="card" >
                    <div class="card-body text-white text-bold bg-primary">
                        <h3 class="card-title">e-Bank</h3>
                        <hr />
                        <h5 class="card-subtitle mb-2 text-white">FAQs</h5>
                        <p class="card-text text-white">
                            Que:How to change/update mobile number?<br/>
                            Ans: Kindly place request at the branch for changing the mobile number.<br/>

                            Que:How can i update my account type?<br/>
                            Ans: kindly place request at the e-bank website for changing the account type.

                        </p>
                        <a href="/" class="home-link text-white">Home</a>
                        <a href="logout" class="logout-link text-white">Logout</a>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Faqs