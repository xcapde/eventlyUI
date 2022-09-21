import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Notifications } from "../pages/notifications/Notifications";
import { Search } from "../pages/search/Search";
import { Detail } from "../pages/detail/Detail";
import { LoginSignup } from "../pages/loginSignup/LoginSignup";
import { Profile } from "../pages/profile/Profile";
import { Upload } from "../pages/upload/Upload";
import { TagSearch } from "../pages/search/TagSearch";
import { AuthService } from "../services/AuthService";
import App from "../App";
import { JoinedList } from "../pages/profile/JoinedList";
import { PublishedList } from "../pages/profile/PublishedList";

export default function Router() {

    const AuthRoute = ({ children }) => {
        if (AuthService.getAuthUser())
            return <Navigate to="/home" />;
        return children
    };

    const AuthRequired = ({ children }) => {
        if (!AuthService.getAuthUser())
            return <Navigate to="/log-in" />;
        return children;
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/home" element={<App />} />
                <Route path="/events/:id" element={<Detail />} />
                <Route path="/search" element={<Search />} />
                <Route path="/events" search="?tag=tag" element={<TagSearch />} />
                <Route path="/log-in" element={
                    <AuthRoute>
                        <LoginSignup />
                    </AuthRoute>
                } />
                <Route path="/sign-up" element={
                    <AuthRoute>
                        <LoginSignup />
                    </AuthRoute>
                } />
                <Route path="/upload" element={
                    <AuthRequired>
                        <Upload />
                    </AuthRequired>
                } />
                <Route path="/update/:eventId" element={
                    <AuthRequired>
                        <Upload />
                    </AuthRequired>
                } />
                <Route path="/notifications" element={
                    <AuthRequired>
                        <Notifications />
                    </AuthRequired>
                } />
                <Route path="/profile" element={
                    <AuthRequired>
                        <Profile />
                    </AuthRequired>
                } />
                <Route path="/events/joined" element={
                    <AuthRequired>
                        <JoinedList />
                    </AuthRequired>
                } />
                <Route path="/events/published" element={
                    <AuthRequired>
                        <PublishedList />
                    </AuthRequired>
                } />
            </Routes>
        </BrowserRouter>
    )
}