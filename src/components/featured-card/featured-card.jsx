import * as React from 'react';
import Link from "next/link";
import Image from "next/image"

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
          <Link href={url}>
              <Image src={image.webImagePath} alt={image.alt} />
          </Link>
        </PostPreview>
      )}

      <PostDetails className="post_details">
        <PostMeta>
          {tags == null || overlay == true ? null : (
            <PostTags className="post_tags">
              {tags.map((tag, index) => (
                <Link key={index} href={`/tags/${tag.toLowerCase()}`}>
                  #{tag.toLowerCase()}
                </Link>
              ))}
            </PostTags>
          )}
        </PostMeta>

        <PostTitle className="post_title">
          <Link href={url}>{title}</Link>
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
            <Link  key={category.id} href={`/category/${category.name}`}>
              <a className="category">{category.name}</a>
            </Link>
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