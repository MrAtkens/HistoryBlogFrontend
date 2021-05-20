import * as React from 'react';
import PersonalBlogWrapper from './style';
import Posts from './posts';
import Banner from './banner';
import Quotes from './quote'
import blogs from 'stores/blogsStore'
import quotes from 'stores/quotesStore'
import {useEffect} from "react";

type PersonalBlogProps = {};


const PersonalBlog: React.FunctionComponent<PersonalBlogProps> = (props) => {
    useEffect(() => {
        blogs.getLatestBlogs();
        quotes.getQuotes();
    },[])

  return (
    <PersonalBlogWrapper {...props}>
      <Banner/>
      <Posts />
      <Quotes />
    </PersonalBlogWrapper>
  );
};

export default PersonalBlog;
