import React, {useEffect} from "react";

import {PersonalBlogWrapper, Posts, Banner, Quotes} from '~/containers/home';
import blogStore from '~/stores/blogStore'
import quoteStore from '~/stores/quotesStore'

const HomePage = (props) => {
    useEffect(() => {
        blogStore.getLatestBlogs().then(async () => {
            await quoteStore.getQuotes();
        });
    },[])

    return (
        <PersonalBlogWrapper {...props}>
            <Banner/>
            <Posts/>
            <Quotes/>
        </PersonalBlogWrapper>
    );
};

export default HomePage;
