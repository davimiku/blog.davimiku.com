export const messageCatalog = createMessageCatalog({
  ItemSaveSuccess: {
    message: 'Item successfully saved!',
    style: 'success',
  },
  ItemSaveFailure: {
    message: 'Item failed to save...',
    style: 'failure',
  },
} as const)

type MessageTemplate = {
  message: string
  style: 'success' | 'failure'
}

export function createMessage(messageName: MessageName): MessageTemplate {
  return messageCatalog[messageName]
}

type MessageName = keyof typeof messageCatalog
type MessageCatalog = Record<string, MessageTemplate>

function createMessageCatalog<T extends MessageCatalog>(catalog: T): Readonly<T> {
  return Object.freeze(catalog)
}

// https://stackoverflow.com/questions/68207767/typescript-infer-possible-object-keys-based-on-value-of-previous-argument

export const TagList = {
  username_not_found: ['username'],
  username_found: ['name'],
  batman: ['a', 'b'],
} as const

type Elem = string

type TagList = typeof TagList

// const transform = <
//   Tag extends keyof TagList,
//   Props extends Reducer<TagList[Tag]>
// >(
//   tag: Tag,
//   _props: Props
// ) => {
//   switch (tag) {
//     case 'batman':
//       break
//     case 'username_found':
//       break
//     case 'username_not_found':
//       break
//     default:
//       return exhaustive(tag)
//   }
// }

// function exhaustive(_: never): never {
//   throw new Error('Should not reach here')
// }

// transform('username_not_found', { username: 'someone@example.com' }) // ok
// transform('username_found', { name: 'John' }) // ok
// transform('batman', { a: 'John', b: 'Doe' }) // ok

// transform('username_not_found', { name: 'someone@example.com' }) // expected error
// transform('username_found', { username: 'John' }) // expected error

const _obj: { x: number; y: number } = {
  x: 3,
  y: 4,
}

type _Reducer<
  Arr extends readonly string[] /* array */,
  Result extends Record<string, unknown> = Record<string, unknown> /* accumulator */
> = Arr extends []
  ? Result // if array is empty -> return Result
  : Arr extends readonly [infer H, ...infer Tail] // if array is not empty, do recursive call with array Tail and Result
  ? Tail extends ReadonlyArray<Elem>
    ? H extends Elem
      ? _Reducer<Tail, Result & Record<H, string>>
      : never
    : never
  : never

/**
 * Given a string, extracts variable names from between
 * `{{` and `}}` delimiters and returns an object type with
 * those variable names as the required keys.
 */
type ExtractInterpolatedVariables<
  S extends string,
  VarNames extends string[] = []
> = S extends `${string}{{${infer Var}}}${infer Rest}`
  ? ExtractInterpolatedVariables<Rest, [Var, ...VarNames]>
  : VarNames extends []
  ? Record<string, never>
  : { [Prop in VarNames[number]]: string } // base case: no variables left to interpolate

const withZeroVariables = 'Hello, world!'
const withOneVariable = 'Hello {{name}} how are you?'
const withTwoVariables = 'Hello {{name1}}, I just met your brother {{name2}}'

function interpolateMessage<T extends string>(
  message: T,
  variablesToInterpolate: ExtractInterpolatedVariables<T>
): string {
  let newMessage: string = message
  for (const [varName, value] of Object.entries(variablesToInterpolate)) {
    newMessage = newMessage.replace(`{{${varName}}}`, value)
  }
  return newMessage
}

// should pass
interpolateMessage(withZeroVariables, {})
interpolateMessage(withOneVariable, { name: 'Ada' })
interpolateMessage(withTwoVariables, { name1: 'Ada', name2: 'Bob' })

// should fail
// interpolateMessage(withZeroVariables, { one: 'one' })
// interpolateMessage(withOneVariable, { namez: 'Ada' })
// interpolateMessage(withTwoVariables, { name1z: 'Ada', name2z: 'Bob' })
