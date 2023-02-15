import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Divider, Form, InputNumber, Select, Space, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { Card, FormLabel, Input } from '../../../../atoms';
import { rules } from '../validation';
import style from './index.module.scss';
import './override.scss';

interface Row {
  key: string;
  price: React.ReactNode;
  stock: React.ReactNode;
  sku: React.ReactNode;
  weight: React.ReactNode;
  firstVariant?: string;
  secondVariant?: string;
}

const defaultColumns: ColumnsType<Row> = [
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Stock',
    dataIndex: 'stock',
    key: 'stock',
  },
  {
    title: 'SKU',
    dataIndex: 'sku',
    key: 'sku',
  },
  {
    title: 'Weight',
    dataIndex: 'weight',
    key: 'weight',
  },
];

const ProductVariants: React.FC = () => {
  const [isSecondVariant, setIsSecondVariant] = useState(false);
  const [dataSource, setDataSource] = useState<Row[]>();
  const [columns, setColumns] = useState<ColumnsType<Row>>(defaultColumns);
  const form = Form.useFormInstance();
  const firstVariant: string = Form.useWatch('firstVariant', form);
  const secondVariant: string = Form.useWatch('secondVariant', form);
  const firstSelect: string = Form.useWatch('firstSelect', form);
  const secondSelect: string = Form.useWatch('secondSelect', form);

  useEffect(() => {
    let prevValue = [...columns];
    prevValue = prevValue.filter((item) => item.key !== 'firstVariant');
    prevValue = prevValue.filter((item) => item.key !== 'secondVariant');
    if (Boolean(firstVariant)) {
      const newColumns = {
        title: firstVariant.toString(),
        dataIndex: 'firstVariant',
        key: 'firstVariant',
      };
      prevValue = [newColumns, ...prevValue];
    }
    if (secondVariant && secondSelect) {
      const newColumns = {
        title: secondVariant.toString(),
        dataIndex: 'secondVariant',
        key: 'secondVariant',
      };
      prevValue = [newColumns, ...prevValue];
    }
    setColumns(prevValue);
  }, [firstVariant, secondVariant, secondSelect]);

  useEffect(() => {
    if (!firstSelect) {
      setDataSource([]);
      return;
    }
    if (firstSelect && !secondSelect) {
      const firstSelectArray = firstSelect.toString().split(',');
      const res: Row[] = firstSelectArray.map((item, index) => ({
        key: index.toString(),
        firstVariant: item,
        price: (
          <FormLabel name={`variantPrice-${index}`}>
            <InputNumber min={0} placeholder="Price" />
          </FormLabel>
        ),
        stock: (
          <FormLabel name={`variantStock-${index}`}>
            <InputNumber min={0} placeholder="Stock" />
          </FormLabel>
        ),
        sku: (
          <FormLabel name={`variantSKU-${index}`}>
            <Input placeholder="SKU" size="small" />
          </FormLabel>
        ),
        weight: (
          <FormLabel name={`variantWeight-${index}`}>
            <InputNumber min={0} placeholder="Weight" />
          </FormLabel>
        ),
      }));
      setDataSource(res);
      return;
    }

    if (firstSelect && secondSelect) {
      const firstSelectArray = firstSelect.toString().split(',');
      const secondSelectArray = secondSelect.toString().split(',');
      const res: Row[] = [];
      firstSelectArray.forEach((firstItem, firstIndex) =>
        secondSelectArray.forEach((secondItem, secondIndex) => {
          res.push({
            key: `${firstItem}-${secondItem}`,
            firstVariant: firstItem,
            secondVariant: secondItem,
            price: (
              <FormLabel name={`variantPrice-${firstIndex}${secondIndex}`}>
                <InputNumber min={0} placeholder="Price" />
              </FormLabel>
            ),
            stock: (
              <FormLabel name={`variantStock-${firstIndex}${secondIndex}`}>
                <InputNumber min={0} placeholder="Stock" />
              </FormLabel>
            ),
            sku: (
              <FormLabel name={`variantSKU-${firstIndex}${secondIndex}`}>
                <Input placeholder="SKU" size="small" />
              </FormLabel>
            ),
            weight: (
              <FormLabel name={`variantWeight-${firstIndex}${secondIndex}`}>
                <InputNumber min={0} placeholder="Weight" />
              </FormLabel>
            ),
          });
        }),
      );
      setDataSource(res);
    }
  }, [firstSelect, secondSelect]);

  const activateSecondVariant = () => {
    setIsSecondVariant(true);
  };

  return (
    <Card className={classNames(style.pv, 'pv')}>
      <h2 className={style.pv__title}>Product Variants</h2>
      <FormLabel
        name="firstVariant"
        label="Variant 1"
        rules={rules.firstVariant}
      >
        <Input placeholder="ex: Apple iPhone 12 Pro Max 256GB" />
      </FormLabel>
      {firstVariant && (
        <FormLabel name="firstSelect">
          <Select
            mode="tags"
            style={{ width: '100%' }}
            placeholder="Type and press enter to add a new variant"
          />
        </FormLabel>
      )}
      <Divider dashed />
      {isSecondVariant ? (
        <>
          <FormLabel
            name="secondVariant"
            label="Variant 2"
            rules={rules.secondVariant}
          >
            <Input placeholder="ex: Apple iPhone 12 Pro Max 256GB" />
          </FormLabel>
          {secondVariant && (
            <FormLabel name="secondSelect">
              <Select
                mode="tags"
                style={{ width: '100%' }}
                placeholder="Type and press enter to add a new variant"
              />
            </FormLabel>
          )}
        </>
      ) : (
        <Button onClick={activateSecondVariant}>Add second variant</Button>
      )}
      <Divider dashed />
      <Table columns={columns} dataSource={dataSource} pagination={false} />
    </Card>
  );
};

export default ProductVariants;
