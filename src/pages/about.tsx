import React from 'react';
import SEO from 'components/seo';
import About from 'containers/about';

type AboutPageProps = {};

const AboutPage: React.FunctionComponent<AboutPageProps> = () => {
  return (
    <>
      <SEO
        title="About Us"
        description="StoryHub is a beautiful Gatsby Blog theme designed to showcase your work in style. Perfect for designers, artists, photographers and developers to use for their portfolio website."
      />
      <About />
    </>
  );
};

export default AboutPage;
