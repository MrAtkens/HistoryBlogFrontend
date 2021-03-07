import * as React from 'react';
import { observer } from 'mobx-react-lite';
import FeaturedCard from "components/featured-card/featured-card"
import {
    FeaturedPostWrapper,
    FeaturedPostRow,
    FeaturedPostCol,
    SecTitle,
} from "./style"
import blogs from 'stores/blogsStore'

type PostsProps = {};

const Posts: React.FunctionComponent<PostsProps> = observer(() => {
  return (
      <FeaturedPostWrapper>
          <SecTitle>Latest Stories</SecTitle>
          <FeaturedPostRow>
              {blogs.getLatestBlogsTable.map(blog => {
                  const title = blog.title
                  const tags = blog.tags.split(' ');
                  tags.pop()
                  return (
                      <FeaturedPostCol key={title}>
                          <FeaturedCard
                              title={title}
                              image={blog.image}
                              url={"/blog/"+blog.id}
                              creationDate={blog.creationDate}
                              category={blog.category}
                              tags={tags}
                              description={blog.description}
                          />
                      </FeaturedPostCol>
                  )
              })}
          </FeaturedPostRow>
      </FeaturedPostWrapper>
  );
})

export default Posts;
