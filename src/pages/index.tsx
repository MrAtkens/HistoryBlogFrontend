import React from 'react';
import PersonalBlog from 'containers/home';
import SEO from 'components/seo';

const HomePage = () => {

  return (
    <>
      <SEO
        title="Домашняя страница"
        description={"history, Geek'n'History blog, kazakhstan"}
      />
      <PersonalBlog />
    </>
  );
};

export default HomePage;

