import React, {useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {useRouter} from "next/router";

import {FeaturedPostCol, FeaturedPostRow, FeaturedPostWrapper, SecTitle} from "~/containers/home/posts/style";
import { TagPageHeading, TagName } from '~/containers/templates.style';
import FeaturedCard from "~/components/featured-card/featured-card"
import blogs from '~/stores/blogStore'
import Head from "next/head";

const TagsPage = observer(() => {

    const router = useRouter()
    useEffect(() => {
        blogs.getBlogsByTag(router.query.slug)
    },[router.query.slug])

    const blogsTag = blogs.getBlogsTableByTags
    return (
        <>
            <Head>
                <title>{router.query.slug} | Geek'n'History</title>
                <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, maximum-scale=3, viewport-fit=cover' />
                <meta name="keywords" content={router.query.slug} />
                <meta name="description" content={router.query.slug} />
            </Head>
            <TagPageHeading>
                <TagName>{router.query.slug}</TagName>
                {`A collection of ${blogsTag.length} post`}
            </TagPageHeading>
            <FeaturedPostWrapper>
                <FeaturedPostRow>
                    {blogsTag.map(item => {
                        const tags = item.tags.split(' ');
                        tags.pop()
                        return(
                            <FeaturedPostCol key={item.title}>
                                <FeaturedCard
                                    key={item.id}
                                    title={item.title}
                                    category={item.category}
                                    image={item.image}
                                    creationDate={item.creationDate}
                                    id={item.id}
                                    description={item.description}
                                    tags={tags}
                                />
                            </FeaturedPostCol>)
                    })}
                </FeaturedPostRow>
            </FeaturedPostWrapper>
        </>
    );
})

export default TagsPage;
