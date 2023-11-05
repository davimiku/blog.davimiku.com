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
        <meta name='description' content={description} />
        <title>{title}</title>
      </Head>
      <Header />
      <main className={mainClass}>{children}</main>
      <footer className={footerClass}></footer>
    </>
  )
}
