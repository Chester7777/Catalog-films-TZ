import {FC, memo, ReactElement, useState} from 'react';
import './App.scss';
import Search from './components/search/Search';
import axios from 'axios';
import {CounterResults, DropDownMenu, Films, Loading, Paginator} from './components';
import {FilmType, GetDataType} from './types';

// const EMPTY_STRING = "";

export const App: FC = memo((): ReactElement | null => {
  const [error, setError] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [spinner, setSpinner] = useState<boolean>(false);
  const [films, setFilms] = useState<Array<FilmType>>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalResults, setTotalResults] = useState<number>(0);

  const changePage = (page: number): Promise<void> => fetchMovies(search, page);

  // useCallback [searchText, currentPage, fetchMovies]
  const getMove = (searchText: string): void => {
    setSearch(searchText);

    fetchMovies(searchText, currentPage);
  };

  const fetchMovies = async (
    searchText: string,
    page: number,
  ): Promise<void> => {
    setSpinner(true);

    try {
      const response: any = await axios.get<GetDataType>(
        `${process.env.REACT_APP_BASE_URL}&apikey=${process.env.REACT_APP_API_KEY}&s=${searchText}&page=${page}`
      )

      const {Search, totalResults, Response, Error} = response.data;

      if (Response === "True") {
        setFilms(Search);
        setTotalResults(totalResults);
        setCurrentPage(currentPage);
        setError('');
      } else {
        setError(`Error in request : ${Error}`);
      }
    } catch (error) {
      console.log(`Error: ${error}`);
    } finally {
      setSpinner(false);
    }
  }

  const renderValidJsx = (): ReactElement => {
    if (error) {
      return (
        <div className="App-error">
          {error}
        </div>
      )
    }

    return (
      <div className="container">
        {spinner ? <Loading/> : ""}
        <CounterResults
          searchText={search}
          totalResults={totalResults}
        />
        <Films films={films}/>
        <Paginator
          totalResults={totalResults}
          changePage={changePage}
        />
      </div>
    )
  }

  return (
    <div className="App">
      <div className="header">
        <div className="flex justify-center align-center">
          <div className="container">
            <div className="row">
              <div className="col logo">Movie Catalog</div>
              <div className="col search">
                <Search handleKeyUp={(evt: string) => getMove(evt)}/>
              </div>
              <div className="col">
                <DropDownMenu/>
              </div>
            </div>
          </div>
        </div>
      </div>
      {renderValidJsx()}
    </div>
  );
})
