import * as React from 'react';
import _ from 'lodash';
import {
  PostDetailsWrapper,
  PostTitle,
  PostDate,
  PostPreview,
  PostDescriptionWrapper,
  PostDescription,
  PostTags, PostCategory,
} from './post-details.style';
import {Link} from "react-router-dom";

type PostDetailsProps = {
  title: string;
  date?: string;
  preview?: any;
  description: any;
  category: any;
  tags?: [];
  className?: string;
  imagePosition?: 'left' | 'top';
};

const PostDetails: React.FunctionComponent<PostDetailsProps> = ({
  title,
  date,
  preview,
  description, category,
  tags,
  className,
  imagePosition,
  ...props
}) => {
  const addClass: string[] = ['post_details'];

  if (imagePosition == 'left') {
    addClass.push('image_left');
  }

  if (className) {
    addClass.push(className);
  }

  return (
    <PostDetailsWrapper {...props} className={addClass.join(' ')}>
      {imagePosition == 'left' ? (
        <>
          {preview == null ? null : (
            <PostPreview className="post_preview">
              <img src={preview} alt={title} />
            </PostPreview>
          )}
        </>
      ) : (
        ''
      )}

      {imagePosition == 'top' ? (
        <>
          <PostCategory>
            <Link key={category.id} to={`/category/${category.name}`}>
              {category.name}
            </Link>
          </PostCategory>
          <PostTitle>{title}</PostTitle>
          <PostDate>{date}</PostDate>
        </>
      ) : (
        ''
      )}

      {imagePosition == 'top' ? (
        <>
          {preview == null ? null : (
            <PostPreview className="post_preview">
              <img src={preview} alt={title} />
            </PostPreview>
          )}
        </>
      ) : (
        ''
      )}
      <PostDescriptionWrapper className="post_des_wrapper">
        {imagePosition == 'left' ? (
          <>
            <PostCategory>{category}</PostCategory>
            <PostTitle>{title}</PostTitle>
            <PostDate>{date}</PostDate>
          </>
        ) : (
          ''
        )}
        <PostDescription
          dangerouslySetInnerHTML={{ __html: description }}
          className="post_des"
        />
        {tags == null ? null : (
          <PostTags>
            {tags.map((tag, index) => (
              <Link key={index} to={`/tags/${_.kebabCase(tag)}/`}>
                {`#${tag}`}
              </Link>
            ))}
          </PostTags>
        )}
      </PostDescriptionWrapper>
    </PostDetailsWrapper>
  );
};

PostDetails.defaultProps = {
  imagePosition: 'top',
};

export default PostDetails;