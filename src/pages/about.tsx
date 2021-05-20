import React from 'react';
import SEO from 'components/seo';
import About from 'containers/about';

type AboutPageProps = {};

const AboutPage: React.FunctionComponent<AboutPageProps> = () => {
  return (
    <>
      <SEO
        title="О нас"
        description="history, Geek'n'History blog, kazakhstan"
      />
      <About />
    </>
  );
};

export default AboutPage;
