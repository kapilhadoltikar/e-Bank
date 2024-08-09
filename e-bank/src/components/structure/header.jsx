import React from 'react'

export const Header = () => {
    return (
        <div>
            {/* header */}
            <nav class="navbar navbar-expand-sm fixed-top navbar-dark bg-primary">
                <div class="container-fluid">
                    <a className="navbar-brand" href="/">e-Bank</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="mynavbar">
                        <ul class="navbar-nav me-auto">
                            <li class="nav-item ">
                                <a class="nav-link" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="login">Login</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="register">Register</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="aboutus">About Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="faqs">FAQs</a>
                            </li>
                        </ul>
                        <form class="d-flex">
                            <input class="form-control me-2" type="text" placeholder="Search" />
                            <button class="btn btn-primary border-white" type="button">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}
