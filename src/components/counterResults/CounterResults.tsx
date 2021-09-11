import s from './styles/counterResults.module.scss';
import {ENTER_MOVIE_TITLE} from 'src/constants';
import {CounterResultsType} from './types';
import {FC, memo, ReactElement} from 'react';

export const CounterResults: FC<CounterResultsType> = memo(({
  searchText,
  totalResults
  }: CounterResultsType
  ): ReactElement | null => {
    const SEARCHTEXT_TOTALRESULTS = `You searched for: ${searchText} - ${totalResults} results found`;

    return (
      <div className={s.results}>
        {
          totalResults ? SEARCHTEXT_TOTALRESULTS : ENTER_MOVIE_TITLE
        }
      </div>
    )
  }
)
