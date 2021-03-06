import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

interface PageProps {
  children: React.ReactNode | React.ReactNode[];
}

const Layout: React.FC<PageProps> = ({ children }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=7,ie=edge,chrome=1" />
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
      <meta name="robots" content="max-image-preview:large" />
      <meta name="handHeldFriendly" content="True" />
      <meta name="mobileOptimized" content="375" />
      <link rel="canonical" href="https://cubicle.vercel.app" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@m3_rashid" />

      <link rel="apple-touch-icon" href="/fav.png" type="image/x-icon" />
      <link rel="shortcut icon" href="/fav.png" type="image/x-icon" />
    </Head>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
