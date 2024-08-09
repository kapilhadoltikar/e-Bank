import Aboutus from "../aboutus/aboutus"
import Faqs from "../faqs/faqs"
import Homepage from "../homepage/homepage"
import { Adminpage } from "../adminpage/adminpage"
import { Login } from "../login/login"
import { Register } from "../register/register"
import Userpage from "../userpage/userpage"

export const nav = [
     { path:     "/",         name: "Homepage",        element: <Homepage />,       isMenu: true,     isPrivate: false  },
     { path:     "/aboutus",    name: "Aboutus",       element: <Aboutus />,      isMenu: true,     isPrivate: false  },
     { path:     "/faqs",    name: "Faqs",       element: <Faqs />,      isMenu: true,     isPrivate: false  },
     { path:     "/login",    name: "Login",       element: <Login />,      isMenu: false,    isPrivate: false  },
     { path:     "/register",    name: "Register",       element: <Register />,      isMenu: false,    isPrivate: false  },
     { path:     "/userpage",  name: "Userpage",     element: <Userpage />,    isMenu: true,     isPrivate: true  },
     { path:     "/adminpage",  name: "Adminpage",     element: <Adminpage />,    isMenu: true,     isPrivate: true  },
]