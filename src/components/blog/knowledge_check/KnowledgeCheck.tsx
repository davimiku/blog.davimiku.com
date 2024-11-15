import { ReactNode } from 'react'
import { FaSchool } from 'react-icons/fa'

import { EmphasisBox } from '../emphasis_box/EmphasisBox'

export type KnowledgeCheckProps = {
  children: ReactNode
}

export function KnowledgeCheck({ children }: KnowledgeCheckProps) {
  return (
    <EmphasisBox>
      <h3>
        <FaSchool />
        &nbsp; Knowledge Check
      </h3>
      {children}
    </EmphasisBox>
  )
}
