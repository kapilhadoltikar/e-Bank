import { Link, Route, Routes } from "react-router-dom";
import { AuthData } from "../../authenticator/AuthWrapper";
import { nav } from "./navigation";

// RenderRoutes dictate according to its privacy values in nav 
export const RenderRoutes = () => {   

        const { user } = AuthData();
        
        return (
             <Routes>
             { nav.map((r, i) => {
                  
                  if (r.isPrivate && user.isAuthenticated) {
                       return <Route key={i} path={r.path} element={r.element}/>
                  } else if (!r.isPrivate) {
                       return <Route key={i} path={r.path} element={r.element}/>
                  } else return false
             })}
             
             </Routes>
        )
   }
   
   export const RenderMenu = () => {
   
        const { user, logout } = AuthData()
   
        const MenuItem = ({r}) => {
             return (
                  <div className="menuItem"><Link to={r.path}>{r.name}</Link></div>
             )
        }
        return (
          //  if page setting in nav isMenu then this page will show on the navigation meun
             <div className="menu">
                  { nav.map((r, i) => {
   
                       if (!r.isPrivate && r.isMenu) {
                            return (
                                 <MenuItem key={i} r={r}/>
                            )
                       } else if (user.isAuthenticated && r.isMenu) {
                            return (
                                 <MenuItem key={i} r={r}/>
                            )
                       } else return false
                  } )}
   
                  { user.isAuthenticated ?
                  <div className="menuItem"><Link to={'#'} onClick={logout}>Log out</Link></div>
                  :
                  <div className="menuItem"><Link to={'login'}>Log in</Link></div> }
             </div>
        )
   }