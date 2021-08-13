import * as React from 'react';
import {
    IoLogoFacebook,
    IoLogoTwitter,
    IoLogoInstagram,
    IoLogoLinkedin, IoLogoGithub,
} from 'react-icons/io';
import Image from "material-ui-image"

import { AboutWrapper, AboutImage, AboutDetails, SocialProfiles, Intro } from '~/containers/about'
import SocialProfile from '~/components/social-profile/social-profile';

const SocialLinks = [
    {
        icon: <IoLogoGithub />,
        url: 'https://github.com/MrAtkens',
        tooltip: 'Github',
    },
];


const AboutPage = () => {

    return (
        <AboutWrapper>
            <Intro />
            <AboutImage>
                <Image aspectRatio={16/9} src='/static/image/about.jpg' alt="О нас" />
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
    );
};

export default AboutPage;
