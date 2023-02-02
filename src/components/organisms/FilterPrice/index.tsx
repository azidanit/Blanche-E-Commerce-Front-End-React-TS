import React, { ChangeEvent, useEffect, useState } from 'react';
import style from './index.module.scss';
import { Space } from 'antd';
import { Input } from '../../atoms';
import { toRupiahWithoutSymbol } from '../../../helpers/toRupiah';
import { useSearchParams } from 'react-router-dom';
import { useAppSelector } from '../../../app/hooks';

interface IInputState {
  value: number | undefined;
  formattedValue: string | undefined;
  focus: boolean;
}

interface IMaxmin_price {
  min_price: IInputState;
  max_price: IInputState;
}

const initialInputState: IMaxmin_price = {
  min_price: {
    value: undefined,
    formattedValue: undefined,
    focus: false,
  },
  max_price: {
    value: undefined,
    formattedValue: undefined,
    focus: false,
  },
};

const FilterPrice: React.FC = () => {
  const [inputState, setInputState] = useState(initialInputState);
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useAppSelector((state) => state.params);

  useEffect(() => {
    const minPrice = params.search.min_price;
    setInputState((prevValue) => ({
      ...prevValue,
      min_price: {
        ...prevValue.min_price,
        value: minPrice,
        formattedValue: minPrice ? toRupiahWithoutSymbol(minPrice) : undefined,
      },
    }));
    const maxPrice = params.search.max_price;
    setInputState((prevValue) => ({
      ...prevValue,
      max_price: {
        ...prevValue.max_price,
        value: maxPrice,
        formattedValue: maxPrice ? toRupiahWithoutSymbol(maxPrice) : undefined,
      },
    }));
  }, [params.search.q, params.search.min_price, params.search.max_price]);

  const onBlur = (key: 'min_price' | 'max_price', type: 'blur' | 'enter') => {
    const val = inputState[key].value;
    if (!val) {
      searchParams.delete(key);
      setSearchParams(searchParams);
      return;
    }
    searchParams.set(key, val.toString());
    setSearchParams(searchParams);
    setInputState((prevValue) => ({
      ...prevValue,
      [key]: {
        ...prevValue[key],
        formattedValue: toRupiahWithoutSymbol(inputState[key].value),
      },
    }));
    if (type === 'enter') return;
    setInputState((prevValue) => ({
      ...prevValue,
      [key]: {
        ...prevValue[key],
        focus: false,
      },
    }));
  };

  const onChange = (
    e: ChangeEvent<HTMLInputElement>,
    key: 'min_price' | 'max_price',
  ) => {
    const value = e.target.value;
    setInputState((prevValue) => ({
      ...prevValue,
      [key]: {
        ...prevValue[key],
        value: value ? parseInt(value) : undefined,
      },
    }));
  };

  const onFocus = (key: 'min_price' | 'max_price') => {
    searchParams.delete('page');
    setInputState((prevValue) => ({
      ...prevValue,
      [key]: {
        ...prevValue[key],
        focus: true,
      },
    }));
  };

  return (
    <Space direction="vertical" className={style.price}>
      <Input
        addonBefore="Rp"
        placeholder="Minimum Price"
        onBlur={() => {
          onBlur('min_price', 'blur');
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            onBlur('min_price', 'enter');
          }
        }}
        onChange={(value) => {
          onChange(value, 'min_price');
        }}
        value={
          inputState.min_price.focus
            ? inputState.min_price.value
            : inputState.min_price.formattedValue
        }
        defaultValue={inputState.min_price.formattedValue}
        onFocus={() => onFocus('min_price')}
        type="text"
        size="middle"
      />
      <Input
        addonBefore="Rp"
        placeholder="Maximum Price"
        onBlur={() => {
          onBlur('max_price', 'blur');
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            onBlur('max_price', 'enter');
          }
        }}
        onChange={(value) => {
          onChange(value, 'max_price');
        }}
        value={
          inputState.max_price.focus
            ? inputState.max_price.value
            : inputState.max_price.formattedValue
        }
        defaultValue={inputState.max_price.formattedValue}
        onFocus={() => onFocus('max_price')}
        type="text"
        size="middle"
      />
    </Space>
  );
};

export default FilterPrice;
