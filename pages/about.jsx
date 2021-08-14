import * as React from 'react';
import {
   IoLogoGithub,
} from 'react-icons/io';
import Image from 'next/image'

import { AboutWrapper, AboutImage, AboutDetails, SocialProfiles, Intro } from '~/containers/about'
import SocialProfile from '~/components/social-profile/social-profile';
import Head from "next/head";
import {Fragment} from "react";

const SocialLinks = [
    {
        icon: <IoLogoGithub />,
        url: 'https://github.com/MrAtkens',
        tooltip: 'Github',
    },
];


const AboutPage = () => {

    return (
        <Fragment>
            <Head>
                <title>Блог по историй Казахстана | Geek'n'History</title>
                <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
                <meta name="keywords" content="Казахстан, история, политика, блог, статьи, интересные, культура, читать, комментировать, смотреть, газета, книга" />
                <meta name="description" content="Интересные и увлекательные статьи о историй Казахстана, и не только Казахстана." />
            </Head>
            <AboutWrapper>
                <Intro />
                <AboutImage>
                    <Image layout='fill' src='/static/image/about.jpg' alt="О нас" />
                </AboutImage>

                <AboutDetails>
                    <h2>Хей ты пидор</h2>
                    <p>
                        Geek'n'History modern blog about history of Kazakhstan and world
                    </p>
                    <p>
                        Внизу указаны соцсети разработчика сайта BazarJokGroup.
                    </p>
                    <SocialProfiles>
                        <SocialProfile items={SocialLinks} />
                    </SocialProfiles>
                </AboutDetails>
            </AboutWrapper>
        </Fragment>
    );
};

export default AboutPage;
