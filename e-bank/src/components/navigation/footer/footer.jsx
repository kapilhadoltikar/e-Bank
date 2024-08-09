import React from 'react'


export const Footer = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-sm fixed-bottom navbar-dark bg-primary">
                <div class="container-fluid">

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="mynavbar">
                       
                       <h7 className='text-white'>
                        © e-Bank.com Copyright 2024 
                       </h7>
                        <hr/>

                    </div>
                </div>
            </nav>
        </div>
    )
}
