import React, {useEffect} from 'react';
import FeaturedCard from "components/featured-card/featured-card"
import SEO from 'components/seo';
import { TagPageHeading, TagName } from './templates.style';
import {observer} from "mobx-react-lite";
import blogs from 'stores/blogsStore'
import { useParams, useLocation } from 'react-router-dom';
import {FeaturedPostCol, FeaturedPostRow, FeaturedPostWrapper, SecTitle} from "../containers/home/posts/style";

const Tags = observer(() => {
    // @ts-ignore
    let { id } = useParams();
      useEffect(() => {
            blogs.getBlogsByTag(id)
      },[id])
    const blogsTag = blogs.getBlogsTableByTags
      return (
        <>
          <SEO title={id} description={`A collection of ${blogsTag.length} post`} />
            <TagPageHeading>
              <TagName>#{id}</TagName>
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
                                image={item.image.webImagePath}
                                creationDate={item.creationDate}
                                url={"/blog/" + item.id}
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

export default Tags;
