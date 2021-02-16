import * as React from 'react';
import PersonalBlogWrapper from './style';
import Posts from './posts';
import Banner from './banner';
import blogs from 'stores/blogsStore'
import {useEffect} from "react";

type PersonalBlogProps = {};


const PersonalBlog: React.FunctionComponent<PersonalBlogProps> = (props) => {
    useEffect(() => {
        blogs.getBlogs();
    },[])

  return (
    <PersonalBlogWrapper {...props}>
      <Banner />
      <Posts />
    </PersonalBlogWrapper>
  );
};

export default PersonalBlog;
