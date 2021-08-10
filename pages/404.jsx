import React, {Fragment} from 'react';
import {IoMdArrowRoundBack} from "react-icons/io";
import Image from "material-ui-image"
import Link from "next/link";

import {Goback, Icon, NotFoundContent, NotFoundImage, NotFoundWrapper} from '~/containers/not-found';
import ResetCss from '~/components/reset-css';
import imageNotFound from '~/assets/image/404.png'

const NotFoundPage = () => {

    return (
        <Fragment>
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
