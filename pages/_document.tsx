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
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Host+Grotesk:ital,wght@0,300..800;1,300..800&family=Major+Mono+Display&family=Oswald:wght@200..700&family=Schoolbell&display=swap"
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
