export type genre = {
  id: string
  name: string
  slug?: string
}

export interface genreDetail extends genre {
  books: book[]
}

export type book = {
  id: string
  title: string
  genre: genre[]
  author?: author[]
  slug: string
}

export type author = {
  id: string
  name: string
  age: number
  books?: book[]
  slug: string
}
