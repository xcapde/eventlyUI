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

    isPublisher(object){
        if(this.getAuthUser().id !== object.publisher.id) return false;
        return true;
    },

    isLogged(){
        if(localStorage.getItem("auth")) return true;
        return false;
    },
    
    logout(confirmation){
        if(confirmation){
            localStorage.removeItem("auth")
            window.location = "/"
        } return;
    },
};