import { valueType } from 'antd/es/statistic/utils';
import React, { useEffect, useState } from 'react';
import { textTruncate } from '../../../../helpers/textTruncate';
import { toRupiah } from '../../../../helpers/toRupiah';
import {
  Alert,
  Button,
  FormLabel,
  Image,
  StrikethroughText,
  TextArea,
} from '../../../atoms';
import { Checkbox, Form, InputQuantity } from '../../../molecules';
import style from './index.module.scss';
import { RiDeleteBinLine } from 'react-icons/ri';
import {
  useDeleteCartItemMutation,
  useUpdateCartItemMutation,
  useUpdateCartsMutation,
} from '../../../../app/features/cart/cartApiSlice';
import { notification, Skeleton, Spin } from 'antd';
import { ICartItem } from '../../../../helpers/types/cart.interface';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { useGetProductVariantBySlugQuery } from '../../../../app/features/product/productApiSlice';
import { IVariantItem } from '../../../../helpers/types';
import { capitalizeFirstLetter } from '../../../../helpers/capitalizeFirstLetter';

interface CartItemProps {
  item: ICartItem;
  isLoading: boolean;
}

const CartItemPage: React.FC<CartItemProps> = ({ item, isLoading }) => {
  const [deleteCart, { isSuccess, isLoading: isLoadingDelete }] =
    useDeleteCartItemMutation();
  const [updateCartItem] = useUpdateCartItemMutation();
  const [notes, setNotes] = useState(item?.notes);
  const [variant, setVariant] = useState<IVariantItem>();

  const [updateCarts, { isLoading: isLoadingUpdateCarts }] =
    useUpdateCartsMutation();

  const store = item.product_slug.split('/')[0].trim();
  const product = item.product_slug.split('/')[1].trim();

  const { data: variants, error } = useGetProductVariantBySlugQuery(
    {
      store: store || '',
      slug: product || '',
    },
    {
      skip: !store || !product,
    },
  );

  useEffect(() => {
    if (variants) {
      variants.variant_items.filter((v) => {
        if (v.id === item.variant_item_id) {
          setVariant(v);
        }
      });
    }
  }, [variants]);

  const handleChangeNotes = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNotes(e.target.value);
  };

  const handleChange = async (value: valueType | null) => {
    try {
      await updateCartItem({
        cart_item_id: item.cart_item_id,
        quantity: value as number,
        notes: item.notes,
        is_checked: item.is_checked,
      }).unwrap();
    } catch (err) {
      const e = err as Error;
      notification.error({
        message: 'Error',
        description: capitalizeFirstLetter(e.message),
      });
    }
  };

  const onChange = async (e: CheckboxChangeEvent) => {
    try {
      const body = {
        cart_item_id: item.cart_item_id,
        is_checked: e.target.checked,
      };

      await updateCarts([body]).unwrap();
    } catch (err) {
      const e = err as Error;

      notification.error({
        message: 'Error',
        description: capitalizeFirstLetter(e.message),
      });
    }
  };

  const handleSubmit = async () => {
    try {
      await updateCartItem({
        cart_item_id: item.cart_item_id,
        quantity: item.quantity,
        notes: notes,
        is_checked: item.is_checked,
      }).unwrap();
    } catch (err) {
      const e = err as Error;
      notification.error({
        message: 'Error',
        description: capitalizeFirstLetter(e.message),
      });
    }
  };

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleBlur = () => {
    handleSubmit();
  };

  const handleDecrement = async () => {
    try {
      await updateCartItem({
        cart_item_id: item.cart_item_id,
        quantity: item.quantity - 1,
        notes: item.notes,
        is_checked: item.is_checked,
      }).unwrap();
    } catch (err) {
      const e = err as Error;
      notification.error({
        message: 'Error',
        description: capitalizeFirstLetter(e.message),
      });
    }
  };

  const handleIncrement = async () => {
    try {
      await updateCartItem({
        cart_item_id: item.cart_item_id,
        quantity: item.quantity + 1,
        notes: item.notes,
        is_checked: item.is_checked,
      }).unwrap();
    } catch (err) {
      const e = err as Error;
      notification.error({
        message: 'Error',
        description: capitalizeFirstLetter(e.message),
      });
    }
  };

  const handleDelete = async () => {
    try {
      await deleteCart(item.cart_item_id).unwrap();
      notification.success({
        message: 'Success',
        description: 'Item deleted from cart',
      });
    } catch (err) {
      const e = err as Error;
      notification.error({
        message: 'Error',
        description: capitalizeFirstLetter(e.message),
      });
    }
  };

  const classProps = classNames(
    style.cart__item,
    item.is_valid ? style.cart__item : style.cart__item__invalid,
  );
  return (
    <Spin spinning={isLoadingUpdateCarts || isLoadingDelete}>
      <Checkbox checked={item?.is_checked} onChange={onChange}>
        <div className={classProps}>
          <div className={style.cart__item__content}>
            <Skeleton loading={isLoading} active>
              <div className={style.cart__item__details}>
                <div className={style.cart__item__details__desc}>
                  <Link to={`/${item.product_slug}`}>
                    <Image
                      src={item.image}
                      alt="cart-img"
                      className={style.cart__item__img}
                    />
                  </Link>
                  <div className={style.cart__item__details__desc__item}>
                    <Link
                      className={style.cart__item__title}
                      to={`/${item.product_slug}`}
                    >
                      {textTruncate(item.name, 65)}
                    </Link>
                    {item.discount_price !== 0 &&
                    item.discount_price !== item.real_price ? (
                      <p className={style.cart__item__price}>
                        {toRupiah(Number(item.discount_price))}
                      </p>
                    ) : (
                      <p className={style.cart__item__price}>
                        {toRupiah(Number(item.real_price))}
                      </p>
                    )}

                    {item.discount_price !== 0 &&
                      item.discount_price !== item.real_price && (
                        <StrikethroughText
                          className={style.cart__item__disc__price}
                          text={toRupiah(Number(item?.real_price))}
                        />
                      )}
                    {variant && <p>Variant: {variant.key}</p>}
                  </div>
                </div>

                <div className={style.cart__item__details__action}>
                  <div className={style.cart__item__qty}>
                    <InputQuantity
                      value={item.quantity}
                      handleDecrement={handleDecrement}
                      handleIncrement={handleIncrement}
                      handleChange={handleChange}
                      disabledIncrement={
                        !item?.is_valid || item?.stock <= item?.quantity
                      }
                      disableDecrement={item.quantity === 1 || !item?.is_valid}
                    />
                    {item?.stock === item.quantity && (
                      <p>Maximum quantity is {item?.stock}</p>
                    )}
                  </div>
                  <Button
                    shape="circle"
                    size="small"
                    danger
                    icon={<RiDeleteBinLine />}
                    loading={isLoadingDelete}
                    onClick={handleDelete}
                  ></Button>
                </div>
              </div>
              <div className={style.cart__item__bottom}>
                <div className={style.cart__item__bottom__notes}>
                  <Form onFinish={handleSubmit}>
                    <p>Notes: </p>
                    <TextArea
                      placeholder="add notes"
                      rows={1}
                      value={notes}
                      onChange={handleChangeNotes}
                      maxLength={50}
                      showCount
                      disabled={!item?.is_valid}
                      onKeyDown={handleOnKeyDown}
                      onBlur={handleBlur}
                    />
                  </Form>
                </div>
              </div>
            </Skeleton>
          </div>
          {!item.is_valid && item.stock <= 0 && (
            <Alert message="Out of stock" type="error" closable />
          )}
        </div>
      </Checkbox>
    </Spin>
  );
};

export default CartItemPage;
