import { Button } from 'antd';
import classNames from 'classnames';
import React from 'react';
import { CheckboxGroup } from '../../../..';
import ShippingCard from '../ShippingCard';
import style from './index.module.scss';
import './override.scss';

const items = [
  {
    courier_name: 'DHL',
    courier_code: 'dhl',
    courier_logo: 'https://picsum.photos/id/237/200/300',
    is_checked: true,
  },
  {
    courier_name: 'JNE',
    courier_code: 'jne',
    courier_logo: 'https://picsum.photos/id/237/200/300',
    is_checked: false,
  },
  {
    courier_name: 'Makanan enak',
    courier_code: 'duar',
    courier_logo: 'https://picsum.photos/id/237/200/300',
    is_checked: false,
  },
];

const options = items.map((item, index) => {
  return {
    value: item.courier_code,
    children: <ShippingCard key={item.courier_code} shipping={item} />,
  };
});

const ShippingList: React.FC = () => {
  const onChange = (checkedValues: any) => {
    console.log('checked = ', checkedValues);
  };
  return (
    <div className={classNames(style.sl, 'sl')}>
      <CheckboxGroup
        options={options}
        onChange={onChange}
        value={['jne']}
        defaultValue={['jne']}
        className={style.rating}
      />
      <Button type="primary" className={style.sl__button}>
        Save
      </Button>
    </div>
  );
};

export default ShippingList;
