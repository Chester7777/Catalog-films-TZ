export type FilmType = {
  Poster: string
  Title: string
  Type: string
  Year: string
  imdbID: string
}

export type GetDataType = {
  Response: string
  Search: Array<FilmType>
  totalResults: string
}
