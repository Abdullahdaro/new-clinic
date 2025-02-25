import { Html, Head, Main, NextScript } from "next/document";

export default function Document({ lang }) {
  return (
    <Html lang={lang}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
