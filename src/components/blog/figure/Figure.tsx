import styles from './Figure.module.css'

export type FigureProps = {
  src: string
  caption: string
  alt?: string
}

export function Figure({ src, caption, alt }: FigureProps) {
  return (
    <figure className={styles['figure']}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt ?? caption} />
      <figcaption>{caption}</figcaption>
    </figure>
  )
}
