import React from "react";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
    console.log("hello world");
    return <Component {...pageProps} />;
}

export default MyApp;
