import axios from "axios";

export const baseUrl = "http://192.168.1.22:1337"//"https://admin.webbing-agency.com";
export const api = axios.create({
    baseURL: `${baseUrl}/api`,
    headers: {
        "Content-Type": "application/json",
    },
})

export const graphql = axios.create({
    baseURL: `${baseUrl}/graphql`,
    headers: {
        "Content-Type": "application/json",
    },
})