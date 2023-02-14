import React, { useState } from 'react';
import Modal from '../../../molecules/Modal';
import {
  IGetUserAddressResponse,
  IGetWalletDetailsResponse,
  ISealabsPayAccounts,
} from '../../../../helpers/types';
import style from './index.module.scss';
import { ModalHeader, Button } from '../../..';
import { Divider, Radio, RadioChangeEvent } from 'antd';
import CardWallet from './CardWallet';
import { useGetSealabsPayAccountQuery } from '../../../../app/features/profile/profileApiSlice';
import CardSealabs from './CardSealabs';
import { useGetWalletDetailsQuery } from '../../../../app/features/wallet/walletApiSlice';
import { MdAddCircleOutline } from 'react-icons/md';
import AddSealabsPay from '../../UserSealabsPay/AddSealabsPay';

interface ModalPaymentPageProps {
  isModalOpen: boolean;
  handleCancel: () => void;
  data?: IGetUserAddressResponse;
  handleOk?: () => void;
}

const ModalPayment: React.FC<ModalPaymentPageProps> = ({
  isModalOpen,
  handleCancel,
  handleOk,
}) => {
  const [payment, setPayment] = useState<
    IGetWalletDetailsResponse | ISealabsPayAccounts
  >();
  const [defaultPayment, setDefaultPayment] = useState<
    IGetWalletDetailsResponse | ISealabsPayAccounts
  >();
  const { data: sealabs, isLoading } = useGetSealabsPayAccountQuery();
  const {
    data: wallet,
    isError,
    isLoading: isLoadingWallet,
  } = useGetWalletDetailsQuery();

  const [isModalSLPOpen, setIsModalSLPOpen] = useState(false);

  const handleOpenModalSLP = () => {
    setIsModalSLPOpen(true);
  };

  const handleCloseModalSLP = () => {
    setIsModalSLPOpen(false);
  };

  const handleChange = (e: RadioChangeEvent) => {
    setPayment(e.target.value);
  };

  return (
    <Modal
      open={isModalOpen}
      centered
      onCancel={handleCancel}
      onOk={handleOk}
      okText="Crete Order"
      okType="primary"
      className={style.choose__payment__modal}
      width={500}
    >
      <ModalHeader title="Choose Address" />
      <Radio.Group
        className={style.choose__payment__modal__radio}
        onChange={handleChange}
        value={payment}
      >
        <h6>Wallet</h6>
        <Radio
          className={style.choose__payment__modal__radio__item}
          value={wallet}
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
        <h6>Order Summary</h6>
        <p>
          Total <span>Rp.200000</span>
        </p>
      </div>
    </Modal>
  );
};

export default ModalPayment;
