import React, {Fragment} from "react";
import {
   IoLogoGithub,
} from 'react-icons/io';
import Head from "next/head";

import { AboutWrapper, AboutDetails, SocialProfiles, Intro } from '~/containers/about'
import SocialProfile from '~/components/social-profile/social-profile';
import styled from "styled-components";

const SocialLinks = [
    {
        icon: <IoLogoGithub size={40} />,
        url: 'https://github.com/MrAtkens',
        tooltip: 'Ссылка на Github разработчика',
    },
];

const AboutImage = styled.img`
  display: flex;
  align-items: center;
  width: 50%
  height: 20%
`;

const AboutPage = () => {
    return (
        <Fragment>
            <Head>
                <title>О нас | Geek'n'History</title>
                <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, maximum-scale=3, viewport-fit=cover' />
                <meta name="keywords" content="Казахстан история политика блог статьи интересные культура читать комментировать смотреть газета книга о нас Казахстана геополитека политика искуство язык казахский" />
                <meta name="description" content="Интересные и увлекательные статьи о историй Казахстана, и не только Казахстана." />
            </Head>
            <AboutWrapper>
                <Intro />
                {/*<AboutImageWrapper>*/}
                {/*    <AboutImage src='/static/image/about.jpg' alt="О нас" />*/}
                {/*</AboutImageWrapper>*/}

                <AboutDetails>
                    <h2>В чём же смысл? Да в том, чтобы хоть немного развить интерес к изучению истории если не всемирной, то уж нашего общего дома, Казахстана. Мы не светоч науки, что правда, но нам хотелось бы внести свой вклад в популяризацию истории. Наша мотивация - это историческая грамотность общества и любовь к истории. Наши амбиции - это вы, дорогие читатели.</h2>
                    <p>Внизу указан профиль разработчика сайта</p>
                    <SocialProfiles>
                        <SocialProfile items={SocialLinks} />
                    </SocialProfiles>
                </AboutDetails>
            </AboutWrapper>
        </Fragment>
    );
};

export default AboutPage;
