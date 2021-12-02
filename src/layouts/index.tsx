import { PropsWithChildren } from 'react'
import Head from 'next/head'

import { Header } from 'components/layout/header'

import styles from './Layout.module.scss'
import { useColorSchemeClass } from '../hooks/useColorScheme'

export type LayoutProps = {
  title: string
  description: string
}

export default function Layout({
  children,
  title,
  description,
}: PropsWithChildren<LayoutProps>) {
  const className = useColorSchemeClass(styles, 'main')
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
        <meta name='description' content={description} />
        <title>{title}</title>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/favicon/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon/32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon/16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
      </Head>
      <Header />
      <main className={className}>{children}</main>
    </>
  )
}
