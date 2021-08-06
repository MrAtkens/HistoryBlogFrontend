import React, {useEffect} from "react";

import {PersonalBlogWrapper, Posts, Banner, Quotes} from '~/containers/home';
import blogStore from '~/stores/blogStore'
import quoteStore from '~/stores/quotesStore'

const HomePage = (props) => {
    useEffect(() => {
        blogStore.getLatestBlogs().then(async () => {
            await quoteStore.getQuotes();
        });
        console.log(quoteStore.quotes)
        console.log(blogStore.latestBlogs)
    },[])

    return (
        <PersonalBlogWrapper {...props}>
            {quoteStore.isLoading === true ? (<Banner/>) : (null)}
            {quoteStore.isLoading === true ? (<Posts/>) : (null)}
            {quoteStore.isLoading === true ? (<Quotes/>) : (null)}
        </PersonalBlogWrapper>
    );
};

export default HomePage;
