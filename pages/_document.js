import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* <meta http-equiv="Content-Security-Policy" name="viewport" content="initial-scale=1.0, width=device-width" /> */}
          {/* <meta http-equiv="Content-Security-Policy" content="script-src 'self'"/>  */}
          {/* <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/> */}
          {/* <meta http-equiv="x-dns-prefetch-control" content="on"/> */}
          {/* <title>My page</title> */}
          {/* <meta http-equiv="Content-Security-Policy" content="default-src https: ;report-uri /csp-violation-report-endpoint/"/> */}
          {/* <meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'self' www.google-analytics.com 'unsafe-inline'; style-src 'self' https://fonts.googleapis.com 'unsafe-inline'; font-src 'self' https://fonts.gstatic.com; base-uri 'self';"/>  */}
         
          {/* Poppins */}
          <link
            rel="preconnect"
            rel="preload"
            href="https://fonts.gstatic.com"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
          {/* Source Sans Pro */}
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200&display=swap"
            rel="stylesheet"
          />
          {/* Maven pro */}
          {/* <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Maven+Pro:wght@800&display=swap" rel="stylesheet" /> */}

          {/* Animate CSS */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
            integrity="sha512-c42qTSw/wPZ3/5LBzD+Bw5f7bSF2oxou6wEb+I/lqeaKV5FDIfMvvRp772y4jcJLKuGUOpbJMdg/BTl50fJYAw=="
            crossorigin="anonymous"
          />
          {/* Montserrat */}
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;800&display=swap"
            rel="stylesheet"
          />

          {/* Fav Icon */}
          <link rel="shortcut icon" href="/img/blue-logo.svg" />
          {/* Maven Pro */}
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400;600;800&display=swap"
            rel="stylesheet"
          />

          {/* SF PRO */}
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700;900&display=swap"
            rel="stylesheet"
          />

          {/* Open Sans */}
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;0,800;1,400;1,700&display=swap"
            rel="stylesheet"
          />
        
          <meta http-equiv="Content-Security-Policy" name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta http-equiv="Content-Security-Policy" content="script-src 'self'"/> 
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
          {/* <meta http-equiv="x-dns-prefetch-control" content="on"/> */}
          {/* <title>My page</title> */}
          {/* <meta http-equiv="Content-Security-Policy" content="default-src https: ;report-uri /csp-violation-report-endpoint/"/> */}
          {/* <meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'self' www.google-analytics.com 'unsafe-inline'; style-src 'self' https://fonts.googleapis.com 'unsafe-inline'; font-src 'self' https://fonts.gstatic.com; base-uri 'self';"/>  */}
         
           {/* <meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'self' www.google-analytics.com 'unsafe-inline'; style-src 'self' https://fonts.googleapis.com 'unsafe-inline'; font-src 'self' https://fonts.gstatic.com; base-uri 'self';"/>  */}
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
