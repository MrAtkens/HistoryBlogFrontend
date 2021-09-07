import React, {useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {useRouter} from "next/router";
import kebabCase from "kebab-case";
import Disqus from "disqus-react";
import Link from "next/link";
import Head from "next/head";

import Skeleton from "react-loading-skeleton";
import {
    FacebookShareButton,
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

const BlogPostTemplate = observer(() => {
    // @ts-ignore
    const router = useRouter()
    useEffect(() => {
        blogStore.getBlogById(router.query.slug)
    }, [router.query.slug])
    const blog = blogStore.getBlog

    useEffect(() => {
        blogStore.getRelatedBlogs(router.query.slug, blog.category.name)
    }, [blog])

    return (
        <>
            <Head>
                <title>{blog.title} | Geek'n'History</title>
                <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, maximum-scale=3, viewport-fit=cover' />
                <meta name="keywords" content={blog.tags} />
                <meta name="description" content={blog.mainBlogText} />
            </Head>
            <BlogPostDetailsWrapper>
                {blogStore.blogLoading === true ? (
                    <>
                        <PostDetails
                            category={blog.category}
                            title={blog.title}
                            date={blog.creationDate}
                            preview={blog.image.webImagePath}
                            description={blog.mainBlogText}
                            authorName={blog.authorName}
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
                                <span>Поделиться:</span>
                                <FacebookShareButton url={"/"} quote={blog.title}>
                                    <IoLogoFacebook size={30}/>
                                </FacebookShareButton>
                                <VKShareButton url={location.pathname} title={blog.title}
                                               image={blog.image.webImagePath}>
                                    <IoLogoVk size={30}/>
                                </VKShareButton>
                                <InstapaperShareButton url={location.pathname} title={blog.title}>
                                    <IoLogoInstagram size={30}/>
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
                    </>
                ) : (<Skeleton className="blog-details-skeleton" count={1}/>)}
            </BlogPostDetailsWrapper>
            {blogStore.getRelatedBlogsTable.length !== 0 && (
                <RelatedPostWrapper>
                    <RelatedPostTitle>Похожие статьи</RelatedPostTitle>
                    <RelatedPostItems>
                        {blogStore.getRelatedBlogsTable.map(blog => {
                            const tags = blog.tags.split(' ');
                            tags.pop()
                            return (
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
    );
});

export default BlogPostTemplate;

