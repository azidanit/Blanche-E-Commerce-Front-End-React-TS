import { Dropdown, MenuProps } from 'antd';
import React from 'react';
import { Button } from '../../../../atoms';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import style from './index.module.scss';
import DeliveryItem from './DeliveryItem';

const items: MenuProps['items'] = [
  {
    label: <DeliveryItem />,
    key: '0',
  },
  {
    label: <DeliveryItem />,
    key: '1',
  },
  {
    label: <DeliveryItem />,
    key: '3',
  },
];

const Delivery: React.FC = () => {
  return (
    <Dropdown menu={{ items }} trigger={['click']}>
      <Button
        size="large"
        className={style.delivery__button}
        type="primary"
        ghost
      >
        Choose Delivery Services <MdOutlineKeyboardArrowDown />
      </Button>
    </Dropdown>
  );
};

export default Delivery;
