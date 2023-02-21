import React, { useState } from 'react';
import { Divider, Radio, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import CardProduct from './';

interface DataType {
  key: React.Key;
  product: string;
  sold: number;
  price: string;
  stock: number;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Product',
    dataIndex: 'product',
  },
  {
    title: 'Sold',
    dataIndex: 'sold',
  },
  {
    title: 'Price',
    dataIndex: 'price',
  },
  {
    title: 'Stock',
    dataIndex: 'stock',
  },
];

const data: DataType[] = [
  {
    key: '1',
    product: 'gagag',
    sold: 32,
    price: 'Rp 10.000',
    stock: 10,
  },
];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      'selectedRows: ',
      selectedRows,
    );
  },
};

const TableProduct: React.FC = () => {
  return (
    <Table
      rowSelection={{
        type: 'checkbox',
        ...rowSelection,
      }}
      columns={columns}
      dataSource={data}
    />
  );
};

export default TableProduct;
