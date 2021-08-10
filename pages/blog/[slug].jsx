import React, {useEffect} from 'react';
import {observer} from "mobx-react-lite";
import Disqus from "disqus-react"
import Link from "next/link"

import Skeleton from "react-loading-skeleton";
import {
    FacebookShareButton,
    TelegramShareButton,
    InstapaperShareButton,
    VKShareButton
} from 'react-share';
import {
    IoLogoFacebook,
    IoLogoInstagram,
    IoLogoVk
} from 'react-icons/io';

import PostCard from '~/components/post-card/post-card';
import PostDetails from '~/components/post-details/post-details';

import {
    BlogPostDetailsWrapper,
    RelatedPostWrapper,
    RelatedPostItems,
    RelatedPostTitle,
    RelatedPostItem,
    BlogPostFooter,
    PostShare,
    PostTags,
    BlogPostComment,
} from '~/containers/templates.style';
import blogStore from '~/stores/blogStore'
import {useRouter} from "next/router";
import kebabCase from "kebab-case";

const BlogPostTemplate = observer(() => {
    // @ts-ignore
    const router = useRouter()
    useEffect(() => {
        blogStore.getBlogById(router.query.slug)
    },[router.query.slug])
    const blog = blogStore.getBlog

    useEffect(() => {
        blogStore.getRelatedBlogs(router.query.slug, blog.category.name)
    }, [blog])

    return (
        <>
            {blogStore.blogLoading === true ? (
                <>
                    <BlogPostDetailsWrapper>
                        <PostDetails
                            category={blog.category}
                            title={blog.title}
                            date={blog.creationDate}
                            preview={blog.image.webImagePath}
                            description={blog.mainBlogText}
                        />
                        <BlogPostFooter>
                            {blog.tags == null ? null : (
                                <PostTags className="post_tags">
                                    {blog.tags.map(tag => (
                                        <Link href={{
                                            pathname: '/tags/[slug]',
                                            query: {slug: kebabCase(tag)},
                                        }}>
                                            {kebabCase(tag)}
                                        </Link>
                                    ))}
                                </PostTags>
                            )}
                            <PostShare>
                                <span>Share This:</span>
                                <FacebookShareButton url={"/"} quote={blog.title}>
                                    <IoLogoFacebook />
                                </FacebookShareButton>
                                <VKShareButton url={location.pathname} title={blog.title} image={blog.image.webImagePath}>
                                    <IoLogoVk/>
                                </VKShareButton>
                                <InstapaperShareButton url={location.pathname} title={blog.title}>
                                    <IoLogoInstagram/>
                                </InstapaperShareButton>
                            </PostShare>
                        </BlogPostFooter>
                        <BlogPostComment>
                            <Disqus.DiscussionEmbed
                                config={{
                                    url: window.location.href,
                                    identifier: blog.id,
                                    title: blog.title,
                                }} shortname={"http-geeknhistory-kz"}/>
                        </BlogPostComment>
                    </BlogPostDetailsWrapper>
                    {blogStore.getRelatedBlogsTable.length !== 0 && (
                        <RelatedPostWrapper>
                            <RelatedPostTitle>Related Posts</RelatedPostTitle>
                            <RelatedPostItems>
                                {blogStore.getRelatedBlogsTable.map(blog => {
                                    const tags = blog.tags.split(' ');
                                    tags.pop()
                                    return(
                                        <RelatedPostItem key={blog.id}>
                                            <PostCard
                                                title={blog.title}
                                                id={blog.id}
                                                image={blog.image.webImagePath}
                                                tags={tags}
                                            />
                                        </RelatedPostItem>
                                    )
                                })}
                            </RelatedPostItems>
                        </RelatedPostWrapper>)}
                </>
            ) : (<Skeleton className="blog-detail-skeleton" count={1} width={1170} height={670}/>)}
        </>
    );
});

export default BlogPostTemplate;

