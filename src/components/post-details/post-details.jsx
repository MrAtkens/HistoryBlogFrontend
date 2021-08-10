import * as React from 'react';
import Link from "next/link";
import Image from 'material-ui-image'

import {
  PostDetailsWrapper,
  PostTitle,
  PostDate,
  PostPreview,
  PostDescriptionWrapper,
  PostDescription,
  PostTags, PostCategory,
} from './post-details.style';
import {CategoryItem, Tooltip} from "~/containers/blogs/blogsStyle.style";
import kebabCase from "kebab-case";

const PostDetails = ({
  title,
  date,
  preview,
  description, category,
  tags,
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
      </>
      <PostPreview className="post_preview">
        <Image aspectRatio={16/9} src={preview} alt={title} />
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
