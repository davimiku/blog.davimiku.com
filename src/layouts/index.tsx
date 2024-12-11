import { PropsWithChildren } from 'react'

import { Header } from 'components/header/Header'

export type LayoutProps = {
  title: string
  description: string
}

// TODO: investigate using pages/_document.tsx for anything common across all pages
// https://nextjs.org/docs/advanced-features/custom-document

export default function Layout({ children }: PropsWithChildren<LayoutProps>) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <footer></footer>
    </>
  )
}
