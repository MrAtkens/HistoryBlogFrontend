import React, {useEffect} from "react";

import Blogs from "~/containers/blogs"
import blogStore from '~/stores/blogStore'
import categoryStore from '~/stores/categoryStore'

const BlogsPage = () => {
    useEffect(() => {
        blogStore.getPageCount().then(async () => {
            await categoryStore.getCategories()
        })
    },[])

    useEffect(() => {
        blogStore.getBlogs()
    }, [blogStore.getCurrentPage])

    return (
        <>
            <Blogs/>
        </>
    );
};

export default BlogsPage;
