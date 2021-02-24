import axios from 'axios'
import { URLBlog } from '../settings'

axios.defaults.withCredentials = true

const getBlogs = async () => {
    console.log(localStorage.getItem('token'));
    return await axios.get(`${URLBlog}/api/blog`).then(response => {
        return response
    }).catch(error => {
        return error.response
    })
}

const getBlogByIdAPI = async (id) => {
    return await axios.get(`${URLBlog}/api/blog/${id}`).then(response => {
        return response
    }).catch(error => {
        return error.response
    })
}


const getBlogsByTag = async (tag) => {
    return await axios.get(`${URLBlog}/api/blog/tags/${tag}`).then(response => {
        return response
    }).catch(error => {
        return error.response
    })
}


const getBlogsByCategory = async (category) => {
    return await axios.get(`${URLBlog}/api/blog/category/${category}`).then(response => {
        return response
    }).catch(error => {
        return error.response
    })
}


const getRelatedBlogs = async (id, category) => {
    return await axios.post(`${URLBlog}/api/blog/related`, {id: id, category: category}).then(response => {
        return response
    }).catch(error => {
        return error.response
    })
}

const getFeaturedBlogs = async () => {
    return await axios.get(`${URLBlog}/api/blog/featured`).then(response => {
        return response
    }).catch(error => {
        return error.response
    })
}

export const blogsService = {
    getBlogs,
    getBlogByIdAPI,
    getBlogsByTag,
    getBlogsByCategory,
    getFeaturedBlogs,
    getRelatedBlogs
};
