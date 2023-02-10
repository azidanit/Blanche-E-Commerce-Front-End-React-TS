import React, { useEffect, useState } from 'react';
import { useGetUserAddressQuery } from '../../../../app/features/address/userAddressApiSlice';
import { IUserAddress } from '../../../../helpers/types';
import { Card } from '../../../atoms';
import { ChooseAddress } from '../../UserAddress';
import style from './index.module.scss';
import { IoLocationSharp } from 'react-icons/io5';
import { Divider } from 'antd';

const OrderSummary: React.FC = () => {
  const { data } = useGetUserAddressQuery();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [address, setAddress] = useState<IUserAddress | undefined>(data?.[0]);

  useEffect(() => {
    setAddress(
      data?.filter((item: IUserAddress) => item.is_default)[0] || data?.[0],
    );
  }, [data]);

  const handleSetAddress = (value: IUserAddress | undefined) => {
    setAddress(value);
    setIsModalOpen(false);
  };

  return (
    <Card className={style.order__summary}>
      <h5>Order Summary</h5>
      <ul className={style.order__summary__content}>
        <li className={style.order__summary__content__item}>
          <span>Subtotal</span>
          <span>$ 100</span>
        </li>
        <li className={style.order__summary__content__item}>
          <span>Delivery Fee</span>
          <span>$ 100</span>
        </li>
        <li className={style.order__summary__content__item}>
          <span>Voucher Discount Store</span>
          <span>$ 100</span>
        </li>
        <li className={style.order__summary__content__item}>
          <span>Voucher Discount Makertplace</span>
          <span>$ 100</span>
        </li>
        <li className={style.order__summary__content__total}>
          <span>Total</span>
          <span>$ 100</span>
        </li>
      </ul>
    </Card>
  );
};

export default OrderSummary;
