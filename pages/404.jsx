import React, {Fragment} from 'react';
import {IoMdArrowRoundBack} from "react-icons/io";
import Image from 'next/image'
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
                    <h1>This Page Was Lost</h1>
                    <p>
                        The Page You are looking for isn’t available. Try to search again or
                        use the Go Back button below.
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
                    <Image src={imageNotFound} alt="author"/>
                </NotFoundImage>
            </NotFoundWrapper>
        </Fragment>
    );
};

export default NotFoundPage;
