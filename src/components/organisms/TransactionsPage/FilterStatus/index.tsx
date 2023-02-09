import { RadioChangeEvent } from 'antd';
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAppSelector } from '../../../../app/hooks';
import RadioChip from '../../../molecules/RadioChip';
import style from './index.module.scss';

const values = ['All', 'Processed', 'Delivered', 'Completed', 'Canceled'];

const FilterStatus: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useAppSelector((state) => state.params);
  const onChange = (e: RadioChangeEvent) => {
    searchParams.set('status', e.target.value);
    setSearchParams(searchParams);
  };

  return (
    <div className={style.fs}>
      <p className={style.fs__text}>Status</p>
      <RadioChip
        values={values}
        onChange={onChange}
        value={params.search.status || values[0]}
      />
    </div>
  );
};

export default FilterStatus;
