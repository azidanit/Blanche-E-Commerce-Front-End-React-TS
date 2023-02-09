import { valueType } from 'antd/es/statistic/utils';
import React, { useState } from 'react';
import { textTruncate } from '../../../../helpers/textTruncate';
import { toRupiah } from '../../../../helpers/toRupiah';
import { Button, Image, StrikethroughText, TextArea } from '../../../atoms';
import { InputQuantity } from '../../../molecules';
import style from './index.module.scss';
import { RiDeleteBinLine } from 'react-icons/ri';
import {
  useDeleteCartItemMutation,
  useUpdateCartItemMutation,
} from '../../../../app/features/cart/cartApiSlice';
import { notification } from 'antd';
import { ICartItem } from '../../../../helpers/types/cart.interface';

interface CartItemProps {
  item: ICartItem;
}

const CartItemPage: React.FC<CartItemProps> = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
  const [deleteCart, { isSuccess, isLoading }] = useDeleteCartItemMutation();
  const [updateCartItem] = useUpdateCartItemMutation();

  const handleChange = (value: valueType | null) => {
    setQuantity(value as number);
  };

  const handleDecrement = () => {
    try {
      updateCartItem({
        cart_item_id: item.cart_item_id,
        quantity: item.quantity - 1,
        notes: item.notes,
        is_checked: item.is_checked,
      }).unwrap();
    } catch (err) {
      notification.error({
        message: 'Error',
        description: 'Failed to update cart item',
      });
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
    try {
      updateCartItem({
        cart_item_id: item.cart_item_id,
        quantity: item.quantity + 1,
        notes: item.notes,
        is_checked: item.is_checked,
      }).unwrap();
    } catch (err) {
      notification.error({
        message: 'Error',
        description: 'Failed to update cart item',
      });
    }
  };

  const handleDelete = async () => {
    try {
      await deleteCart(item.cart_item_id).unwrap();

      if (isSuccess) {
        notification.success({
          message: 'Success',
          description: 'Item deleted from cart',
        });
      }
    } catch (err) {
      notification.error({
        message: 'Error',
      });
    }
  };
  return (
    <div className={style.cart__item}>
      <div className={style.cart__item__details}>
        <Image
          src={item.image}
          alt="cart-img"
          className={style.cart__item__img}
        />
        <div className={style.cart__item__details__item}>
          <p className={style.cart__item__title}>
            {textTruncate(item.name, 60)}
          </p>
          <p className={style.cart__item__price}>
            {toRupiah(Number(item.real_price))}
          </p>
          {item.discount_price !== item.real_price && (
            <StrikethroughText
              className={style.cart__item__disc__price}
              text={toRupiah(Number(item?.discount_price))}
            />
          )}
        </div>
      </div>
      <div className={style.cart__item__bottom}>
        <div className={style.cart__item__bottom__notes}>
          <form>
            <TextArea placeholder="add notes" rows={1.8} value={item?.notes} />
          </form>
        </div>
        <InputQuantity
          value={item?.quantity}
          handleDecrement={handleDecrement}
          handleIncrement={handleIncrement}
          handleChange={handleChange}
        />
        <Button
          shape="circle"
          size="small"
          icon={<RiDeleteBinLine />}
          loading={isLoading}
          onClick={handleDelete}
        ></Button>
      </div>
    </div>
  );
};

export default CartItemPage;
