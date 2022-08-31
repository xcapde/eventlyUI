export const AuthService = {
    
    saveAuthUser(authUser){
        localStorage.setItem("auth", JSON.stringify(authUser));  
    },
}