import { type ReactNode } from 'react'

export type FootnoteProps = {
  index: string
  children?: ReactNode
}

/**
 * Creates a footnote with a hyperlink
 *
 * Pass no `children` to generate the footnote link for the body of the
 * article, and pass `children` to generate the footnote for the bottom of
 * the article.
 */
export function Footnote({ index, children }: FootnoteProps) {
  const returnId = `footnote-${index}-return`
  const bottomId = `footnote-${index}`

  if (!children) {
    return (
      <a id={returnId} href={'#' + bottomId} title={`read footnote ${index}`}>
        &nbsp;<sup>{index}</sup>&nbsp;
      </a>
    )
  }

  return (
    <li id={bottomId}>
      <sup>{index}</sup>&nbsp;
      {children}
      <a href={'#' + returnId} title={`return to the article at footnote reference ${index}`}>
        &nbsp;↩︎&nbsp;
      </a>
    </li>
  )
}
