import { valueType } from 'antd/es/statistic/utils';
import React from 'react';
import style from './index.module.scss';
import { RiDeleteBinLine } from 'react-icons/ri';
import { Image, StrikethroughText } from '../../../../atoms';
import { textTruncate } from '../../../../../helpers/textTruncate';
import { toRupiah } from '../../../../../helpers/toRupiah';

const ProductItem: React.FC = () => {
  return (
    <div className={style.product__item}>
      <div className={style.product__item__details__item}>
        <div className={style.product__item__details__item__desc}>
          <Image
            src="https://www.soco.id/cdn-cgi/image/w=96,format=auto,dpr=1.45/https://images.soco.id/8c965d4d-c284-4269-bd61-24865dfe5664-18407960361-1629981551709.png"
            alt="cart-img"
            className={style.product__item__img}
          />
          <div className={style.desc}>
            <p>
              {textTruncate(
                ' Perum Pesona Aluna 1 Blok A8 Babakan Limbangan Peuntas sukaraja kab sukabumi, Sukaraja,',
                60,
              )}
            </p>
            <p>
              Variant : <span>Black</span>
            </p>
            <div className={style.product__item__details__item__qty}>
              <p>3pcs</p>
            </div>
          </div>
        </div>
      </div>

      <div className={style.product__item__details__info}>
        <div className={style.product__item__details__info__price}>
          <p className={style.product__item__price}>
            {toRupiah(Number(2000000))}
          </p>
          <StrikethroughText
            className={style.product__item__disc__price}
            text={toRupiah(Number(40000))}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
