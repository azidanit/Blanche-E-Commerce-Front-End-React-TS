import { Divider, Skeleton, Space } from 'antd';
import { valueType } from 'antd/es/statistic/utils';
import React, { useEffect, useState } from 'react';
import { toRupiah } from '../../../../helpers/toRupiah';
import { ICartItem } from '../../../../helpers/types';
import useProduct from '../../../../hooks/useProduct';
import { Button, Card } from '../../../atoms';
import { CartItem, InputQuantity } from '../../../molecules';
import style from './index.module.scss';

const CardSummary: React.FC = () => {
  const { product, stock, price, images, isLoading } = useProduct();

  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(
    price ? price : product?.max_real_price,
  );
  const item: ICartItem = {
    imgUrl: images?.[0] ? images[0] : '',
    title: product?.title ? product.title : '',
    quantity: quantity,
    price: price ? price : 0,
  };

  const handleChange = (value: valueType | null) => {
    setQuantity(value as number);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    if (quantity < (stock as number)) {
      setQuantity(quantity + 1);
    }
  };

  useEffect(() => {
    setTotalPrice(quantity * (price as number));
  }, [quantity, price]);

  return (
    <Card className={style.card__summary}>
      <Skeleton loading={isLoading}>
        <h6>Order Summary</h6>
        <Divider />

        <CartItem item={item} />
        <div className={style.card__summary__quantity}>
          <InputQuantity
            value={quantity}
            handleDecrement={handleDecrement}
            handleIncrement={handleIncrement}
            handleChange={handleChange}
          />
          <p>
            Stok: <span>{stock}</span>
          </p>
        </div>
        <Divider />
        <div className={style.card__summary__total}>
          <span>Total</span>
          <p>{toRupiah(totalPrice)}</p>
        </div>
      </Skeleton>
      <div className={style.card__summary__button}>
        {isLoading ? (
          <>
            <Skeleton.Button block />
            <Skeleton.Button block />
          </>
        ) : (
          <>
            <Button type="primary" size="large" block>
              Add to Cart
            </Button>
            <Button type="primary" size="large" ghost block>
              Buy Now
            </Button>
          </>
        )}
      </div>
    </Card>
  );
};

export default CardSummary;
