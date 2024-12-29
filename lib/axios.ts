import axios from "axios";

export const baseUrl = "https://admin.webbing-agency.com";
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