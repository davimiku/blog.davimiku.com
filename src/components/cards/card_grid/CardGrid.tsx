import styles from './CardGrid.module.css'

export type CardGridProps = {
  cards: React.ReactNode[]
}

export function CardGrid({ cards }: CardGridProps) {
  return <div className={styles['card-grid']}>{cards}</div>
}
