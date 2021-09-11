import {FC, memo, ReactElement, useState} from 'react';
import s from './styles/paginator.module.scss';
import cn from 'classnames';
import {PaginatorType} from './types';

export const Paginator: FC<PaginatorType> = memo(({
  totalResults,
  changePage
 }): ReactElement | null => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [portionSize, setPortionSize] = useState<number>(10);
  const [portionNumber, setPortionNumber] = useState<number>(1);

  const pagesCount = Math.ceil(totalResults / 10);

  const pages: number[] = [];

  const onPageChanged = (page: number): void => {
    setCurrentPage(page);
    changePage(page);
  }

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const portionCount: number = Math.ceil(pagesCount / portionSize);
  const leftPortionPageNumber: number = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber: number = portionNumber * portionSize;

  const onClickHandler = (): void => setPortionNumber(portionNumber - 1);

  const getPages = (): ReactElement[] => pages
    .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
    .map(page => {
      return (
        <span
          key={page}
          className={cn({[s.selectedPage]: currentPage === page}, s.pageNumber)}
          onClick={() => onPageChanged(page)}
        >
          {page}
        </span>
      )
    })

  return (
    <div className={s.paginator}>
      {portionNumber > 1 && (
        <button onClick={onClickHandler}>
          {"<"}
        </button>
      )}

      {getPages()}
      {
        portionCount > portionNumber &&
        <button onClick={() => {
          setPortionNumber(portionNumber + 1)
        }}>{">"}</button>
      }
    </div>
  )
})
