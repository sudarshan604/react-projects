import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
      key:'e11ec8f157e84d768496bc34ed0b1e53'
    }
})