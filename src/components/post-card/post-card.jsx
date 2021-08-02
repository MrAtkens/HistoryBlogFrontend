import * as React from 'react';
import Link from "next/link";
import Image from "next/image";

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


const PostCard = ({
                      image,
                      title,
                      description,
                      url,
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
                    <Link href={url}>
                        {imageType === 'fluid' ? (
                            <Image aspectRatio={17 / 11} src={image} alt="post preview"/>
                        ) : (
                            <Image aspectRatio={17 / 11} src={image} alt="post preview"/>
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
                        <Link href={url}>{title}</Link>
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
                            {tags.map((tag, index) => (
                                <Link key={index} to={`/tags/${tag.toLowerCase()}/`}>
                                    #{tag.toLowerCase()}
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