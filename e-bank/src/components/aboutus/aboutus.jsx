import React from "react"
import "./aboutus.css"

const Aboutus = ({ setLoginUser }) => {
    return (
        <div>
            <div className="">

                <div class="card" >
                    <div class="card-body text-white text-bold bg-primary">
                        <h3 class="card-title">e-Bank</h3>
                        <hr />
                        <h5 class="card-subtitle mb-2 text-white">About Us</h5>
                        <p class="card-text text-white"> e-Bank is one of India's leading banking and financial services groups,
                        offering a wide range of financial services that encompass every sphere of life e-Bank caters to a diverse 
                        group of stakeholders. This section provides information about the people and standards that guide the bank, 
                        our shareholding and ownership pattern over the years, and developments that are important for shareholders to know.

                        </p>
                        <a href="/" class="home-link text-white">Home</a>
                        <a href="logout" class="logout-link text-white">Logout</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Aboutus