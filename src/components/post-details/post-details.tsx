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
import Image from 'material-ui-image'
import {CategoryItem, Tooltip} from "../../templates/blogsStyle.style";

type PostDetailsProps = {
  title: string;
  date?: string;
  preview?: any;
  description: any;
  category: any;
  tags?: [];
  className?: string;
};

const PostDetails: React.FunctionComponent<PostDetailsProps> = ({
  title,
  date,
  preview,
  description, category,
  tags,
  className,
  ...props
}) => {
  const addClass: string[] = ['post_details'];

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
        <Image aspectRatio={16/9} src={preview} alt={title} />
      </PostPreview>

      <PostDescriptionWrapper className="post_des_wrapper">
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

export default PostDetails;