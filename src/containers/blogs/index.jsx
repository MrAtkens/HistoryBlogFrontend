import React from 'react';
import {observer} from "mobx-react-lite";
import { FaSortAlphaDownAlt, FaSortAlphaUpAlt, FaRegCalendarPlus, FaRegCalendarMinus } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"
import Link from "next/link";

import {FeaturedPostCol, FeaturedPostRow} from "~/containers/home/posts/style";
import { TagName, TagPageHeading, BlogPostsWrapper, Button, SortButtons, SortName, PostCategory, CategoryItem, Tooltip } from "./blogsStyle.style";
import FeaturedCard from "~/components/featured-card/featured-card"
import Pagination from "~/components/pagination/pagination";

import blogs from '~/stores/blogStore'
import category from '~/stores/categoryStore'
import { SORT_BY_DATE, SORT_BY_TITLE, SORT_BY_VIEW } from "~/settings/constants";

const Blogs = observer(() => {

    return (
            <BlogPostsWrapper>
                <TagPageHeading>
                    <PostCategory>
                        {category.getCategoriesTable.map(category => {
                           return (
                               <CategoryItem key={category.id}>
                                   <Link href={`/category/${category.name}`}>{category.name}</Link>
                                   <Tooltip>{category.description}</Tooltip>
                               </CategoryItem>
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
