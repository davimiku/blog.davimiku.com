import { MarginNote } from '../marginnote/MarginNote'
import styles from './Figure.module.scss'

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
      <p>
        <MarginNote id={src}>{caption}</MarginNote>
      </p>
    </figure>
  )
}
