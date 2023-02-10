import React, { useEffect, useState } from 'react';
import { useGetUserAddressQuery } from '../../../../app/features/address/userAddressApiSlice';
import { IUserAddress } from '../../../../helpers/types';
import { Card } from '../../../atoms';
import { ChooseAddress } from '../../UserAddress';
import style from './index.module.scss';
import { IoLocationSharp } from 'react-icons/io5';

const AddressCheckout: React.FC = () => {
  const { data } = useGetUserAddressQuery();

  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleSetAddress = (value: IUserAddress) => {
    setDefaultAddress(value);
    setIsModalOpen(false);
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
