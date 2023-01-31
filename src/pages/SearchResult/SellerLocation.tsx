import { Skeleton } from 'antd';
import { CheckboxValueType } from 'antd/es/checkbox/Group';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useGetCitiesQuery } from '../../app/features/home/homeApiSlice';
import { setParams } from '../../app/features/home/paramsSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { CheckboxGroup } from '../../components';
import { IOption } from '../../components/molecules/CheckboxGroup';
import style from './index.module.scss';

const SellerLocation: React.FC = () => {
  const { data, isLoading } = useGetCitiesQuery();
  const [options, setOptions] = useState<IOption[]>();
  const [selectedValues, setSelectedValues] = useState<
    CheckboxValueType[] | undefined
  >([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useAppSelector((state) => state.params);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) {
      const newOptions: IOption[] = data.cities.slice(0, 5).map((city) => ({
        value: city.id.toString(),
        children: <span>{city.name}</span>,
      }));
      setOptions(newOptions);
    }
  }, [data]);

  useEffect(() => {
    const locations = params.search.seller_city_id?.split(',');
    setSelectedValues(locations);
  }, [params.search.q]);

  const onChange = (checkedValues: CheckboxValueType[]) => {
    if (!checkedValues.length) {
      setSelectedValues(undefined);
      searchParams.delete('seller_city_id');
      setSearchParams(searchParams);
      dispatch(setParams({ seller_city_id: undefined }));
      return;
    }
    setSelectedValues(checkedValues);
    searchParams.set('seller_city_id', checkedValues.join(','));
    setSearchParams(searchParams);
    dispatch(setParams({ seller_city_id: checkedValues.join(',') }));
  };

  return (
    <Skeleton loading={isLoading}>
      {options && (
        <CheckboxGroup
          options={options}
          onChange={onChange}
          value={selectedValues}
          defaultValue={selectedValues}
          className={style.rating}
        />
      )}
    </Skeleton>
  );
};

export default SellerLocation;
