import type { AppProps } from 'next/app'
import { MeshProvider } from "@meshsdk/react";
import "../Css/App.css";
import "../Css/Homepage.css";
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MeshProvider>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
          rel="stylesheet"
        />

        <link href="assets/vendor/aos/aos.css" rel="stylesheet" />
        <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
        <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
        <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
        <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />

        <link href="assets/css/style.css" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </MeshProvider>
  )
}
