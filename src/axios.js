import axios from "axios"
const instance=axios.create({
    baseURL: "https://api.themoviedb.org/3"
});

//instance.get();//append it after baseURL

export default instance;

