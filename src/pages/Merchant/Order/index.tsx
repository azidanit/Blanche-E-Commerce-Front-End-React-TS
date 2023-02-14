import { TabsProps } from 'antd';
import React from 'react';
import { ListCardOrder, Tabs } from '../../../components';
import style from './index.module.scss';
import './override.scss';

const Order: React.FC = () => {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: `All`,
      children: <ListCardOrder />,
    },
    {
      key: '2',
      label: `New Order`,
    },
    {
      key: '3',
      label: `Ready to Ship`,
    },
    {
      key: '4',
      label: `On Delivery`,
    },
    {
      key: '5',
      label: `Completed`,
    },
    {
      key: '6',
      label: `Cancelled`,
    },
    {
      key: '7',
      label: `Returned`,
    },
  ];
  return (
    <div>
      <Tabs
        defaultActiveKey="1"
        items={items}
        size="large"
        className="order-tab"
      />
    </div>
  );
};

export default Order;
