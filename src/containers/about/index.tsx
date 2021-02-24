import * as React from 'react';
import Image from "material-ui-image";
import SocialProfile from 'components/social-profile/social-profile';
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoLinkedin,
} from 'react-icons/io';
import {
  AboutWrapper,
  AboutImage,
  AboutDetails,
  SocialProfiles,
} from './style';
import image from 'assets/image/about.jpg'
import Intro from "./intro";

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

interface AboutProps {}

const About: React.FunctionComponent<AboutProps> = () => {


  return (
    <AboutWrapper>
      <Intro />

      <AboutImage>
          <Image src={image} alt="author" aspectRatio={16/9} />
      </AboutImage>

      <AboutDetails>
        <h2>Hey there, what’s up?</h2>
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

export default About;
