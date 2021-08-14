import React from "react";
import {ToastContainer} from "react-toastify";
import {ThemeProvider} from 'styled-components'
import { YMInitializer } from 'react-yandex-metrika';

import Layout from "~/components/layout";
import {theme} from '~/../public/theme';
import '~/styles/globals.css'
import '~/../public/theme/global.css'

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
            <YMInitializer accounts={[83860999]} options={{webvisor: true}}/>
        </ThemeProvider>
    )
}
