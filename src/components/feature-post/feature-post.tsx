import * as React from 'react';
import _ from 'lodash';
import {
  FeaturedPostWrapper,
  Excerpt,
  PostDetails,
  ReadMore,
  PostTitle,
  PostMeta,
  PostTags,
} from './feature-post.style';
import { Link } from "react-router-dom";

interface FeaturedPostProps {
  title: string;
  url: string;
  description: string,
  creationDate: string,
  tags?: [];
  category: any;
  className?: string;
  placeholderBG?: string;
}

const FeaturedPost: React.FunctionComponent<FeaturedPostProps> = ({
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
                {tags.slice(0, 2).map((tag: string, index: number) => (
                    <Link
                        key={index}
                        to={`/tags/${_.kebabCase(tag)}/`}
                    >#{_.kebabCase(tag)}</Link>
                ))}
              </PostTags>
          )}
        </PostMeta>
        <PostTitle className="post_title">
          <Link to={url}>{title}</Link>
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
          <Link className="category" key={category.id} to={`/category/${category.name}`}>
            {category.name}
          </Link>
          <a className="date">{creationDate}</a>
        </ReadMore>
      </PostDetails>
    </FeaturedPostWrapper>
  );
};


export default FeaturedPost;
