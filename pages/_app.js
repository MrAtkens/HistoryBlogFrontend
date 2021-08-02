import React from "react";
import Head from "next/head";
import {ToastContainer} from "react-toastify";
import {ThemeProvider} from 'styled-components'

import Layout from "~/components/layout";
import {theme} from '~/theme';

import '~/styles/globals.css'
import * as dataLayer from "mobx";

export default function App({Component, pageProps}) {
    return (
        <ThemeProvider theme={theme}>
            <Head>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                <meta name="theme-color" content="#D10068"/>
                <title>Исторический блог Geek'n'History</title>
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover/>
        </ThemeProvider>
    )
}
