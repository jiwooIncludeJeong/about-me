import type { AppProps } from 'next/app';
import Head from 'next/head';
import { GlobalStyles } from '@styles/global-styles';
import { Normalize } from 'styled-normalize';
import Layout from '@components/Layout';
import { RecoilRoot } from 'recoil';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import SwiperCore, { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import '@styles/font.css';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>INCLUDE 정지우</title>
        <meta name="description" content="about-INCLUDE" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RecoilRoot>
        <Layout>
          <Normalize />
          <GlobalStyles />
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </>
  );
};

export default MyApp;
