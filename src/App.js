import './CSS/style.css';
import './CSS/header.css';

import {BrowserRouter, HashRouter, Route, Routes} from 'react-router-dom';
import Showcase from "./Components/Display/Showcase";
import Navigation from "./Components/Navigation/TopNavigation";
import Login from "./Components/Authentication/Login";
import Register from "./Components/Authentication/Register";
import {useEffect, useMemo, useState} from "react";
import jwt from 'jwt-decode';
import {Loading} from "./Components/Search/State/Loading";
import {UserContext} from "./Components/Context/UserContext";
import Profile from "./Components/Profile/Profile";
import {ResetPassword} from "./Components/Authentication/ResetPassword";
import Email from "./Components/Authentication/Email";

function App() {
    const [user, setUser] = useState(null);
    const value = useMemo(() => ({user, setUser}), [user, setUser]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if(localStorage.getItem('accessToken')){
            const accessToken = localStorage.getItem('accessToken');
            const user = jwt(accessToken);
            setUser(user);
            console.log(user);
            setIsLoaded(true);
        }else{
            setUser(null);
            setIsLoaded(true);
        }
    }, []);
  return (
      <HashRouter>
          {isLoaded ?
              <UserContext.Provider value={value}>
                  <Navigation/>
                  <Routes>
                      <Route path="/" element={<Showcase/>} />
                      <Route path="/login" element={<Login/>} />
                      <Route path="/register" element={<Register redirectLogin={true}/>} />
                      <Route path="/profile" element={<Profile/>} />
                      <Route path="/add" element={<Register redirectLogin={false}/>} />
                      <Route path="/reset/password/:TOKEN" element={<ResetPassword/>} />
                      <Route path="/reset/password/mail" element={<Email/>} />
                  </Routes>
              </UserContext.Provider> : <Loading/>}

      </HashRouter>
  );
}

export default App;
