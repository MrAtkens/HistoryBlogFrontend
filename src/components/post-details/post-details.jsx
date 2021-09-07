import * as React from 'react';
import Link from "next/link";
import kebabCase from "kebab-case";

import {
  PostDetailsWrapper,
  PostTitle,
  PostDate,
  PostPreview,
  PostDescriptionWrapper,
  PostDescription, PostAuthor,
  PostTags, PostCategory,
} from './post-details.style';
import {CategoryItem, Tooltip} from "~/containers/blogs/blogsStyle.style";
import styled from "styled-components";



const PostDetails = ({
  title,
  date,
  preview,
  description, category,
  tags, authorName,
  className,
  ...props
}) => {
  const addClass = ['post_details'];

  if (className) {
    addClass.push(className);
  }

  return (
    <PostDetailsWrapper {...props} className={addClass.join(' ')}>
      <>
        <PostCategory>
          <CategoryItem key={category.id}>
            <Link href={{
              pathname: '/category/[slug]',
              query: {slug: category.name},
            }}>
              <a className="category">{category.name}</a>
            </Link>            <Tooltip>{category.description}</Tooltip>
          </CategoryItem>
        </PostCategory>
        <PostTitle>{title}</PostTitle>
        <PostDate>{date}</PostDate>
        <PostAuthor>Автор: <span style={{fontWeight: 700}}>{authorName}</span></PostAuthor>
      </>
      <PostPreview className="post_preview">
        <img src={preview} alt={title} />
      </PostPreview>

      <PostDescriptionWrapper className="post_des_wrapper">
        <PostDescription
            dangerouslySetInnerHTML={{ __html: description }}
            className="post_des"
        />
        {tags == null ? null : (
          <PostTags>
            {tags.map((tag) => (
                <Link href={{
                  pathname: '/tags/[slug]',
                  query: {slug: kebabCase(tag.slice(1))},
                }}>
                  {kebabCase(tag)}
                </Link>
            ))}
          </PostTags>
        )}
      </PostDescriptionWrapper>
    </PostDetailsWrapper>
  );
};

export default PostDetails;
