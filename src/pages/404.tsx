import React from 'react';
import ResetCss from 'components/reset-css';
import SEO from 'components/seo';
import NotFound from 'containers/not-found';
import Footer from 'components/footer/footer';

const NotFoundPage = () => {
  return (
    <>
      <ResetCss />
      <SEO title="404: Not Found" />
      <NotFound />
        <Footer>
            Hello it's &copy; {new Date().getFullYear()}
            <a href="">Geek'n'History.</a>
        </Footer>
    </>
  );
};

export default NotFoundPage;
