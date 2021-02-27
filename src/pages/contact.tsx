import React from 'react';
import SEO from 'components/seo';
import Contact from 'containers/contact';

type ContactPageProps = {};

const ContactPage: React.FunctionComponent<ContactPageProps> = () => {
  return (
    <>
      <SEO
        title="Contact Us"
        description="StoryHub is a beautiful Gatsby Blog theme designed to showcase your work in style. Perfect for designers, artists, photographers and developers to use for their portfolio website."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
