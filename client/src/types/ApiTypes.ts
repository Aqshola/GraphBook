export type genre = {
  id: string
  name: string
}

export type book = {
  id: string
  title: string
  genre: genre[]
  author?: author[]
}

export type author = {
  id: string
  name: string
  age: number
  books?: book[]
}
