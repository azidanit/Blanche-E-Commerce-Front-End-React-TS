import React from 'react';
import { textTruncate } from '../../../../../helpers/textTruncate';
import { Image } from '../../../../atoms';
import style from './index.module.scss';

const Product: React.FC = () => {
  return (
    <div className={style.card__order__product}>
      <Image
        src="https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/6/8/07f30751-364e-4142-aef5-da339c50fa00.jpg.webp?ect=4g"
        alt="product"
        className={style.card__order__product__image}
      />
      <div className={style.card__order__product__desc}>
        <p className={style.card__order__product__desc__name}>
          {textTruncate(
            'refund process that will be triggered when the customer',
            40,
          )}
        </p>
        <p className={style.card__order__product__details__quantity}>
          Rp.200000 x 2
        </p>
      </div>
    </div>
  );
};

export default Product;
