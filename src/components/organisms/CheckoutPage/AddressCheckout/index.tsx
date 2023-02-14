import React, { useEffect, useState } from 'react';
import { useGetUserAddressQuery } from '../../../../app/features/address/userAddressApiSlice';
import { ICheckoutResponse, IUserAddress } from '../../../../helpers/types';
import { Card } from '../../../atoms';
import { ChooseAddress } from '../../UserAddress';
import style from './index.module.scss';
import { IoLocationSharp } from 'react-icons/io5';
import { useCheckoutSummaryMutation } from '../../../../app/features/checkout/checkoutApiSlice';
import { message } from 'antd';
import { capitalizeFirstLetter } from '../../../../helpers/capitalizeFirstLetter';

interface AddressCheckoutProps {
  order: ICheckoutResponse;
  handleSetOrderSummary: (order: ICheckoutResponse) => void;
}

const AddressCheckout: React.FC<AddressCheckoutProps> = ({
  order,
  handleSetOrderSummary,
}) => {
  const { data } = useGetUserAddressQuery();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [checkoutSummary] = useCheckoutSummaryMutation();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [defaultAddress, setDefaultAddress] = useState<IUserAddress>();
  const [addresses, setAddresses] = useState<IUserAddress[]>([]);

  useEffect(() => {
    if (!data) return;

    setDefaultAddress(
      data.filter((item: IUserAddress) => item.is_default)[0] || data[0],
    );

    setAddresses(data);
  }, [data]);

  const handleSetAddress = async (value: IUserAddress) => {
    setDefaultAddress(value);
    setIsModalOpen(false);

    try {
      const data = await checkoutSummary({
        order_code: order.order_code,
        address_id: value.id,
      }).unwrap();
      handleSetOrderSummary(data);
    } catch (e) {
      const err = e as Error;

      message.error(capitalizeFirstLetter(err.message));
    }
  };

  return (
    <Card className={style.address__checkout}>
      <h5>
        <IoLocationSharp />
        Delivery Address
      </h5>{' '}
      {defaultAddress && (
        <ChooseAddress
          data={addresses}
          handleSetAddress={handleSetAddress}
          address={defaultAddress}
          showModal={showModal}
          handleCancel={handleCancel}
          isModalOpen={isModalOpen}
        />
      )}
    </Card>
  );
};

export default AddressCheckout;
