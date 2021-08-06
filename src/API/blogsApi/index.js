import axios from 'axios'
import { URLBlog } from '../settings'

axios.defaults.withCredentials = true

const getBlogsApi = async (currentPage, countPerPage) => {
    return await axios.post(`${URLBlog}/api/blog/page`, {
        page: currentPage,
        countPerPage: countPerPage
    }).then(response => {
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


const getLatestBlogs = async () => {
    return await axios.get(`${URLBlog}/api/blog/latest`).then(response => {
        console.log(response)
        return response
    }).catch(error => {
        return error.response
    })
}

const getPageCount = async () => {
    return await axios.get(`${URLBlog}/api/blog/count`).then(response => {
        return response
    }).catch(error => {
        return error.response
    })
}

export const blogsService = {
    getBlogsApi,
    getBlogByIdAPI,
    getBlogsByTag,
    getBlogsByCategory,
    getFeaturedBlogs,
    getLatestBlogs,
    getRelatedBlogs,
    getPageCount
};
