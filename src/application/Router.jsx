import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import { LogInAndSignUp } from "../views/login/LogInAndSignUp";

export default function Router(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/login" element={<LogInAndSignUp/>}/>
                <Route path="/signup" element={<LogInAndSignUp/>}/>
            </Routes>
        </BrowserRouter>
    )
}