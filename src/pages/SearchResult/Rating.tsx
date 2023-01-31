import { StarFilled } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import style from './index.module.scss';
import { Checkbox } from '../../components';
import { CheckboxValueType } from 'antd/es/checkbox/Group';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setParams } from '../../app/features/home/paramsSlice';

const options = [...Array(4)].map((val, index) => {
  const value = 5 - index;
  return {
    value: value.toString(),
    children: (
      <div className={style.rating__item}>
        <span className={style.rating__item__count}>{value}</span>
        <StarFilled className={style.rating__item__star} />
      </div>
    ),
  };
});

const Rating: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<number | undefined>();
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const params = useAppSelector((state) => state.params);

  useEffect(() => {
    const minRating = params.search.min_rating;
    setSelectedValue(minRating);
  }, [params.search.q]);

  const onChange = (checkedValues: CheckboxValueType[]) => {
    if (!checkedValues.length) {
      setSelectedValue(undefined);
      searchParams.delete('min_rating');
      setSearchParams(searchParams);
      dispatch(setParams({ min_rating: undefined }));
      return;
    }
    const lastValue = checkedValues[checkedValues.length - 1];
    setSelectedValue(lastValue as number);
    searchParams.set('min_rating', lastValue.toString());
    setSearchParams(searchParams);
    dispatch(setParams({ min_rating: lastValue }));
  };
  return (
    <Checkbox
      options={options}
      onChange={onChange}
      value={[selectedValue?.toString() as string]}
      defaultValue={[selectedValue?.toString() as string]}
      className={style.rating}
    />
  );
};

export default Rating;
