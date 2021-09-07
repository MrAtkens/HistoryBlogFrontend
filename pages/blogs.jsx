import React, {useEffect} from "react";

import Blogs from "~/containers/blogs"
import blogStore from '~/stores/blogStore'
import categoryStore from '~/stores/categoryStore'
import Head from "next/head";

const BlogsPage = () => {
    useEffect(() => {
        blogStore.getPageCount().then(async () => {
            await categoryStore.getCategories()
        })
    },[])

    useEffect(() => {
        blogStore.getBlogs()
    }, [blogStore.getCurrentPage])

    return (
        <>
            <Head>
                <title>Статьи блога | Geek'n'History</title>
                <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, maximum-scale=3, viewport-fit=cover' />
                <meta name="keywords" content="Казахстан история политика блог статьи интересные культура читать комментировать смотреть газета книга о нас Казахстана геополитека политика искуство язык казахский" />
                <meta name="description" content="Здесь собраны статьи по самым разным историческим периодам человечества написанные без воды и иногда даже с юмором. " />
            </Head>
            <Blogs/>
        </>
    );
};

export default BlogsPage;
