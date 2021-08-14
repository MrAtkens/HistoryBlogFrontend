import React from "react";
import Document, {Html, Head, Main, NextScript} from 'next/document'

import {ServerStyleSheet} from 'styled-components'
import {GA_TRACKING_ID} from "~/settings/gtag";

export default class MyDocument extends Document {
    render() {
        console.log(process.env.gtag)
        return (
            <Html lang="ru">
                <Head>
                    <meta charSet="utf-8"/>
                    <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
                    <meta name="theme-color" content="#D10068"/>
                    <meta name='application-name' content="GeekHistory" />
                    <meta name='apple-mobile-web-app-capable' content='yes' />
                    <meta name='apple-mobile-web-app-status-bar-style' content='default' />
                    <meta name='apple-mobile-web-app-title' content='GeekNHistory' />
                    <meta name='description' content='Блог про историю' />
                    <meta name='format-detection' content='telephone=no' />
                    <meta name='mobile-web-app-capable' content='yes' />
                    <meta name='msapplication-config' content='/static/icons/browserconfig.xml' />
                    <meta name="msapplication-TileColor" content="#ffffff"/>
                    <meta name='msapplication-tap-highlight' content='no' />
                    <meta name="msapplication-TileImage" content="/static/icons/mstile-144x144.png"/>
                    <meta name="theme-color" content="#ffffff"/>

                    <meta name='twitter:card' content='summary' />
                    <meta name='twitter:url' content='https://geeknhistory.kz' />
                    <meta name='twitter:title' content='GeekNHistory' />
                    <meta name='twitter:description' content='Блог про историю' />
                    <meta name='twitter:image' content='https://geeknhistory.kz/static/icons/android-chrome-192x192.png' />
                    <meta name='twitter:creator' content='@Raiymbek' />
                    <meta property='og:type' content='website' />
                    <meta property='og:title' content='GeekNHistory' />
                    <meta property='og:description' content='Блог про историю' />
                    <meta property='og:site_name' content='Geeknhistory' />
                    <meta property='og:url' content='https://geeknhistory.kz' />
                    <meta property='og:image' content='https://geeknhistory.kz/static/icons/apple-touch-icon.png' />

                    <link rel="apple-touch-icon" sizes="180x180" href="/static/icons/apple-touch-icon.png"/>
                    <link rel="icon" type="image/png" sizes="32x32" href="/static/icons/favicon-32x32.png"/>
                    <link rel="icon" type="image/png" sizes="16x16" href="/static/icons/favicon-16x16.png"/>
                    <link rel="mask-icon" href="/static/icons/safari-pinned-tab.svg" color="#5bbad5"/>
                    <link rel='shortcut icon' href='/static/icons/favicon.ico' />
                    <link rel='manifest' href='/manifest.json' />
                    <link rel="preload" as="font" href="/static/fonts/FiraSans-Regular.ttf" type="font/ttf" crossOrigin="anonymous"/>
                    <link rel="preload" as="font" href="/static/fonts/FiraSans-Medium.ttf" type="font/ttf" crossOrigin="anonymous"/>
                    <link rel="preload" as="font" href="/static/fonts/FiraSans-SemiBold.ttf" type="font/ttf" crossOrigin="anonymous"/>
                    <link rel="preload" as="font" href="/static/fonts/FiraSans-Bold.ttf" type="font/ttf" crossOrigin="anonymous"/>
                    <link rel="preload" as="font" href="/static/fonts/FiraSans-ExtraBold.ttf" type="font/ttf" crossOrigin="anonymous"/>

                    <link rel="preload" as="font" href="/static/fonts/Poppins-Regular.ttf" type="font/ttf" crossOrigin="anonymous"/>
                    <link rel="preload" as="font" href="/static/fonts/Poppins-Medium.ttf" type="font/ttf" crossOrigin="anonymous"/>
                    <link rel="preload" as="font" href="/static/fonts/Poppins-SemiBold.ttf" type="font/ttf" crossOrigin="anonymous"/>
                    <link rel="preload" as="font" href="/static/fonts/Poppins-Bold.ttf" type="font/ttf" crossOrigin="anonymous"/>
                    <link rel="preload" as="font" href="/static/fonts/Poppins-ExtraBold.ttf" type="font/ttf" crossOrigin="anonymous"/>
                    <script
                        async
                        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                    />

                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', '${GA_TRACKING_ID}', {
                              page_path: window.location.pathname,
                            });
                          `,
                        }}
                    />
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }

    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                })

            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            }
        } finally {
            sheet.seal()
        }
    }
}
