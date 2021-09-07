import React, { Fragment } from 'react';
import Contact from '~/containers/contact';
import Head from "next/head";

const ContactPage = () => {
  return (
    <Fragment>
        <Head>
            <title>Наши контакты | Geek'n'History</title>
            <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, maximum-scale=3, viewport-fit=cover' />
            <meta name="keywords" content="Казахстан история политика блог статьи интересные культура читать комментировать смотреть газета книга о нас Казахстана геополитека политика искуство язык казахский" />
            <meta name="description" content="Здесь собраны статьи по самым разным историческим периодам человечества написанные без воды и иногда даже с юмором. " />
        </Head>
      <Contact />
    </Fragment>
  );
};

export default ContactPage;
