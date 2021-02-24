import React, {useEffect} from 'react';
import { useParams, useLocation } from 'react-router-dom';
import {Link} from "react-router-dom";
import {observer} from "mobx-react-lite";
import _ from "lodash";
import { DiscussionEmbed } from 'disqus-react';
import SEO from 'components/seo';
import PostCard from 'components/post-card/post-card';
import PostDetails from 'components/post-details/post-details';
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
} from './templates.style';
import blogs from 'stores/blogsStore'

const BlogPostTemplate = observer(() => {
  // @ts-ignore
  let { id } = useParams();
  const location = useLocation();
  useEffect(() => {
    blogs.getBlogById(id)
  },[id])
  const blog = blogs.getBlog

  useEffect(() => {
    blogs.getRelatedBlogs(id, blog.category.name)
  }, [blog])
  
  return (
    <>
        <SEO
            title={blog.title}
            description={blog.description}
        />
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
                      <Link key={tag} to={`/tags/${_.kebabCase(tag)}/`}>
                        #{_.kebabCase(tag)}
                      </Link>
                  ))}
                </PostTags>
            )}
            <PostShare>
              <span>Share This:</span>
              <FacebookShareButton url={location.pathname} quote={blog.title}>
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
            <DiscussionEmbed
                config={{
                url: window.location.href,
                identifier: blog.id,
                title: blog.title,
              }}  shortname={"blog.disqus.com/embed.js"}/>
          </BlogPostComment>
        </BlogPostDetailsWrapper>

        {blogs.getRelatedBlogsTable.length !== 0 && (
            <RelatedPostWrapper>
              <RelatedPostTitle>Related Posts</RelatedPostTitle>
              <RelatedPostItems>
                {blogs.getRelatedBlogsTable.map(blog => {
                  const tags = blog.tags.split(' ');
                  tags.pop()
                  return(
                  <RelatedPostItem key={blog.id}>
                    <PostCard
                        title={blog.title}
                        url={"/blog/" + blog.id}
                        image={blog.image.webImagePath}
                        tags={tags}
                    />
                  </RelatedPostItem>
                  )
                })}
              </RelatedPostItems>
            </RelatedPostWrapper>
        )}
      </>
  );
});

export default BlogPostTemplate;

