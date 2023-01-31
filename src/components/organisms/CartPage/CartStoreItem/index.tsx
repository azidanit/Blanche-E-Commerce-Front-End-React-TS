import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { CheckboxValueType } from 'antd/es/checkbox/Group';
import React, { useState } from 'react';
import { Card } from '../../../atoms';
import { Checkbox, CheckboxGroup } from '../../../molecules';
import CartItem from '../CartItem';
import style from './index.module.scss';

const CartStoreItem: React.FC = () => {
  const options = [...Array(4)].map((val, index) => {
    const value = index + 2;
    return {
      value: value.toString(),
      children: <CartItem />,
    };
  });

  const [checkedList, setCheckedList] = useState<CheckboxValueType[]>(['1']);
  const [indeterminate, setIndeterminate] = useState(false);
  const [checkAll, setCheckAll] = useState(false);

  const onChange = (list: CheckboxValueType[]) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < options.length);
    setCheckAll(list.length === options.length);
  };

  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    setCheckedList(e.target.checked ? options.map((o) => o.value) : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  const selectedValues = ['2', '3'];

  return (
    <Card className={style.cart__store__item}>
      <div className={style.cart__store__item__header}>
        <Checkbox
          indeterminate={indeterminate}
          onChange={onCheckAllChange}
          checked={checkAll}
        />
        <h6>Tokokotoku</h6>
      </div>
      <div className={style.cart__store__item__body}>
        <CheckboxGroup
          options={options}
          onChange={onChange}
          value={checkedList}
          defaultValue={selectedValues}
          className={style.cart}
        />
      </div>
    </Card>
  );
};

export default CartStoreItem;
