import React, {useEffect} from 'react';
import { observer } from 'mobx-react-lite';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { BannerWrapper, BannerInner, FeaturePosts, Title } from './style';
import FeaturePost from '~/components/feature-post/feature-post';
import blogs from '~/stores/blogStore'

const Banner = observer(() => {

    useEffect(() => {
        blogs.getFeaturedBlogs()
    },[])

  return (
      <Carousel showArrows={true} showStatus={false} emulateTouch={true}>
          {blogs.getFeaturedBlogsTable.map(blog => {
              const title = blog.title;
              // Random Placeholder Color
              const placeholderColors = [
                  '#55efc4',
                  '#81ecec',
                  '#74b9ff',
                  '#a29bfe',
                  '#ffeaa7',
                  '#fab1a0',
                  '#e17055',
                  '#0984e3',
                  '#badc58',
                  '#c7ecee',
              ];
              const setColor =
                  placeholderColors[
                      Math.floor(Math.random() * placeholderColors.length)
                      ];
              const tags = blog.tags.split(' ');
              tags.pop()
              return (
                      <BannerWrapper key={blog.id} style={{backgroundImage: `url(${blog.image.webImagePath})`}}>
                          <BannerInner>
                              <FeaturePosts>
                                  <Title>Рекомендуемые статьи</Title>
                                  <FeaturePost
                                      key={blog.id}
                                      title={title}
                                      category={blog.category}
                                      description={blog.description}
                                      creationDate={blog.creationDate}
                                      url={"/blog/"+blog.id}
                                      tags={tags}
                                      placeholderBG={setColor}
                                  />
                              </FeaturePosts>
                          </BannerInner>
                      </BannerWrapper>
              )})}
      </Carousel>
  );
})

export default Banner;
