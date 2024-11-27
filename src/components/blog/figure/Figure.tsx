export type FigureProps = {
  src: string
  caption: string
  alt?: string
}

export function Figure({ src, caption, alt }: FigureProps) {
  return (
    <figure>
      <img src={src} alt={alt ?? caption} />
      <figcaption>{caption}</figcaption>
    </figure>
  )
}
