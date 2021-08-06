import * as React from 'react';

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


const FeaturedCard= ({
  image,
  title,
    category,
  description,
  url, creationDate,
  tags,
  className,
  imageType,
  overlay,
  ...props
}) => {
  const addClass = ['featured_card'];

  if (overlay === true) {
    addClass.push('overlay');
  }

  if (className) {
    addClass.push(className);
  }

  return (
    <FeaturedCardWrapper className={addClass.join(' ')} {...props}>
      {image == null ? null : (
        <PostPreview className="post_preview">
          <a href={url}>
              <img src={image.webImagePath} alt={image.alt} />
          </a>
        </PostPreview>
      )}

      <PostDetails className="post_details">
        <PostMeta>
          {tags == null || overlay === true ? null : (
            <PostTags className="post_tags">
              {tags.map((tag, index) => (
                <a key={index} href={`/tags/${tag.toLowerCase()}`}>
                  #{tag.toLowerCase()}
                </a>
              ))}
            </PostTags>
          )}
        </PostMeta>

        <PostTitle className="post_title">
          <a href={url}>{title}</a>
        </PostTitle>
        {overlay === true ? (
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
            <a href={`/category/${category.name}`}>
              <a className="category">{category.name}</a>
            </a>
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
