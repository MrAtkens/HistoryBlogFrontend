import axios from 'axios'
import { URLBlog } from '../settings'

axios.defaults.withCredentials = true

const getBlogs = async () => {
    console.log(localStorage.getItem('token'));
    return await axios.get(`${URLBlog}/api/blog`, {headers:
            { Authorization: `Bearer ${localStorage.getItem('jwt_token')}` }}).then(response => {
        return response
    }).catch(error => {
        return error.response
    })
}

const getBlogByIdAPI = async (id) => {
    return await axios.get(`${URLBlog}/api/blog/${id}`, {headers:
            { Authorization: `Bearer ${localStorage.getItem('jwt_token')}` }}).then(response => {
        return response
    }).catch(error => {
        return error.response
    })
}


const getBlogsByTag = async (tag) => {
    return await axios.post(`${URLBlog}/api/blog/tags`, {line: tag},{headers:
            { Authorization: `Bearer ${localStorage.getItem('jwt_token')}` }}).then(response => {
        return response
    }).catch(error => {
        return error.response
    })
}


const getBlogsByCategory = async (category) => {
    return await axios.post(`${URLBlog}/api/blog/category`, {line: category},{headers:
            { Authorization: `Bearer ${localStorage.getItem('jwt_token')}` }}).then(response => {
        return response
    }).catch(error => {
        return error.response
    })
}

export const blogsService = {
    getBlogs,
    getBlogByIdAPI,
    getBlogsByTag,
    getBlogsByCategory
};
