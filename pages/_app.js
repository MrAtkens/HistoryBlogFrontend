import React from "react";
import {ToastContainer} from "react-toastify";
import {ThemeProvider} from 'styled-components'

import {theme} from '../public/theme';
import '../public/theme/global.css'
import '~/styles/globals.css'

import Layout from "~/components/layout";

export default function App({Component, pageProps}) {
    return (
        <ThemeProvider theme={theme}>
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
