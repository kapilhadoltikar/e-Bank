import { createContext, useContext, useState } from "react"
import { Header } from "../components/structure/header";
import { Footer } from "../components/navigation/footer/footer"
import { RenderRoutes } from "../components/structure/RenderNavigation";

const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);


export const AuthWrapper = () => {

     const [user, setUser] = useState({ name: "", isAuthenticated: false })

     const login = (userName, password) => {

          // Make a call to the authentication API to check the username

          return new Promise((resolve, reject) => {

               if (password === "password") {
                    setUser({ name: userName, isAuthenticated: true })
                    resolve("success")
               } else {
                    reject("Incorrect password")
               }
          })


     }
     const logout = () => {

          setUser({ ...user, isAuthenticated: false })
     }


     return (

          <AuthContext.Provider value={{ user, login, logout }}>
               <>
                    <Header />
                    <RenderRoutes />
                    <Footer />

               </>

          </AuthContext.Provider>

     )

}