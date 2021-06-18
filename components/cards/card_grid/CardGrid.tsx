import styles from './CardGrid.module.scss'

export type CardGridProps = {
  cards: React.ReactNode[]
}

export function CardGrid({ cards }: CardGridProps) {
  return <div className={styles['card-grid']}>{cards}</div>
}
