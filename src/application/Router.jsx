import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "../App";
import { Notifications } from "../components/notifications";
import { Profile } from "../components/profile/Porfile";
import { Search } from "../components/search/Search";
import { Detail } from "../pages/Detail/Detail";
import { LoginSignup } from "../pages/LoginSignup";
import { Upload } from "../pages/Upload/Upload";

export default function Router(){

    // const AuthRoute = ({children}) => {
    //     if(localStorage.getItem("auth_token")){
    //         return <Navigate to="/"/>;
    //     }
    //     return children;
    // };

    // const AuthRequired = ({children}) => {
    //     if(!localStorage.getItem("auth")){
    //         return <Navigate to="/log-in"/>;
    //     }
    //     return children;
    // };

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<App/>}/>
                <Route path="/events/:id" element={<Detail/>}/> 
                <Route path="/search" element ={<Search/>}/>
                <Route path="/upload" element={<Upload/>}/>
                <Route path="/update/:eventId" element={<Upload/>}/>
                <Route path="/notifications" element ={<Notifications/>}/>
                <Route path="/log-in" element={<LoginSignup/>}/>
                <Route path="/sign-up" element={<LoginSignup/>}/>
                <Route path="/profile" element ={<Profile/>}/>
            </Routes>
        </BrowserRouter>
    )
}