import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'
import { type JSX } from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    a,
    h2,
  }
}

function a(props: JSX.IntrinsicElements['a']) {
  const { children, href } = props
  if (href!.startsWith('https')) {
    return (
      <a {...props} rel='noreferrer'>
        {children}
        <span style={{ marginLeft: '0.25rem', verticalAlign: '0.25rem', fontSize: '0.75rem' }}>
          <FaExternalLinkAlt />
        </span>
      </a>
    )
  }
  return (
    <Link href={href!} {...props}>
      {children}
    </Link>
  )
}

function h2(props: JSX.IntrinsicElements['h2']) {
  const { children } = props
  if (typeof children === 'string') {
    const id = slugify(children)
    const href = `#${id}`

    return (
      <>
        <h2 id={id}>
          {children}
          <Link className='no-tufte-underline' href={href}>
            <span style={{ fontSize: '1.5rem' }}>🔗</span>
          </Link>{' '}
        </h2>
      </>
    )
  }

  return <h2 {...props}>{children}</h2>
}

function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, '')
    .replace(/[ ]/g, '-')
}
