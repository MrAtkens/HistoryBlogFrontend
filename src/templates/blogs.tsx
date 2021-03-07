import React, {useEffect} from 'react';
import FeaturedCard from "components/featured-card/featured-card"
import SEO from 'components/seo';
import {observer} from "mobx-react-lite";

import { FaSortAlphaDownAlt, FaSortAlphaUpAlt, FaRegCalendarPlus, FaRegCalendarMinus, AiFillEye, AiFillEyeInvisible } from "react-icons/all";
import {FeaturedPostCol, FeaturedPostRow} from "containers/home/posts/style";
import { TagName, TagPageHeading, BlogPostsWrapper, Button, SortButtons, SortName, PostCategory } from "./blogsStyle.style";
import Pagination from "components/pagination/pagination";
import blogs from 'stores/blogsStore'
import category from 'stores/categoriesStore'
import {Link} from "react-router-dom";
import { SORT_BY_DATE, SORT_BY_TITLE, SORT_BY_VIEW } from "settings/constants";

const Blogs = observer(() => {
    // @ts-ignore
    useEffect(() => {
        blogs.getPageCount()
        category.getCategories()
    },[])

    useEffect(() => {
        blogs.getBlogs()
    }, [blogs.getCurrentPage])

    return (
            <BlogPostsWrapper>
                <SEO title={"Blogs in Geek'n'history"} description={`A collection of blogs`} />
                <TagPageHeading>
                    <TagName>Blogs in Geek'n'history</TagName>
                    <PostCategory>
                        {category.getCategoriesTable.map(category => {
                           return (
                                   <Link key={category.id} to={`/category/${category.name}`}>
                                       {category.name}
                                   </Link>
                           )
                        })}
                    </PostCategory>
                    <SortName>{blogs.getBlogsSortTitle}</SortName>
                    <SortButtons>
                        <Button>
                            <a onClick={() => blogs.sortBy(SORT_BY_TITLE)} aria-label="Sort by alphabet" >
                                {blogs.blogsSortByAlpha === true ? (<FaSortAlphaUpAlt />) : (<FaSortAlphaDownAlt/>)}
                            </a>
                        </Button>
                        <Button>
                            <a onClick={() => blogs.sortBy(SORT_BY_DATE)} aria-label="Sort by date">
                                {blogs.blogsSortByDate === true ? (<FaRegCalendarPlus />) : (<FaRegCalendarMinus/>)}
                            </a>
                        </Button>
                        <Button>
                            <a onClick={() => blogs.sortBy(SORT_BY_VIEW)} aria-label="Sort by view count">
                                {blogs.blogsSortByView === true ? (<AiFillEye />) : (<AiFillEyeInvisible/>)}
                            </a>
                        </Button>
                    </SortButtons>
                </TagPageHeading>
                <FeaturedPostRow>
                    {blogs.getBlogsTable.map(item => {
                        const tags = item.tags.split(' ');
                        tags.pop()
                        return(
                            <FeaturedPostCol key={item.title}>
                                <FeaturedCard
                                    key={item.id}
                                    title={item.title}
                                    category={item.category}
                                    image={item.image}
                                    creationDate={item.creationDate}
                                    url={"/blog/" + item.id}
                                    description={item.description}
                                    tags={tags}
                                />
                            </FeaturedPostCol>)
                    })}
                </FeaturedPostRow>
                {blogs.getCountPages > blogs.countOfBlogsOnPage ? (
                    <Pagination
                        currentPage={`${blogs.getCurrentPage}`}
                        totalPage={`${Math.ceil(blogs.getCountPages / blogs.countOfBlogsOnPage)}`}
                        className="pagination"
                    />
                ) : (
                    ""
                )}
            </BlogPostsWrapper>
    );
})

export default Blogs;
