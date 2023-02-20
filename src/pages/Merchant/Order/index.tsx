import { TabsProps } from 'antd';
import React from 'react';
import { OrderList, Tabs } from '../../../components';
import style from './index.module.scss';
import './override.scss';

const Order: React.FC = () => {
  return (
    <div>
      <OrderList />
    </div>
  );
};

export default Order;
