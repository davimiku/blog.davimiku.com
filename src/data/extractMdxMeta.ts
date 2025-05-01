/**
 * Extract metadata from MDX frontmatter
 */

import { fromMarkdown } from 'mdast-util-from-markdown'
import { frontmatterFromMarkdown } from 'mdast-util-frontmatter'
import { frontmatter } from 'micromark-extension-frontmatter'

import {
  articleCategories,
  isArticleMeta,
  isPublished,
  PublishedArticleMeta,
  withUrl,
  type ArticleMeta,
} from 'data/articles'

export async function extractPublishedMDXMeta(
  fs: typeof import('node:fs/promises'),
  path: typeof import('node:path')
): Promise<PublishedArticleMeta[]> {
  const allMeta = await extractMDXMeta(fs, path)

  return allMeta.filter(meta => isPublished(meta)).map(withUrl)
}

export async function extractMDXMeta(
  fs: typeof import('node:fs/promises'),
  path: typeof import('node:path')
): Promise<ArticleMeta[]> {
  const allMetadata: ArticleMeta[] = []
  let articleFilePaths: string[] = []

  for (const category of articleCategories) {
    const folder = path.join('src', 'pages', category)
    const filePaths = (await fs.readdir(folder, { withFileTypes: true }))
      .filter(file => file.name.endsWith('.mdx'))
      .map(file => path.join(file.parentPath, file.name))

    articleFilePaths = articleFilePaths.concat(filePaths)
  }

  for (const filePath of articleFilePaths) {
    const metaObject = await extractMeta(filePath, fs)
    if (isArticleMeta(metaObject)) {
      allMetadata.push(metaObject)
    }
  }

  return allMetadata
}

async function extractMeta(
  filePath: string,
  fs: typeof import('node:fs/promises')
): Promise<Record<string, unknown>> {
  const doc = await fs.readFile(filePath)

  const tree = fromMarkdown(doc, {
    extensions: [frontmatter()],
    mdastExtensions: [frontmatterFromMarkdown()],
  })

  const nodes = tree.children.filter(child => child.type === 'yaml')
  const frontMatterNode = nodes[0]

  if (!frontMatterNode) return {}

  const pairs: [string, string][] = []
  for (const line of frontMatterNode.value.split('\n')) {
    // the value may have a ':' character
    const [key, ...values] = line.split(':')
    let value = values.join(':')
    value = value.trim()
    // some values may have been formatted explicitly with quotes
    if (value.startsWith('"')) {
      value = value.slice(1, value.length - 1)
    }
    if (key && value) {
      pairs.push([key.trim(), value])
    }
  }

  const metaObject: Record<string, unknown> = Object.fromEntries(pairs)
  parseMetaFields(metaObject)
  return metaObject
}

function parseMetaFields(obj: Record<string, unknown>) {
  if (typeof obj.tags === 'string') {
    obj.tags = obj.tags.split(',').map((each: string) => each.trim())
  } else {
    obj.tags = []
  }
  for (const intField of ['seriesIndex', 'seriesLastIndex', 'readingTime']) {
    if (typeof obj[intField] === 'string') {
      const int = Number.parseInt(obj[intField])
      if (Number.isNaN(int)) {
        delete obj[intField]
      } else {
        obj[intField] = int
      }
    }
  }
}
