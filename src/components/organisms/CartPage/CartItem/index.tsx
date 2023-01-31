import { valueType } from 'antd/es/statistic/utils';
import React, { useState } from 'react';
import { textTruncate } from '../../../../helpers/textTruncate';
import { toRupiah } from '../../../../helpers/toRupiah';
import { Button, Image, TextArea } from '../../../atoms';
import { InputQuantity } from '../../../molecules';
import style from './index.module.scss';
import { GoPencil } from 'react-icons/go';
import { RiDeleteBinLine } from 'react-icons/ri';

const CartItem: React.FC = () => {
  const [quantity, setQuantity] = useState(1);
  const [isNoteMode, setIsNoteMode] = useState(false);

  const handleChange = (value: valueType | null) => {
    setQuantity(value as number);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };
  return (
    <div className={style.cart__item}>
      <div className={style.cart__item__details}>
        <Image
          src="https://res.cloudinary.com/ruparupa-com/image/upload//f_auto,q_auto:eco/v1525451945/Products/10152951_1.jpg"
          alt="cart-img"
          className={style.cart__item__img}
        />
        <div className={style.cart__item__details__item}>
          <p className={style.cart__item__title}>
            {textTruncate(
              'Rak dapur square rak troli rak kamar mandi rak susun serbaguna 4 tingkat dengan roda',
              60,
            )}
          </p>
          <p className={style.cart__item__price}>{toRupiah(10000000)}</p>
        </div>
      </div>
      <div className={style.cart__item__bottom}>
        <div className={style.cart__item__bottom__notes}>
          {isNoteMode ? (
            <form>
              <TextArea placeholder="add notes" rows={3} />
            </form>
          ) : (
            <>
              <button onClick={() => setIsNoteMode(true)}>
                <GoPencil />
                <span>Add Notes</span>
              </button>
            </>
          )}
        </div>
        <InputQuantity
          value={quantity}
          handleDecrement={handleDecrement}
          handleIncrement={handleIncrement}
          handleChange={handleChange}
        />
        <Button shape="circle" size="small" icon={<RiDeleteBinLine />}></Button>
      </div>
    </div>
  );
};

export default CartItem;
