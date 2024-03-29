export function shuffle(array: unknown[]): void {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- within array bounds
    ;[array[i], array[j]] = [array[j]!, array[i]!]
  }
}
