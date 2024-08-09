import './App.css'
import { BrowserRouter } from "react-router-dom";
import { AuthWrapper } from './authenticator/AuthWrapper';
// import { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.css'
// import "bootstrap/dist/css/bootstrap.css";
// import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
// import Userpage from './components/userpage/userpage';
// import Aboutus from './components/aboutus/aboutus';
// import Faqs from './components/faqs/faqs';
// import Layout from './components/navigation/layout';
// import Homepage from "./components/homepage/homepage"
// import Login from "./components/login/login"
// import Register from "./components/register/register"

function App() {

  // const [user, setLoginUser] = useState({})
  return (
    <div className="App">
      <BrowserRouter>
      
        <AuthWrapper/>

        {/* <Routes>
          <Route path="/layout" element={<Layout/>}/>  
            <Route path="/" element={<Homepage/>}></Route>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/userpage" element={<Userpage/>}/>
            <Route path="/aboutus" element={<Aboutus/>}/>
            <Route path="/faqs" element={<Faqs/>}/>
            <Route path="/layout" element={<Layout/>}/>
        </Routes> */}

      </BrowserRouter>
    </div>
  );
}

export default App;




// function App() {

//   const [user, setLoginUser] = useState({})
//   return (
//     <div className="App">
//  <BrowserRouter>

// <Routes> 
  
//     <Route path="/">
//       {
//         user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser} />
//       }
//     </Route>
//     <Route path="/login">
//       <Login setLoginUser={setLoginUser} />
//     </Route>
//     <Route path="/register">
//       <Register />
//     </Route>
 
// </Routes>

// </BrowserRouter>
// </div>
// );
// }

// export default App;

