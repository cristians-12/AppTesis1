import axios from "axios";

const instancia = axios.create({
    baseURL:'191.168.4.1/',
    withCredentials:true,
})

export default instancia;