import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { setParams } from '../../app/features/home/paramsSlice';
import { useAppDispatch } from '../../app/hooks';
import { Select } from '../../components';
import style from './index.module.scss';
import { mappedSortOptions, sortOptions } from './options';

const Sort: React.FC = () => {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const onChange = async (value: string) => {
    searchParams.set('ob', value);
    setSearchParams(searchParams);
    const params: { [key: string]: string } = {};
    for (const entry of searchParams.entries()) {
      const [param, value] = entry;
      params[param] = value;
    }
    params['sort_by'] = mappedSortOptions[value].sort_by;
    params['sort_dir'] = mappedSortOptions[value].sort_dir;
    delete params.ob;
    dispatch(
      setParams({ sort_by: params['sort_by'], sort_dir: params['sort_dir'] }),
    );
  };
  return (
    <div className={style.sort}>
      <p className={style.sort__text}>Sort By: </p>
      <Select
        defaultValue={
          !searchParams.get('ob')
            ? sortOptions[0].value
            : Number(searchParams.get('ob')) <= sortOptions.length
            ? (searchParams.get('ob') as string)
            : sortOptions[0].value
        }
        options={sortOptions}
        onChange={onChange}
        className={style.sort__select}
        size="middle"
      />
    </div>
  );
};

export default Sort;
