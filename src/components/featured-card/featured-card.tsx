import * as React from 'react';

import _ from 'lodash';
import Image from 'material-ui-image'
import {
  FeaturedCardWrapper,
  PostPreview,
  PostDetails,
  PostTitle,
  PostTags,
  PostMeta,
  ReadMore,
  Excerpt,
} from './featured-card.style';
import {Link} from "react-router-dom";

interface FeaturedCardProps {
  image?: any;
  title: string;
  description?: string;
  url: string;
  creationDate: string;
  tags?: [];
  className?: string;
  imageType?: 'fixed' | 'fluid';
  overlay?: boolean;
}

const FeaturedCard: React.FunctionComponent<FeaturedCardProps> = ({
  image,
  title,
  description,
  url, creationDate,
  tags,
  className,
  imageType,
  overlay,
  ...props
}) => {
  const addClass = ['featured_card'];

  if (overlay == true) {
    addClass.push('overlay');
  }

  if (className) {
    addClass.push(className);
  }

  return (
    <FeaturedCardWrapper className={addClass.join(' ')} {...props}>
      {image == null ? null : (
        <PostPreview className="post_preview">
          <Link to={url}>
            <Image src={image} alt="post preview" />
          </Link>
        </PostPreview>
      )}

      <PostDetails className="post_details">
        <PostMeta>
          {tags == null || overlay == true ? null : (
            <PostTags className="post_tags">
              {tags.map((tag: string, index: number) => (
                <Link key={index} to={`/tags/${_.kebabCase(tag)}`}>
                  {tag}
                </Link>
              ))}
            </PostTags>
          )}
        </PostMeta>

        <PostTitle className="post_title">
          <Link to={url}>{title}</Link>
        </PostTitle>
        {overlay == true ? (
          ''
        ) : (
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
        )}

        <ReadMore className="read_more">
          <Link to={url}>{overlay == true ? 'Read Story' : 'Read More'}</Link>
          <a className="date">{creationDate}</a>
        </ReadMore>
      </PostDetails>
    </FeaturedCardWrapper>
  );
};

FeaturedCard.defaultProps = {
  imageType: 'fluid',
};

export default FeaturedCard;
