import {FC, ReactElement} from 'react';
import {BE_PATIENT} from 'src/constants';
import spinner from 'src/asseds/images/spin-loading.svg';
import s from './styles/loading.module.scss';

export const Loading: FC = (): ReactElement | null => (
  <div>
    <div className={s.loadingStyle}>
      <img src={spinner} alt={BE_PATIENT}/>
    </div>
  </div>
);
