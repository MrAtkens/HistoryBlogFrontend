import * as React from 'react';
import {
  FeaturedPostWrapper,
  Excerpt,
  PostDetails,
  ReadMore,
  PostTitle,
  PostMeta,
  PostTags,
} from './feature-post.style';
import Link from "next/link";

const FeaturedPost = ({
  title,
  url, description, creationDate,
  tags, category,
  className,
  placeholderBG,
  ...props
}) => {
  // Add all classs to an array
  const addAllClasses = ['featured_post'];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  return (
    <FeaturedPostWrapper className={addAllClasses.join(' ')} {...props}>
      <PostDetails>
        <PostMeta>
          {tags == null ? null : (
              <PostTags className="post_tags">
                {tags.slice(0, 2).map((tag) => (
                    <a href={`/tags/${tag.toLowerCase()}/`}
                    >#{tag.toLowerCase()}</a>
                ))}
              </PostTags>
          )}
        </PostMeta>
        <PostTitle className="post_title">
          <a href={url}>{title}</a>
        </PostTitle>
        <>
          {' '}
          {description && (
              <Excerpt
                  dangerouslySetInnerHTML={{
                    __html: description,
                  }}
                  className="excerpt"
              />
          )}
        </>
        <ReadMore className="read_more">
          <a href={`/category/${category.name}`}>
            <a className="category">{category.name}</a>
          </a>
          <a className="date">{creationDate}</a>
        </ReadMore>
      </PostDetails>
    </FeaturedPostWrapper>
  );
};


export default FeaturedPost;
