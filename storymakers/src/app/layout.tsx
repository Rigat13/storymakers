"use client";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Head from "next/head";

import { GoogleAnalytics,GoogleTagManager } from '@next/third-parties/google'

const montserrat = Montserrat({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <>
            <head>
                {/* Add viewport meta tag to force desktop view on mobile */}
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="google-site-verification" content="ese4CnUM1QG0KU_36jMW5tuiNbVpAFEhLft2eMYBmFY" />
            </head>
            <Head>
                {/* Add viewport meta tag to force desktop view on mobile */}
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="google-site-verification" content="ese4CnUM1QG0KU_36jMW5tuiNbVpAFEhLft2eMYBmFY" />
            </Head>

            <html lang="ca">
            <GoogleTagManager gtmId='GTM-N2K7KHR9' /> {/*GTM */}
            <body className={montserrat.className}>{children}</body>
            <GoogleAnalytics gaId="G-T4QXHX3Y73" />  {/*GA */}
            </html>
        </>
    );
}
