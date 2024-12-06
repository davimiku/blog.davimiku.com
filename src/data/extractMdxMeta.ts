/**
 * Home-baked script to extract the metadata from all MDX artcicles
 * in the repository.
 */

import type { Expression } from 'acorn'
import { parseExpressionAt } from 'acorn'
import {
  articleCategories,
  isPublished,
  PublishedArticleMeta,
  withUrl,
  type ArticleMeta,
} from 'data/articles'

export async function extractPublishedMDXMeta(
  fs: typeof import('node:fs/promises'),
  readline: typeof import('node:readline'),
  path: typeof import('node:path'),
  createReadStream: typeof import('node:fs').createReadStream
): Promise<PublishedArticleMeta[]> {
  const allMeta = await extractMDXMeta(fs, readline, path, createReadStream)

  return allMeta.filter(meta => isPublished(meta)).map(withUrl)
}

export async function extractMDXMeta(
  ...[fs, readline, path, createReadStream]: Parameters<typeof extractPublishedMDXMeta>
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
    const metaString = await extractMetaString(filePath, readline, createReadStream)
    const metaObject = parseStringToObject(metaString)
    // TODO - implement better input parsing
    const articleMeta = metaObject as ArticleMeta
    allMetadata.push(articleMeta)
  }

  return allMetadata
}

const EXPORT_CONST_META = 'export const meta ='

async function extractMetaString(
  filePath: string,
  readline: typeof import('node:readline'),
  createReadStream: typeof import('node:fs').createReadStream
): Promise<string> {
  let output = ''
  const fileStream = createReadStream(filePath, { encoding: 'utf-8' })
  const rl = readline.createInterface({
    input: fileStream,
  })

  for await (const line of rl) {
    if (line.startsWith(EXPORT_CONST_META)) {
      output += line.replace(EXPORT_CONST_META, '')
    } else {
      output += line
    }
    if (line.trim() === '}') {
      break
    }
  }

  return output
}

function parseStringToObject(input: string): Record<string, unknown> {
  const output: Record<string, unknown> = {}

  const node = parseExpressionAt(input, 0, {
    ecmaVersion: 2022,
    sourceType: 'module',
  })

  if (node.type === 'ObjectExpression') {
    node.properties.forEach(prop => {
      if (prop.type === 'Property') {
        let key = ''
        let value: unknown = ''
        if (prop.key.type === 'Identifier') {
          key = prop.key.name
        }
        if (prop.value.type === 'Literal') {
          value = prop.value.value
        }
        if (prop.value.type === 'ArrayExpression') {
          value = parseArray(prop.value.elements as Expression[])
        }

        if (key && value) {
          output[key] = value
        }
      }
    })
  }
  return output
}

function parseArray(expressions: Expression[]): string[] {
  return expressions
    .map(expression => {
      if (expression.type === 'Literal') {
        return expression.value as string
      }
      return ''
    })
    .filter(Boolean)
}
