import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta charSet='utf-8' />
        <meta name='color-scheme' content='dark light' />
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link rel='stylesheet' href='/styles/tufte.css' />
        <script type='module' src='/scripts/color-scheme.js' defer />
        <link rel='apple-touch-icon' sizes='180x180' href='/favicon/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon/32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon/16x16.png' />
        <link rel='manifest' href='/site.webmanifest' />
      </Head>
      <body className='sans'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
