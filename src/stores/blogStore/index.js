import { makeAutoObservable } from "mobx"
import { sort } from 'fast-sort';

import { blogsService } from '~/API'
import {SORT_BY_DATE, SORT_BY_TITLE, SORT_BY_VIEW} from "~/settings/constants";


class Blogs{
    blogs = [];
    blogsByTags = [];
    blogsByCategory = [];
    relatedBlogs = [];
    featuredBlogs = [];
    latestBlogs = [];
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
    countOfPages = 0;
    currentPage = 1;
    countOfBlogsOnPage = 3;
    blogsSortByAlpha = true;
    blogsSortByView = false;
    blogsSortByDate = false;
    blogsSortTitle = "Сортировка по названию ↑";
    blogLoading = false;

    constructor() {
        makeAutoObservable(this)
    }

    async getPageCount(){
        const response = await blogsService.getPageCount();
        this.countOfPages = response.data
    }

    async getBlogs(){
        const response = await blogsService.getBlogsApi(this.currentPage, this.countOfBlogsOnPage)
        this.setBlogs(response.data)
    }

    async getLatestBlogs(){
        const response = await blogsService.getLatestBlogs();
        this.setLatestBlogs(response.data)
    }

    async getFeaturedBlogs(){
        const response = await blogsService.getFeaturedBlogs();
        this.setFeaturedBlogs(response.data)
    }

    async getBlogsByTag(tag){
        const response = await blogsService.getBlogsByTag(tag);
        this.setBlogsByTags(response.data)
    }

    async getBlogsByCategory(category){
        const response = await blogsService.getBlogsByCategory(category)
        this.setBlogsByCategory(response.data)
    }

    async getRelatedBlogs(id, category){
        const response = await blogsService.getRelatedBlogs(id, category)
        this.setRelatedBlogs(response.data)
    }

    async getBlogById(id) {
        const response = await blogsService.getBlogByIdAPI(id);
        const blog = response.data;
        if(response.status === 200) {
            blog.tags = blog.tags.split(' ')
            blog.tags.pop()
            this.setBlog(response.data)
            this.blogLoading = true;
        }
    }

    sortBy(type){
        switch (type)
        {
            case SORT_BY_TITLE:
                if(this.blogsSortByAlpha) {
                    this.setBlogs(sort(this.blogs).by([{desc: blog => blog.title}]))
                    this.blogsSortByAlpha = false;
                    this.blogsSortByDate = false;
                    this.blogsSortByView = false;
                    this.blogsSortTitle = "Сортировка по названию ↓"
                }
                else {
                    this.setBlogs(sort(this.blogs).by([{asc: blog => blog.title}]))
                    this.blogsSortByAlpha = true;
                    this.blogsSortByDate = false;
                    this.blogsSortByView = false;
                    this.blogsSortTitle = "Сортировка по названию ↑"
                }
                break
            case SORT_BY_VIEW:
                if(this.blogsSortByView) {
                    this.setBlogs(sort(this.blogs).by([{asc: blog => blog.viewCount}]))
                    this.blogsSortByAlpha = false;
                    this.blogsSortByDate = false;
                    this.blogsSortByView = false;
                    this.blogsSortTitle = "Сортировка по количеству просмотров ↓"
                }
                else{
                    this.setBlogs(sort(this.blogs).by([{desc: blog => blog.viewCount}]))
                    this.blogsSortByAlpha = false;
                    this.blogsSortByDate = false;
                    this.blogsSortByView = true;
                    this.blogsSortTitle = "Сортировка по количеству просмотров ↑"
                }
                break
            case SORT_BY_DATE:
                if(this.blogsSortByDate) {
                    this.setBlogs(sort(this.blogs).by([{desc: blog => blog.creationDate}]))
                    this.blogsSortByAlpha = false;
                    this.blogsSortByDate = false;
                    this.blogsSortByView = false;
                    this.blogsSortTitle = "Сортировка по дате ↓"
                }
                else{
                    this.setBlogs(sort(this.blogs).by([{asc: blog => blog.creationDate}]))
                    this.blogsSortByAlpha = false;
                    this.blogsSortByDate = true;
                    this.blogsSortByView = false;
                    this.blogsSortTitle = "Сортировка по дате ↑"
                }
                break;

            default:
                alert('Default case');
        }
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

    get getLatestBlogsTable(){
        return this.latestBlogs
    }

    get getFeaturedBlogsTable(){
        return this.featuredBlogs
    }

    get getCountPages(){
        return this.countOfPages
    }

    get getCurrentPage(){
        return this.currentPage
    }

    get getBlogsSortTitle(){
        return this.blogsSortTitle
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

    setLatestBlogs(blogs){
        this.latestBlogs = blogs
    }

    setBlog(blog) {
        this.blog = blog
    }

    nextPage(){
        this.currentPage++;
    }

    prevPage(){
        this.currentPage--;
    }

}



export default new Blogs();
