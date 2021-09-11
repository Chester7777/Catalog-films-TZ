export type PaginatorType = {
  totalResults: number
  changePage: (page: number) => void
  search: string
}
