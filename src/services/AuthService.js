export const AuthService = {
    
    saveAuthUser(authUser){
        localStorage.setItem("auth", JSON.stringify(authUser));  
    },

    getAuthUser(){
        const authJson = localStorage.getItem("auth")
        ? localStorage.getItem("auth")
        : false;
        return JSON.parse(authJson);
    },
}