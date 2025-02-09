import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        {/* 구글 폰트 preconnect 및 링크*/}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body style={{ fontFamily: 'Oswald, sans-serif' }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
