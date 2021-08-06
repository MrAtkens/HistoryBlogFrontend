import axios from 'axios'
import { URLBlog } from '../settings'

axios.defaults.withCredentials = true

const getQuotesApi = async () => {
    return await axios.get(`${URLBlog}/api/quotes`).then(response => {
        console.log(response)
        return response
    }).catch(error => {
        return error.response
    })
}

const getQuoteByIdApi = async (id) => {
    return await axios.get(`${URLBlog}/api/quotes/${id}`).then(response => {
        return response
    }).catch(error => {
        return error.response
    })
}
export const quotesService = {
    getQuotesApi,
    getQuoteByIdApi,
};
