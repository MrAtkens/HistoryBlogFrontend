import React from 'react';
import SocialProfile from '~/components/social-profile/social-profile';
import {
  IntroWrapper,
  IntroTitle,
  Desciption,
  BgText,
  IntroContentWrapper,
} from './style';
import {
  IoLogoVk,
  IoLogoInstagram,
} from 'react-icons/io';

const SocialLinks = [
  {
    icon: <IoLogoInstagram />,
    url: '#',
    tooltip: 'Instagram',
  },
  {
    icon: <IoLogoVk />,
    url: '#',
    tooltip: 'VK',
  },
];

const Intro = (props) => {

  return (
    <IntroWrapper>
      <BgText>О НАС</BgText>
      <IntroContentWrapper>
        <IntroTitle>Мы вещаем о историй</IntroTitle>
        <Desciption>Every company has a story to tell, so break out your storytelling skills from that random English class you took years ago and put them to work on your “About Us” page. Using descriptive and emotive copy and gorgeous graphics, an “About Us” page with a story works.</Desciption>
        <SocialProfile items={SocialLinks} />
      </IntroContentWrapper>
    </IntroWrapper>
  );
};

export default Intro;
