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
                <title>Geek'n'History - Исторический Блог без воды и каши</title>
                <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, maximum-scale=3, viewport-fit=cover' />
                <meta name="keywords" content="Казахстан история политика блог статьи интересные культура читать комментировать смотреть газета книга о нас Казахстана геополитека политика искуство язык казахский" />
                <meta name="description" content="Здесь собраны статьи по самым разным историческим периодам человечества написанные без воды и иногда даже с юмором. " />
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
