import React from 'react';
import SEO from 'components/seo';
import Contact from 'containers/contact';

type ContactPageProps = {};

const ContactPage: React.FunctionComponent<ContactPageProps> = () => {
  return (
    <>
      <SEO
        title="Contact Us"
        description="history, Geek'n'History blog, kazakhstan"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
