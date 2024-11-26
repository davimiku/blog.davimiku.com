export type FigureProps = {
  src: string
  caption: string
}

export function Figure({ src, caption }: FigureProps) {
  return (
    <figure>
      <img src={src} alt={caption} />
      <figcaption>{caption}</figcaption>
    </figure>
  )
}
