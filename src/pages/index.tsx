import React from 'react';
import PersonalBlog from 'containers/home';
import SEO from 'components/seo';

const HomePage = () => {

  return (
    <>
      <SEO
        title="Geek'n'History blog"
        description={"history, blog, kazakhstan"}
      />
      <PersonalBlog />
    </>
  );
};

export default HomePage;

