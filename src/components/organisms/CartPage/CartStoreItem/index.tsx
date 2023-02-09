import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { CheckboxValueType } from 'antd/es/checkbox/Group';
import React, { useState } from 'react';
import { useUpdateCartItemMutation } from '../../../../app/features/cart/cartApiSlice';
import { ICart, ICartItem } from '../../../../helpers/types';
import { Avatar, Card } from '../../../atoms';
import { Checkbox, CheckboxGroup } from '../../../molecules';
import CartItemPage from '../CartItemPage';
import style from './index.module.scss';

interface CartStoreItemProps {
  cart: ICart;
}

const CartStoreItem: React.FC<CartStoreItemProps> = ({ cart }) => {
  const [updateCartItem, { isLoading, isError }] = useUpdateCartItemMutation();

  const options = cart.items.map((item) => {
    return {
      value: item.cart_item_id?.toString() || '0',
      children: <CartItemPage item={item} key={item.name} />,
    };
  });

  const [checkedList, setCheckedList] = useState<CheckboxValueType[]>(
    cart.items
      .filter((item) => item.is_checked)
      .map((item) => {
        const index = item.cart_item_id ? item.cart_item_id : 0;
        return index.toString();
      }),
  );
  const [indeterminate, setIndeterminate] = useState(false);
  const [checkAll, setCheckAll] = useState(
    cart.items.filter((item) => item.is_checked).length === cart.items.length,
  );

  const onChange = (list: CheckboxValueType[], item: ICartItem) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < options.length);
    // setCheckAll(list.length === options.length);
    // cart_item_id?: number | null;
    // quantity?: number | null;
    // notes?: string;
    // is_checked?: boolean;
    try {
      updateCartItem({
        cart_item_id: item.cart_item_id,
        quantity: item.quantity,
        notes: item.notes,
        is_checked: list.includes(item.cart_item_id?.toString() || '0'),
      }).unwrap();
    } catch (err) {
      console.log(err);
    }
  };

  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    setCheckedList(e.target.checked ? options.map((o) => o.value) : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  return (
    <Card className={style.cart__store__item}>
      <div className={style.cart__store__item__header}>
        <Checkbox
          indeterminate={indeterminate}
          onChange={onCheckAllChange}
          checked={checkAll}
        />
        <Avatar src={cart.merchant_image} size={60} />
        <h6>{cart.merchant_name}</h6>
      </div>
      <div className={style.cart__store__item__body}>
        <CheckboxGroup
          options={options}
          onChange={() => onChange(checkedList, cart.items[0])}
          value={checkedList}
          className={style.cart}
        />
      </div>
    </Card>
  );
};

export default CartStoreItem;
