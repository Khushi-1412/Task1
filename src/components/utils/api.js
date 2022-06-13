import axios from "axios"

export const BASE_URL = "http://localhost:8080/hrc_web"

const API = async (
    endPoint,
    req = { body: {} },
    type = "GET"
) => {
    try {
        const request = {
            url: BASE_URL + endPoint,
            body: req.body,
        }

        switch (type) {
            case "POST":
                return axios.post(request.url, req.body, {})

            case "GET":
                return axios.get(request.url, {})

            case "PUT":
                return axios.put(request.url, req.body, {})

            case "DELETE":
                return axios.delete(request.url, { data: request.body } || {})

            default:
                return { success: false, data: { message: "Unknown API request" } }
        }
    } catch (error) {
        console.log("ERROR:", error)
    }
    return { hello: "hi" }
}

export default API