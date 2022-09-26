const validation = {
    errorHandler(err){
        console.log(err)
        let error = err.response.data ? err.response.data : err;
        error = error.message ? error.message : error.error ? error.error : this.returnFirst(error) ? this.returnFirst(error) : "Something went wrong";
        return error;
    },
    returnFirst(obj){
        return Object.keys(obj).map((err, key)=> obj[err]).reverse()[0];
    }
}

export default validation;