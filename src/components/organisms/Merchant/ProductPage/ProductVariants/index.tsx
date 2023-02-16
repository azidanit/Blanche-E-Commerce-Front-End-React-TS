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
  const firstSelect: string[] = Form.useWatch('firstSelect', form);
  const secondSelect: string[] = Form.useWatch('secondSelect', form);

  useEffect(() => {
    let prevValue = [...columns];
    prevValue = prevValue.filter((item) => item.key !== 'firstVariant');
    prevValue = prevValue.filter((item) => item.key !== 'secondVariant');
    if (firstVariant && firstVariant.length >= 3) {
      const newColumns = {
        title: firstVariant.toString(),
        dataIndex: 'firstVariant',
        key: 'firstVariant',
      };
      prevValue = [newColumns, ...prevValue];
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
      prevValue = [newColumns, ...prevValue];
    }
    setColumns(prevValue);
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
            name={`variantPrice-${index}`}
            rules={rules.price}
            preserve={false}
          >
            <InputNumber min={100} placeholder="Price" addonBefore="Rp" />
          </FormLabel>
        ),
        stock: (
          <FormLabel
            name={`variantStock-${index}`}
            rules={rules.stock}
            preserve={false}
          >
            <InputNumber min={0} placeholder="Stock" />
          </FormLabel>
        ),
        sku: (
          <FormLabel
            name={`variantSKU-${index}`}
            rules={rules.sku}
            preserve={false}
          >
            <Input placeholder="SKU" size="small" />
          </FormLabel>
        ),
        weight: (
          <FormLabel
            name={`variantWeight-${index}`}
            rules={rules.weight}
            preserve={false}
          >
            <InputNumber min={1} placeholder="Weight" addonAfter="g" />
          </FormLabel>
        ),
      }));
      setDataSource(res);
      return;
    }
    console.log(secondSelect);
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
            key: `${firstItem}-${secondItem}`,
            firstVariant: firstItem,
            secondVariant: secondItem,
            price: (
              <FormLabel
                name={`variantPrice-${firstIndex}${secondIndex}`}
                rules={rules.price}
                preserve={false}
              >
                <InputNumber min={100} placeholder="Price" />
              </FormLabel>
            ),
            stock: (
              <FormLabel
                name={`variantStock-${firstIndex}${secondIndex}`}
                rules={rules.stock}
                preserve={false}
              >
                <InputNumber min={0} placeholder="Stock" />
              </FormLabel>
            ),
            sku: (
              <FormLabel
                name={`variantSKU-${firstIndex}${secondIndex}`}
                rules={rules.sku}
                preserve={false}
              >
                <Input placeholder="SKU" size="small" />
              </FormLabel>
            ),
            weight: (
              <FormLabel
                name={`variantWeight-${firstIndex}${secondIndex}`}
                rules={rules.weight}
                preserve={false}
              >
                <InputNumber min={0} placeholder="Weight" />
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
      <h2 className={style.pv__title}>Product Variants</h2>
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
        <FormLabel name="firstSelect" preserve={false}>
          <Select
            mode="tags"
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
            preserve={false}
          >
            <Input placeholder="ex: Size or Color" size="small" />
          </FormLabel>
          {secondVariant && secondVariant.length >= 3 && (
            <FormLabel name="secondSelect" preserve={false}>
              <Select
                mode="tags"
                placeholder="Type and press enter to add a new variant"
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
