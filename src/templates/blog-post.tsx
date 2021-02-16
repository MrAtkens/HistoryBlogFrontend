import React, {useEffect} from 'react';
import { useParams, useLocation } from 'react-router-dom';
import {Link} from "react-router-dom";
import {observer} from "mobx-react-lite";
import _ from "lodash";
import { DiscussionEmbed } from 'disqus-react';
import Layout from 'components/layout';
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

const BlogPostTemplate = observer((props: any) => {
  // @ts-ignore
  let { id } = useParams();
  const location = useLocation();
  console.log(location)
  useEffect(() => {
    blogs.getBlogById(id)
  },[])
  const blog = blogs.getBlog
  return (
    <>
        <SEO
            title={blog.title}
            description={blog.description}
        />
        <BlogPostDetailsWrapper>
          <PostDetails
              title={blog.title}
              date={blog.creationDate}
              preview={blog.image.webImagePath}
              description={blog.description}
          />

          <BlogPostFooter>
            {blog.tags == null ? null : (
                <PostTags className="post_tags">
                  {blog.tags.map(tag => (
                      <Link key={tag} to={`/tags/${_.kebabCase(tag)}/`}>
                        {`#${tag}`}
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
          {/*<BlogPostComment>*/}
          {/*  <DiscussionEmbed {...disqusConfig} />*/}
          {/*</BlogPostComment>*/}
        </BlogPostDetailsWrapper>

        {/*{edges.length !== 0 && (*/}
        {/*    <RelatedPostWrapper>*/}
        {/*      <RelatedPostTitle>Related Posts</RelatedPostTitle>*/}
        {/*      <RelatedPostItems>*/}
        {/*        {edges.map(({ node }: any) => (*/}
        {/*            <RelatedPostItem key={node.fields.slug}>*/}
        {/*              <PostCard*/}
        {/*                  title={node.frontmatter.title || node.fields.slug}*/}
        {/*                  url={node.fields.slug}*/}
        {/*                  image={*/}
        {/*                    node.frontmatter.cover == null*/}
        {/*                        ? null*/}
        {/*                        : node.frontmatter.cover.childImageSharp.fluid*/}
        {/*                  }*/}
        {/*                  tags={node.frontmatter.tags}*/}
        {/*              />*/}
        {/*            </RelatedPostItem>*/}
        {/*        ))}*/}
        {/*      </RelatedPostItems>*/}
        {/*    </RelatedPostWrapper>*/}
        {/*)}*/}
      </>
  );
});

export default BlogPostTemplate;

