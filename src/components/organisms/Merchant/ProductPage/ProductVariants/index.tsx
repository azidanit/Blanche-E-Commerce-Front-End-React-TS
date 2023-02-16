import { Button, Divider, Form, InputNumber, Select, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { FormLabel, Input } from '../../../../atoms';
import { rules } from '../validation';
import style from './index.module.scss';
import './override.scss';

interface Row {
  key: string;
  price: React.ReactNode;
  stock: React.ReactNode;
  firstVariant?: string;
  secondVariant?: string;
}

const defaultOptions = [
  {
    label: 'Type 1',
    value: 'type1',
  },
  {
    label: 'Type 2',
    value: 'type2',
  },
  {
    label: 'Type 3',
    value: 'type3',
  },
];

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
];

const ProductVariants: React.FC = () => {
  const [isSecondVariant, setIsSecondVariant] = useState(false);
  const [dataSource, setDataSource] = useState<Row[]>();
  const [columns, setColumns] = useState<ColumnsType<Row>>(defaultColumns);
  const form = Form.useFormInstance();
  const firstVariant: string = Form.useWatch('firstVariant', form);
  const secondVariant: string = Form.useWatch('secondVariant', form);
  const firstSelect: string[] = Form.useWatch('firstSelect', form);
  const secondSelect: string[] = Form.useWatch('secondSelect', form);

  useEffect(() => {
    let newArr: ColumnsType<Row> = [];
    if (firstVariant && firstVariant.length >= 3) {
      const newColumns = {
        title: firstVariant.toString(),
        dataIndex: 'firstVariant',
        key: 'firstVariant',
      };
      newArr = [newColumns, ...defaultColumns];
    }
    if (
      secondVariant &&
      secondVariant.length >= 3 &&
      secondSelect &&
      secondSelect.length > 0 &&
      secondVariant !== firstVariant
    ) {
      const newColumns = {
        title: secondVariant.toString(),
        dataIndex: 'secondVariant',
        key: 'secondVariant',
      };
      newArr = [newArr[0], newColumns, ...defaultColumns];
    }
    setColumns(newArr);
  }, [firstVariant, secondVariant, firstSelect, secondSelect, isSecondVariant]);

  useEffect(() => {
    if (!firstSelect || firstVariant.length < 3) {
      setDataSource([]);
      return;
    }
    if (firstSelect && !secondSelect) {
      const res: Row[] = firstSelect.map((item, index) => ({
        key: index.toString(),
        firstVariant: item,
        price: (
          <FormLabel
            name={['variantItems', index, 'price']}
            rules={rules.price}
            preserve={false}
          >
            <InputNumber min={100} placeholder="Price" addonBefore="Rp" />
          </FormLabel>
        ),
        stock: (
          <FormLabel
            name={['variantItems', index, 'stock']}
            rules={rules.stock}
            preserve={false}
          >
            <InputNumber min={0} placeholder="Stock" />
          </FormLabel>
        ),
      }));
      setDataSource(res);
      return;
    }

    if (
      firstSelect &&
      firstVariant.length >= 3 &&
      secondSelect &&
      secondVariant.length >= 3
    ) {
      const res: Row[] = [];
      firstSelect.forEach((firstItem, firstIndex) =>
        secondSelect.forEach((secondItem, secondIndex) => {
          res.push({
            key: `${firstIndex}-${secondIndex}`,
            firstVariant: firstItem,
            secondVariant: secondItem,
            price: (
              <FormLabel
                name={[
                  'variantItems',
                  firstIndex * secondSelect.length + secondIndex,
                  'price',
                ]}
                rules={rules.price}
                preserve={false}
              >
                <InputNumber min={100} placeholder="Price" />
              </FormLabel>
            ),
            stock: (
              <FormLabel
                name={[
                  'variantItems',
                  firstIndex * secondSelect.length + secondIndex,
                  'stock',
                ]}
                rules={rules.stock}
                preserve={false}
              >
                <InputNumber min={0} placeholder="Stock" />
              </FormLabel>
            ),
          });
        }),
      );
      setDataSource(res);
    }
  }, [firstSelect, secondSelect, firstVariant, secondVariant, isSecondVariant]);

  const toggleSecondVariant = () => {
    setIsSecondVariant((prevValue) => !prevValue);
  };

  return (
    <div className={classNames(style.pv, 'pv')}>
      <div>
        <FormLabel
          name="firstVariant"
          label="Variant 1"
          validateTrigger="onBlur"
          rules={rules.firstVariant}
          preserve={false}
        >
          <Input placeholder="ex: Size or Color" size="small" />
        </FormLabel>
        {firstVariant && firstVariant.length >= 3 && (
          <FormLabel
            name="firstSelect"
            rules={rules.variantType}
            preserve={false}
          >
            <Select
              mode="tags"
              placeholder="Type and press enter to add new variant type"
              options={defaultOptions}
            />
          </FormLabel>
        )}
      </div>
      <Divider dashed />
      {isSecondVariant ? (
        <>
          <FormLabel
            name="secondVariant"
            label="Variant 2"
            rules={rules.secondVariant}
            preserve={false}
          >
            <Input placeholder="ex: Size or Color" size="small" />
          </FormLabel>
          {secondVariant && secondVariant.length >= 3 && (
            <FormLabel
              name="secondSelect"
              rules={rules.variantType}
              preserve={false}
            >
              <Select
                mode="tags"
                placeholder="Type and press enter to add new variant type"
                options={defaultOptions}
              />
            </FormLabel>
          )}
          <Button onClick={toggleSecondVariant}>Remove second variant</Button>
        </>
      ) : (
        <Button
          onClick={toggleSecondVariant}
          disabled={!firstVariant || !firstSelect}
        >
          Add second variant
        </Button>
      )}
      <Divider dashed />
      <Table columns={columns} dataSource={dataSource} pagination={false} />
    </div>
  );
};

export default ProductVariants;
