import styles from './BlockQuote.module.css'

export type BlockQuoteProps = {
  content: string
  footer: string
}

export function BlockQuote({ content, footer }: BlockQuoteProps) {
  return (
    <div className={'epigraph ' + styles['epigraph']}>
      <blockquote>
        <p>{content}</p>
        <footer>{footer}</footer>
      </blockquote>
    </div>
  )
}
