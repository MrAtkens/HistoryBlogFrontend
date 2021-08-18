import React, {Fragment} from 'react';
import {IoMdArrowRoundBack} from "react-icons/io";
import Image from "material-ui-image"
import Link from "next/link";

import {Goback, Icon, NotFoundContent, NotFoundImage, NotFoundWrapper} from '~/containers/not-found';
import ResetCss from '~/components/reset-css';
import imageNotFound from '~/assets/image/404.png'
import Head from "next/head";

const NotFoundPage = () => {

    return (
        <Fragment>
            <Head>
                <title>Блог по историй Казахстана | Geek'n'History</title>
                <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, maximum-scale=3, viewport-fit=cover' />
                <meta name="keywords" content="Казахстан, история, политика, блог, статьи, интересные, культура, читать, комментировать, смотреть, газета, книга" />
                <meta name="description" content="Интересные и увлекательные статьи о историй Казахстана, и не только Казахстана." />
            </Head>
            <ResetCss/>
            <NotFoundWrapper>
                <NotFoundContent>
                    <h1>Страница потерялась</h1>
                    <p>
                        Страница которую вы хотели посмотреть в данный момент не доступна
                    </p>
                    <Goback>
                        <Link href="/">
                            <a>
                                <Icon>
                                    <IoMdArrowRoundBack/>
                                </Icon>
                                Вернуться
                            </a>
                        </Link>
                    </Goback>
                </NotFoundContent>
                <NotFoundImage>
                    <Image src={imageNotFound} alt="Страница 404 не найдено"/>
                </NotFoundImage>
            </NotFoundWrapper>
        </Fragment>
    );
};

export default NotFoundPage;
