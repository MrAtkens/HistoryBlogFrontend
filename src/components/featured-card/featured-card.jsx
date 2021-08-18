import * as React from 'react';
import Link from 'next/link'
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
import kebabCase from "kebab-case"


const FeaturedCard = ({
                          image,
                          title,
                          category,
                          description,
                          id, creationDate,
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
                    <Link href={{
                        pathname: '/blog/[slug]',
                        query: {slug: id},
                    }}>
                        <Image aspectRatio={4 / 5} src={image.webImagePath} alt={image.alt}/>
                    </Link>
                </PostPreview>
            )}

            <PostDetails className="post_details">
                <PostMeta>
                    {tags === null || overlay === true ? null : (
                        <PostTags className="post_tags">
                            {tags.map((tag) => {
                                return(
                                    <Link href={{
                                        pathname: '/tags/[slug]',
                                        query: {slug: kebabCase(tag.slice(1))},
                                    }}>
                                        {kebabCase(tag)}
                                    </Link>
                            )})}
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
                    <Link href={{
                              pathname: '/category/[slug]',
                              query: {slug: category.name},
                          }}>
                        <a className="category">{category.name}</a>
                    </Link>
                    <p className="date">{creationDate}</p>
                </ReadMore>
            </PostDetails>
        </FeaturedCardWrapper>
    );
};

FeaturedCard.defaultProps = {
    imageType: 'fluid',
};

export default FeaturedCard;
