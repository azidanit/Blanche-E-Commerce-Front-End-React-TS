import React, { useState } from 'react';
import { useGetUserAddressQuery } from '../../../../app/features/address/userAddressApiSlice';
import { Button, Card } from '../../../atoms';
import style from './index.module.scss';
import { Divider } from 'antd';
import VoucherMarketplace from '../VoucherMarkeplace';
import Summary from './Summary';
import useMediaQuery from '../../../../hooks/useMediaQuery';
import SummaryMobile from './SummaryMobile';

const OrderSummary: React.FC = () => {
  const { data } = useGetUserAddressQuery();
  const isMobile = useMediaQuery('(max-width: 768px)');

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Card className={style.order__summary}>
      <VoucherMarketplace />
      <Divider style={{ margin: 0 }} />

      {isMobile ? (
        <SummaryMobile />
      ) : (
        <>
          <h5>Order Summary</h5>
          <Summary />
        </>
      )}

      <div className={style.order__summary__content__total}>
        <span>Total</span>
        <span>$ 100</span>
      </div>
      <Divider style={{ margin: 0 }} />
      <Button size="large" type="primary">
        Choose Payment Method
      </Button>
    </Card>
  );
};

export default OrderSummary;
