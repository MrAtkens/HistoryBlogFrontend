import * as React from 'react';
import Link from "next/link";
import kebabCase from "kebab-case"

import {
  FeaturedPostWrapper,
  Excerpt,
  PostDetails,
  ReadMore,
  PostTitle,
  PostMeta,
  PostTags,
} from './feature-post.style';


const FeaturedPost = ({
  title,
  id, description, creationDate,
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
                    <Link href={{
                      pathname: '/tags/[slug]',
                      query: {slug: kebabCase(tag.slice(1))},
                    }}>
                      {kebabCase(tag)}
                    </Link>
                ))}
              </PostTags>
          )}
        </PostMeta>
        <PostTitle className="post_title">
          <Link href={{
            pathname: '/blog/[slug]',
            query: {slug: id},
          }}>
            {title}
          </Link>
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
          <Link href={{
            pathname: '/category/[slug]',
            query: {slug: category.name},
          }}>
            <a className="category">{category.name}</a>
          </Link>
          <p className="date">{creationDate}</p>
        </ReadMore>
      </PostDetails>
    </FeaturedPostWrapper>
  );
};


export default FeaturedPost;
