import * as React from 'react';
import Link from "next/link";

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
            <Link to={`/category/${category.name}`}>{category.name}</Link>
            <Tooltip>{category.description}</Tooltip>
          </CategoryItem>
        </PostCategory>
        <PostTitle>{title}</PostTitle>
        <PostDate>{date}</PostDate>
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
            {tags.map((tag, index) => (
              <Link key={index} href={`/tags/${tag.toLowerCase()}/`}>
                {`#${tag}`}
              </Link>
            ))}
          </PostTags>
        )}
      </PostDescriptionWrapper>
    </PostDetailsWrapper>
  );
};

export default PostDetails;
