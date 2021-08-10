import * as React from 'react';
import {
    IoLogoFacebook,
    IoLogoTwitter,
    IoLogoInstagram,
    IoLogoLinkedin,
} from 'react-icons/io';
import Image from "material-ui-image"

import { AboutWrapper, AboutImage, AboutDetails, SocialProfiles, Intro } from '~/containers/about'
import SocialProfile from '~/components/social-profile/social-profile';

const SocialLinks = [
    {
        icon: <IoLogoFacebook />,
        url: 'https://www.facebook.com/redqinc/',
        tooltip: 'Facebook',
    },
    {
        icon: <IoLogoInstagram />,
        url: 'https://www.instagram.com/redqinc/',
        tooltip: 'Instagram',
    },
    {
        icon: <IoLogoTwitter />,
        url: 'https://twitter.com/redqinc',
        tooltip: 'Twitter',
    },
    {
        icon: <IoLogoLinkedin />,
        url: 'https://www.linkedin.com/company/redqinc/',
        tooltip: 'Linked In',
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

                <SocialProfiles>
                    <SocialProfile items={SocialLinks} />
                </SocialProfiles>
            </AboutDetails>
        </AboutWrapper>
    );
};

export default AboutPage;
