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
    blog = {  title: "",
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


    setBlogs(blogs){
        this.blogs = blogs
    }

    setBlogsByTags(blogs){
        this.blogsByTags = blogs
    }

    setBlog(blog) {
        this.blog = blog
    }
}



export default new Blogs();