import placeholder from '../../asseds/images/placeholder.png';
import {FC, memo, ReactElement} from 'react';
import s from './styles/films.module.scss';
import {FilmsType} from './types';

export const Films: FC<FilmsType> = ({films}: FilmsType): ReactElement | null => (
    <div className={s.container_films}>
      {(films && films.length > 0) && (
        films.map((film) => <div className={s.container_film} key={film.imdbID}>
            <img
              alt="poster"
              src={film.Poster === "N/A" ? placeholder : film.Poster}
            />
            <div className={s.container_text}>
              <div>
              <span className={s.container_text_bold}>
                Name:
              </span>
                {film.Title}
              </div>
              <div>
              <span className={s.container_text_bold}>
                Year:
              </span>
                {film.Year}
              </div>
              <div>
              <span className={s.container_text_bold}>
                ID:
              </span>
                {film.imdbID}
              </div>
              <div>
              <span className={s.container_text_bold}>
                Type:
              </span>
                {film.Type}
              </div>
            </div>
          </div>
        ))}
    </div>
  )
