import s from './styles/counterResults.module.scss';
import {ENTER_MOVIE_TITLE} from 'src/constants';
import {CounterResultsType} from './types';
import {FC, memo, ReactElement} from 'react';

export const CounterResults: FC<CounterResultsType> = ({
                                                         searchText,
                                                         totalResults
                                                       }: CounterResultsType
): ReactElement | null => (
  <div className={s.results}>
    {
      totalResults
        ? `You searched for: ${searchText} - ${totalResults} results found`
        : ENTER_MOVIE_TITLE
    }
  </div>
)

