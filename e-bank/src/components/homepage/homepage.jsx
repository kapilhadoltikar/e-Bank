import React from "react"
import "./homepage.css"

const Homepage = () => {
    return (
        <div>
            <div className="homepage">
                <div class="card" >
                    <div class="card-body text-white text-bold bg-primary">
                        <h3 class="card-title">e-Bank</h3>
                        <hr/>
                        <h5 class="card-subtitle mb-2 text-white">A one stop banking solutions at your finger tips.</h5>
                        <p class="card-text text-white">
                        Digital banking is part of the broader context for the move to online banking, 
                        where banking services are delivered over the internet. The shift from traditional 
                        to digital banking has been gradual, remains ongoing, and is constituted by differing 
                        degrees of banking service digitization. Digital banking involves high levels of process 
                        automation and web-based services and may include APIs enabling cross-institutional service 
                        composition to deliver banking products and provide transactions. It provides the ability for 
                        users to access financial data through desktop, mobile and ATM services. This is a little push 
                        from our side for digital banking services.
                       
                        </p>
                        <a href="/" class="home-link text-white">Home</a>
                        <a href="logout" class="logout-link text-white">Logout</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Homepage