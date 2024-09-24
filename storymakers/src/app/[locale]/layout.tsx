//"use client";
import type { Metadata } from "next";
import { Atkinson_Hyperlegible, Montserrat } from "next/font/google";
import ".././globals.scss";
import Head from "next/head";

import ResponsiveAppBar from '../UI/appBar';
import AppFooter from '../UI/appFooter';

import {NextIntlClientProvider} from 'next-intl';
import {getMessages, unstable_setRequestLocale} from 'next-intl/server';
import {locales,styleLocales} from "../../config"


import { GoogleAnalytics,GoogleTagManager } from '@next/third-parties/google'

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-montserrat", });

const atkinson_Hyperlegible = Atkinson_Hyperlegible({subsets: ["latin"], weight:"400",variable: "--font-atkinson_hyperlegible",});  
  

export function generateStaticParams() {
      return locales.map((locale) => ({locale}));
    }

// either Static metadata
export const metadata: Metadata = {
  title: 'Storymakers.es',
}
    

export default async function RootLayout({
  children, params:{locale}
}: Readonly<{
  children: React.ReactNode;
  params:{locale:string};
}>) {

  // Enable static rendering
  unstable_setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  const pages = [
    {"tab":"about", "href":"/about","color":'black'},  
     {"tab":"campañas", "href":"/retos","color":'black'},
    {"tab":"blog", "href":"https://www.linkedin.com/company/stoymakers-es/posts/?feedView=all","color":'black'},
    {"tab":"contacto", "href":"https://tally.so/r/n9vM7p","color":'black'}];


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
            <html lang={locale}> 
            <GoogleTagManager gtmId='GTM-N2K7KHR9' />
            <body className={`${atkinson_Hyperlegible.className}`}> {/*montserrat.className */}
              <NextIntlClientProvider messages={messages}> {/* Provider de idiomas */}
              <ResponsiveAppBar pages={pages}  locales={locales} styleLocales={styleLocales}/>
                  {children}
              <AppFooter pages={pages}/>
              </NextIntlClientProvider>
              </body>
              <GoogleAnalytics gaId="G-T4QXHX3Y73" />
            </html>
        </>
    );
}
