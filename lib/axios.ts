import axios from "axios";

export const baseUrl = "http://194.164.77.238:1337";
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