import React from 'react';
import SocialProfile from '~/components/social-profile/social-profile';
import {
  IntroWrapper,
  IntroTitle,
  Description,
  BgText,
  IntroContentWrapper,
} from './style';
import {
  IoLogoVk,
  IoLogoInstagram,
} from 'react-icons/io';

const SocialLinks = [
  {
    icon: <IoLogoInstagram size={50} />,
    url: '#',
    tooltip: 'Наша группа в Instagram',
  },
  {
    icon: <IoLogoVk size={50} />,
    url: '#',
    tooltip: 'Наша группа в VK',

  },
];

const Intro = () => {
  return (
    <IntroWrapper>
      <BgText>О НАС</BgText>
      <IntroContentWrapper>
        <IntroTitle>Об историческом блоге Geek’n’History</IntroTitle>
        <Description>
          Этот блог - кладовка с самыми разными статьями, порой даже не первой свежести. История всё-таки, не обессудьте. Эксперты ли мы? Отнюдь. Просто кучка студентов-энтузиастов, которые любят историю и хотят поделиться этой любовью с другими. Поэтому не воспринимайте статьи тут написанные как истину в последней инстанции. Это развлекательно-познавательный контент. А мы лишь излагаем мысли, констатируем факты так, как видим их сами.
        </Description>
        <SocialProfile items={SocialLinks} />
      </IntroContentWrapper>
    </IntroWrapper>
  );
};

export default Intro;
