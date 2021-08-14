import React, {useEffect} from "react";
import Head from "next/head";

import {PersonalBlogWrapper, Posts, Banner, Quotes} from '~/containers/home';
import blogStore from '~/stores/blogStore'
import quoteStore from '~/stores/quotesStore'

const HomePage = (props) => {
    useEffect(() => {
        blogStore.getFeaturedBlogs().then(async () => {
            blogStore.getLatestBlogs().then(async () => {
                await quoteStore.getQuotes();
            });
        })
    },[])

    return (
        <>
            <Head>
                <title>Блог по историй Казахстана | Geek'n'History</title>
                <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
                <meta name="keywords" content="Казахстан, история, политика, блог, статьи, интересные, культура, читать, комментировать, смотреть, газета, книга" />
                <meta name="description" content="Интересные и увлекательные статьи о историй Казахстана, и не только Казахстана." />
            </Head>
            <PersonalBlogWrapper {...props}>
                <Banner/>
                <Posts/>
                <Quotes/>
            </PersonalBlogWrapper>
        </>
    );

};

export default HomePage;
