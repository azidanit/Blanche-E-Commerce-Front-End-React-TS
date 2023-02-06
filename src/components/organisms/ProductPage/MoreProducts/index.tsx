import React from 'react';
import { IGetProductListResponse } from '../../../../helpers/types';
import { ListCardProduct } from '../../../molecules';
import useForm from '../../Auth/CardMerchantRegistration/SecondStep/useForm';
import style from './index.module.scss';

interface MoreProductsProps {
  title: string;
  data: IGetProductListResponse | undefined;
}

const MoreProducts: React.FC<MoreProductsProps> = ({ title, data }) => {
  return (
    <div className={style.seller__products}>
      <h2 className={style.seller__products__header}>{title}</h2>
      {data && <ListCardProduct data={data} />}
    </div>
  );
};

export default MoreProducts;
