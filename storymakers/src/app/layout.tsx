"use client";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.scss";
import Head from "next/head";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import ResponsiveAppBar from './UI/appBar';


const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-montserrat", });

const theme=createTheme({
  typography:{
    fontFamily:montserrat.style.fontFamily,
  }

})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <>
            <Head>
                {/* Add viewport meta tag to force desktop view on mobile */}
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <html lang="ca">
            <body className={`${montserrat.className}`}>
            <ResponsiveAppBar/>
              {children}
              </body>
            </html>
        </>
    );
}
