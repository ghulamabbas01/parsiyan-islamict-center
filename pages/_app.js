import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Parsiyan Cultural Assocation</title>
        <meta
          name="description"
          content="Parsiyan Cultural Association is a non-profit organization that strives to preserve and promote the culture and rich traditions of our shared civilizational and cultural heritage. This association works with a steadfast determination to become a trusted platform for cultural and social exchange and participation."
        />
        <meta property="og:image" content="https://i.ibb.co/fNdWGsB/logo.jpg" />
        <meta
          name="keywords"
          content="Parsiyan Cultural Assocation,Parsiyan islamic center,ParsiyanCulturalAssocation,islam,true islam,parsiyan cultural,true islam,true muslim,a true muslim,true islam org,true meaning of islam,true regarding the message of islam,the true islam,true quran,the true face of islam,real meaning of islam"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* google font start  */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&family=Urbanist:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        {/* google font start  */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
        />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
