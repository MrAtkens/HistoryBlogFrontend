import { makeAutoObservable } from "mobx"
import { blogsService } from 'API'


export interface ISystem {
    blogs: Array<Object>;
    error: string;
    id: string;
}

class Blogs implements ISystem{
    blogs = [];
    blogsByTags = [];
    blogsByCategory = [];
    relatedBlogs = [];
    featuredBlogs = [];
    blog = {
        id: "",
        title: "",
        description: "",
        mainBlogText: "",
        category: {id: "", name: "", description: "", sortIndex: "", image: { imageName: "", webImagePath: "" }, alt: ""},
        tags: [],
        image: { imageName: "", webImagePath: ""},
        alt: "",
        creationDate: ""
    }
    error = "";
    id = "";

    constructor() {
        makeAutoObservable(this)
    }

    async getBlogs(){
        const response = await blogsService.getBlogs()
        console.log(response)
        this.setBlogs(response.data)
    }

    async getBlogsByTag(tag){
        const response = await blogsService.getBlogsByTag(tag);
        console.log(response)
        this.setBlogsByTags(response.data)
    }

    async getBlogsByCategory(category){
        const response = await blogsService.getBlogsByCategory(category)
        console.log(response)
        this.setBlogsByCategory(response.data)
    }

    async getRelatedBlogs(id, category){
        console.log(category)
        const response = await blogsService.getRelatedBlogs(id, category)
        console.log(response)
        this.setRelatedBlogs(response.data)
    }

    async getFeaturedBlogs(){
        const response = await blogsService.getFeaturedBlogs();
        console.log(response)
        this.setFeaturedBlogs(response.data)
    }

    async getBlogById(id) {
        const response = await blogsService.getBlogByIdAPI(id);
        const blog = response.data;
        blog.tags = blog.tags.split(' ')
        blog.tags.pop()
        console.log(blog)
        this.setBlog(response.data)
    }

    get getBlog(){
        return this.blog
    }

    get getBlogsTable(){
        return this.blogs
    }

    get getBlogsTableByTags(){
        return this.blogsByTags
    }

    get getBlogsTableByCategory(){
        return this.blogsByCategory
    }

    get getRelatedBlogsTable(){
        return this.relatedBlogs
    }

    get getFeaturedBlogsTable(){
        return this.featuredBlogs
    }


    setBlogs(blogs){
        this.blogs = blogs
    }

    setBlogsByTags(blogs){
        this.blogsByTags = blogs
    }

    setBlogsByCategory(blogs){
        this.blogsByCategory = blogs
    }

    setRelatedBlogs(blogs){
        this.relatedBlogs = blogs
    }

    setFeaturedBlogs(blogs){
        this.featuredBlogs = blogs
    }

    setBlog(blog) {
        this.blog = blog
    }
}



export default new Blogs();