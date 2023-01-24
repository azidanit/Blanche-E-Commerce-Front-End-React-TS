import { Divider } from 'antd';
import React, { useState } from 'react';
import { ICartItem } from '../../../../helpers/types';
import { Button, Card } from '../../../atoms';
import { CartItem, InputQuantity } from '../../../molecules';
import style from './index.module.scss';

const CardSummary: React.FC = () => {
  const [value, setValue] = useState(0);

  const item: ICartItem = {
    imgUrl: 'https://picsum.photos/200/300',
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    quantity: value,
    price: 100000,
  };

  return (
    <Card className={style.card__summary}>
      <h6>Order Summary</h6>
      <Divider />

      <CartItem item={item} />
      <div className={style.card__summary__quantity}>
        <InputQuantity value={value} />
        <p>
          Stok: <span>990</span>
        </p>
      </div>
      <Divider />
      <div className={style.card__summary__total}>
        <span>Total</span>
        <p>Rp. 100.000</p>
      </div>
      <div className={style.card__summary__button}>
        <Button type="primary" size="large" block>
          Add to Cart
        </Button>
        <Button type="primary" size="large" ghost block>
          Buy Now
        </Button>
      </div>
    </Card>
  );
};

export default CardSummary;
