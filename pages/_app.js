/**
 * Using a custom _app.js with next-seo you can set default SEO
 * that will apply to every page. Full info on how the default works
 * can be found here: https://github.com/garmeeh/next-seo#default-seo-configuration
 */
import { DefaultSeo } from "next-seo";
import "../public/css/bootstrap.min.css";
import "../public/css/animate.css";
import "../public/css/style.css";
import "../public/css/default-style.css";
import "../public/css/responsive.css";
import "../public/css/fontawesomeall.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";


import SEO from "../next-seo.config";
export default function MyApp({ Component, pageProps }) {
  return (
    /* Here we call NextSeo and pass our default configuration to it  */
      <>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </>
     
  );
}
