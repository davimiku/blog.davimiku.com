import Head from 'next/head'
import { PropsWithChildren } from 'react'
import { Header } from '../components/layout/header/Header'

export type LayoutProps = {
  title: string
  description: string
}

export default function Layout({
  children,
  title,
  description,
}: PropsWithChildren<LayoutProps>) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
        <meta name='description' content={description} />
        <title>{title}</title>
      </Head>
      <Header />
      <main>{children}</main>
    </>
  )
}
