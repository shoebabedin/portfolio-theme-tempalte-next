import "bootstrap/dist/css/bootstrap.min.css";
// bootstrap
import { useEffect } from "react";
// slick
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
// slick
import "node-self";
import Layout from "../components/Layout/Layout";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
