import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "161927a54951be3f3e6176ca3d4c85a0",
        language: "ko-KR"
    }
})

export default instance;