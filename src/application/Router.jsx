import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import { LoginSignup } from "../pages/LoginSignup";

export default function Router(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/log-in" element={<LoginSignup/>}/>
                <Route path="/sign-up" element={<LoginSignup/>}/>
            </Routes>
        </BrowserRouter>
    )
}