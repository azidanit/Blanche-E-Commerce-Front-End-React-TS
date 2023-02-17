import React, { useState } from 'react';
import Modal from '../../../molecules/Modal';
import {
  ICheckoutResponse,
  ICheckoutSummaryMerchant,
  IGetUserAddressResponse,
  IGetWalletDetailsResponse,
  IPayWithSLPRequest,
  ISealabsPayAccounts,
  IUserAddress,
  IVoucherMarketplaceResponse,
} from '../../../../helpers/types';
import style from './index.module.scss';
import { ModalHeader, Button, PaymentIframe, Alert } from '../../..';
import { Divider, message, Radio, RadioChangeEvent } from 'antd';
import CardWallet from './CardWallet';
import { useGetSealabsPayAccountQuery } from '../../../../app/features/profile/profileApiSlice';
import CardSealabs from './CardSealabs';
import { useGetWalletDetailsQuery } from '../../../../app/features/wallet/walletApiSlice';
import { MdAddCircleOutline } from 'react-icons/md';
import AddSealabsPay from '../../UserSealabsPay/AddSealabsPay';
import { toRupiah } from '../../../../helpers/toRupiah';
import { usePayWithSLPMutation } from '../../../../app/features/checkout/checkoutApiSlice';
import { IErrorResponse } from '../../../../helpers/types/response.interface';
import { useNavigate } from 'react-router-dom';

interface ModalPaymentPageProps {
  isModalOpen: boolean;
  handleCancel: () => void;
  data?: IGetUserAddressResponse;
  handleOk: () => void;
  order: ICheckoutResponse;
  mpVoucher: IVoucherMarketplaceResponse | undefined;
  merchant: ICheckoutSummaryMerchant[];
  address: IUserAddress | undefined;
}

const ModalPayment: React.FC<ModalPaymentPageProps> = ({
  isModalOpen,
  handleCancel,
  order,
  mpVoucher,
  merchant,
  address,
}) => {
  const [payment, setPayment] = useState<
    IGetWalletDetailsResponse | ISealabsPayAccounts
  >();
  const { data: sealabs } = useGetSealabsPayAccountQuery();
  const { data: wallet, isLoading: isLoadingWallet } =
    useGetWalletDetailsQuery();

  const [isModalSLPOpen, setIsModalSLPOpen] = useState(false);
  const [isIFrameOpen, setIsIFrameOpen] = useState(false);
  const [src, setSrc] = useState('');
  const [payWithSLP, { isLoading }] = usePayWithSLPMutation();
  const navigate = useNavigate();

  const handleOpenModalSLP = () => {
    setIsModalSLPOpen(true);
  };

  const handleFrameCancel = () => {
    setIsIFrameOpen(false);
  };
  const handleCloseModalSLP = () => {
    setIsModalSLPOpen(false);
  };

  const handleChange = (e: RadioChangeEvent) => {
    setPayment(e.target.value);
  };

  const isPaymentSLP = (
    payment: IGetWalletDetailsResponse | ISealabsPayAccounts | undefined,
  ): payment is ISealabsPayAccounts => {
    return (payment as ISealabsPayAccounts).card_number !== undefined;
  };

  const handleSetPayment = async () => {
    if (!isPaymentSLP(payment)) {
      return;
    }

    const body: IPayWithSLPRequest = {
      order_code: order.order_code,
      address_id: address ? address?.id : 0,
      merchants: merchant,
      voucher_marketplace: mpVoucher ? mpVoucher.code : '',
      payment_total: order.total,
      payment_method_code: 'sealabspay',
      payment_account_number: payment?.card_number,
    };

    try {
      const data = await payWithSLP(body).unwrap();
      setSrc(data?.payment_redirect_url);
      setIsIFrameOpen(true);
    } catch (e) {
      const err = e as IErrorResponse;
      message.error(err.message);

      if (err.code === 'INTERNAL_SERVER_ERROR') {
        message.error(err.message);
        setTimeout(() => {
          navigate(0);
        }, 500);
        return;
      }
    }
  };

  return (
    <Modal
      open={isModalOpen}
      centered
      onCancel={handleCancel}
      onOk={handleSetPayment}
      okText="Crete Order"
      okType="primary"
      className={style.choose__payment__modal}
      width={500}
      okButtonProps={{ loading: isLoading, disabled: !order.is_order_valid }}
    >
      <ModalHeader title="Choose Payment Method" />
      <Radio.Group
        className={style.choose__payment__modal__radio}
        onChange={handleChange}
        value={payment}
      >
        <h6>Wallet</h6>
        <Radio
          className={style.choose__payment__modal__radio__item}
          value={wallet}
          disabled={isLoading}
        >
          <CardWallet wallet={wallet} defaultPayment={payment} />
        </Radio>
        <Divider className={style.border} />
        <h6>Sealabs Pay Account</h6>
        {sealabs
          ?.filter((item) => item.is_default)
          .map((item) => (
            <Radio
              className={style.choose__payment__modal__radio__item}
              key={item.name_on_card}
              value={item}
            >
              <CardSealabs slp={item} defaultPayment={payment} />
            </Radio>
          ))}
        {sealabs
          ?.filter((item) => !item.is_default)
          .map((item) => (
            <Radio
              className={style.choose__payment__modal__radio__item}
              key={item.name_on_card}
              value={item}
            >
              <CardSealabs slp={item} defaultPayment={payment} />
            </Radio>
          ))}
        <Button
          block
          size="large"
          icon={<MdAddCircleOutline />}
          className={style.choose__payment__modal__button}
          onClick={handleOpenModalSLP}
        >
          Add Sealabs Pay account
        </Button>
        <AddSealabsPay
          isModalOpen={isModalSLPOpen}
          handleCancel={handleCloseModalSLP}
          handleOk={handleCloseModalSLP}
        />
      </Radio.Group>
      <Divider className={style.border} />
      <div className={style.choose__payment__modal__summary}>
        <p>
          Total <span>{toRupiah(order.total)}</span>
        </p>
      </div>

      {!order.is_order_valid && (
        <Alert
          message="Your order is not valid, please check again!"
          showIcon
          type="warning"
          closable
        />
      )}

      <PaymentIframe
        src={src}
        isIFrameOpen={isIFrameOpen}
        handleFrameCancel={handleFrameCancel}
        handleCancel={handleCancel}
        order_code={order.order_code}
        className={style.ti}
      />
    </Modal>
  );
};

export default ModalPayment;
