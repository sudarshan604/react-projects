import axios, { CanceledError } from 'axios'

export default axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/',
    // headers:{} //if there is requirement in every request for headers


})
export {CanceledError}