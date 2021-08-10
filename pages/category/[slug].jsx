import React, {useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {useRouter} from "next/router";

import {
    TagPageHeading,
    TagName,
} from '~/containers/templates.style';
import {FeaturedPostCol, FeaturedPostRow, FeaturedPostWrapper} from "~/containers/home/posts/style";
import FeaturedCard from "~/components/featured-card/featured-card";
import blogs from "~/stores/blogStore";

const CategoryPage = observer(() => {
    const router = useRouter()
    useEffect(() => {
        blogs.getBlogsByCategory(router.query.slug)
    },[router.query.slug])

    const blogsCategory = blogs.getBlogsTableByCategory
    return (
        <>
            <TagPageHeading>
                <TagName>{router.query.slug}</TagName>
                {`A collection of ${blogsCategory.length} post`}
            </TagPageHeading>
            <FeaturedPostWrapper>
                <FeaturedPostRow>
                    {blogsCategory.map(item => {
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

export default CategoryPage;
