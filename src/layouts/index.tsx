import { PropsWithChildren } from 'react'
import Head from 'next/head'

import { Header } from 'components/layout/header'

import styles from './Layout.module.scss'
import { useColorSchemeClass } from '../hooks/useColorScheme'

export type LayoutProps = {
  title: string
  description: string
}

// TODO: investigate using pages/_document.tsx for anything common across all pages
// https://nextjs.org/docs/advanced-features/custom-document

export default function Layout({ children, title, description }: PropsWithChildren<LayoutProps>) {
  const mainClass = useColorSchemeClass(styles, 'main')
  const footerClass = useColorSchemeClass(styles, 'footer')

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
        <meta name='description' content={description} />
        <title>{title}</title>
        <link rel='apple-touch-icon' sizes='180x180' href='/favicon/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon/32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon/16x16.png' />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
        {/* Investigate pages/_document.js */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Header />
      <main className={mainClass}>{children}</main>
      <footer className={footerClass}></footer>
    </>
  )
}
