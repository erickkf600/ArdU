import axios from 'axios'

const AppConfig = axios.create({
    baseURL: 'https://reqres.in/api/',
})

export default AppConfig