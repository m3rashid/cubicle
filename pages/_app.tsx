import React from "react";

import "../styles/globals.scss";
import { Layout } from "../components";

interface PageProps {
  Component: React.ElementType;
  pageProps: React.ReactPropTypes;
}

const MyApp: React.FC<PageProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
