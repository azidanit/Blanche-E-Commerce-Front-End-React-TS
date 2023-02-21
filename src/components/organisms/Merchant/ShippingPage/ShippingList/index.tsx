import { Button, message } from 'antd';
import { CheckboxValueType } from 'antd/es/checkbox/Group';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { CheckboxGroup } from '../../../..';
import {
  useGetShippingOptionsQuery,
  usePutShippingOptionsMutation,
} from '../../../../../app/features/merchant/merchantApiSlice';
import { IShippingOption } from '../../../../../helpers/types';
import { IErrorResponse } from '../../../../../helpers/types/response.interface';
import ShippingCard from '../ShippingCard';
import style from './index.module.scss';
import './override.scss';

const ShippingList: React.FC = () => {
  const [values, setValues] = useState<IShippingOption[]>([]);
  const { data, isLoading } = useGetShippingOptionsQuery();
  const [putShippingOptions, { isLoading: isLoadingSave }] =
    usePutShippingOptionsMutation();

  useEffect(() => {
    if (!data) return;
    setValues(data);
  }, [data]);

  const options = data?.map((item) => {
    return {
      value: item.courier_code,
      children: <ShippingCard key={item.courier_code} shipping={item} />,
    };
  });
  const onChange = (checkedValues: CheckboxValueType[]) => {
    setValues((prevValue) =>
      prevValue.map((item) => {
        if (checkedValues.includes(item.courier_code)) {
          return {
            ...item,
            is_checked: true,
          };
        }
        return {
          ...item,
          is_checked: false,
        };
      }),
    );
  };

  const onSave = async () => {
    try {
      await putShippingOptions(values).unwrap();
      message.success('Success updating shipping options');
    } catch (err) {
      const error = err as IErrorResponse;
      message.error(error.message);
    }
  };

  return (
    <div className={classNames(style.sl, 'sl')}>
      {options && (
        <CheckboxGroup
          options={options}
          onChange={onChange}
          value={values
            ?.filter((item) => item.is_checked)
            .map((item) => item.courier_code)}
          className={style.rating}
        />
      )}
      <Button
        type="primary"
        loading={isLoadingSave}
        onClick={onSave}
        className={style.sl__button}
      >
        Save
      </Button>
    </div>
  );
};

export default ShippingList;
