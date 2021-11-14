import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Head from 'next/head'

const Layout = ({ children }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=7" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
    </Head>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
