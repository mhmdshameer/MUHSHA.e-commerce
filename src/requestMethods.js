import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmQ5NzgxNzU0ODgxZTFiYWVhZTc3M2YiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE3MjYzNzg0OTgsImV4cCI6MTcyNjQ2NDg5OH0.uMPUHKR3MqVkR-SwVBcO_gtuwc3TgjavSRO0u_MMroc";


export const publicRequest = axios.create ({
    baseURL:BASE_URL,
})

export const userRequest = axios.create ({
    baseURL:BASE_URL,
    headers:{token: `Bearer ${TOKEN}`},
})
