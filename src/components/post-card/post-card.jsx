import * as React from 'react';
import Link from "next/link";

import {
    PostCardWrapper,
    PostPreview,
    PostDetails,
    PostDate,
    PostTitle,
    Excerpt,
    PostContent,
    PostTags,
} from './post-card.style';
import kebabCase from "kebab-case";
import styled from "styled-components";

const CardImage = styled.img`
  display: flex;
  align-items: center;
  width: 50%
  height: 20%
`;

const PostCard = ({
                      image,
                      title,
                      description,
                      id,
                      date,
                      tags,
                      className,
                      imageType,
                      ...props
                  }) => {
    // Add all classs to an array
    const addAllClasses = ['post_card'];

    // className prop checking
    if (className) {
        addAllClasses.push(className);
    }

    return (
        <PostCardWrapper className={addAllClasses.join(' ')} {...props}>
            {image == null ? null : (
                <PostPreview className="post_preview">
                    <Link href={{
                        pathname: '/blog/[slug]',
                        query: {slug: id},
                    }}>                        {imageType === 'fluid' ? (
                        <CardImage src={image} alt={title}/>
                    ) : (
                        <CardImage src={image} alt={title}/>
                    )}
                    </Link>
                </PostPreview>
            )}

            <PostDetails className="post_details">
                {date && (
                    <PostDate
                        dangerouslySetInnerHTML={{
                            __html: date,
                        }}
                        className="post_date"
                    />
                )}

                <PostContent className="post_content">
                    <PostTitle className="post_title">
                        <Link href={{
                            pathname: '/blog/[slug]',
                            query: {slug: id},
                        }}>
                            {title}
                        </Link>
                    </PostTitle>
                    {description && (
                        <Excerpt
                            dangerouslySetInnerHTML={{
                                __html: description,
                            }}
                            className="excerpt"
                        />
                    )}

                    {tags == null ? null : (
                        <PostTags className="post_tags">
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
                </PostContent>
            </PostDetails>
        </PostCardWrapper>
    );
};

PostCard.defaultProps = {
    imageType: 'fluid',
};

export default PostCard;
