import React, { useState } from 'react';
import { useGetUserAddressQuery } from '../../../../app/features/address/userAddressApiSlice';
import { Button, Card } from '../../../atoms';
import style from './index.module.scss';
import { Divider } from 'antd';
import VoucherMarketplace from '../VoucherMarkeplace';
import Summary from './Summary';
import useMediaQuery from '../../../../hooks/useMediaQuery';
import SummaryMobile from './SummaryMobile';
import { ModalPayment } from '../../Payment';
import { ICheckoutResponse } from '../../../../helpers/types';
import { toRupiah } from '../../../../helpers/toRupiah';

interface OrderSummaryProps {
  order: ICheckoutResponse;

  handleSetOrderSummary: (order: ICheckoutResponse) => void;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
  order,
  handleSetOrderSummary,
}) => {
  const { data } = useGetUserAddressQuery();
  const isMobile = useMediaQuery('(max-width: 768px)');

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  return (
    <Card className={style.order__summary}>
      <VoucherMarketplace />
      <Divider style={{ margin: 0 }} />

      {isMobile ? (
        <SummaryMobile order={order} />
      ) : (
        <>
          <h5>Order Summary</h5>
          <Summary order={order} />
        </>
      )}

      <div className={style.order__summary__content__total}>
        <span>Total</span>
        <span>{toRupiah(order.total)}</span>
      </div>
      <Divider style={{ margin: 0 }} />
      <Button size="large" type="primary" onClick={showModal}>
        Choose Payment Method
      </Button>
      <ModalPayment
        isModalOpen={isModalOpen}
        handleCancel={handleCancel}
        handleOk={handleOk}
      />
    </Card>
  );
};

export default OrderSummary;
