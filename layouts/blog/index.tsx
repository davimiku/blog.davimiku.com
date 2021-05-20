import { ReactNode } from 'react'


type FrontMatter = {
  title: string
  description: string
}

export type BlogsPageProps = {
    frontMatter: FrontMatter
    children: ReactNode
}

export default function BlogsPage({ children, frontMatter }: BlogsPageProps) {
    //
    return (
        <div>
            <h1>{frontMatter.title}</h1>
            {children}
        </div>
    )
}