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
      </Head>
      <Header />
      <main className={className}>{children}</main>
    </>
  )
}
