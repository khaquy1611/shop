import React from 'react';
import Head from 'next/head';
import Footer from 'components/layout/Footer';
import Header from 'components/layout/Header';
import type { AppProps } from 'next/app';
import 'styles/assets/css/custom.scss';
import 'styles/assets/css/bootstrap.scss';
import 'styles/assets/css/oxygen.scss';
import 'styles/assets/css/skins/green.scss';
import 'styles/assets/css/js_composer.min.scss';
import 'styles/assets/css/slick-theme.scss';
import 'styles/assets/css/buy-now-button-for-woocommerce.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>SHOP2PAY</title>
        <link rel="icon" href="/images/s2p-icon.png" />
      </Head>
      <Header />
      <div className="main">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
};

export default MyApp;
