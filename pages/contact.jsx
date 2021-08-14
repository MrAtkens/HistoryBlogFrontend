import React, { Fragment } from 'react';
import Contact from '~/containers/contact';
import Head from "next/head";

const ContactPage = () => {
  return (
    <Fragment>
        <Head>
            <title>Блог по историй Казахстана | Geek'n'History</title>
            <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
            <meta name="keywords" content="Казахстан, история, политика, блог, статьи, интересные, культура, читать, комментировать, смотреть, газета, книга" />
            <meta name="description" content="Интересные и увлекательные статьи о историй Казахстана, и не только Казахстана." />
        </Head>
      <Contact />
    </Fragment>
  );
};

export default ContactPage;
