import {FC, ReactElement} from "react";
import spinner from '../../asseds/images/spin-loading.svg';
import s from './styles/loading.module.scss';

export const Loading: FC = (): ReactElement | null => (
  <div>
    <div className={s.loadingStyle}>
      <img src={spinner} alt="Be patient..."/>
    </div>
  </div>
);
