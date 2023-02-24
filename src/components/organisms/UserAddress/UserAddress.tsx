import React from 'react';
import { useGetUserAddressQuery } from '../../../app/features/address/userAddressApiSlice';
import { IUserAddress } from '../../../helpers/types';
import CardAddress from './CardAddress';
import style from './index.module.scss';

const UserAddress: React.FC = () => {
  const { data } = useGetUserAddressQuery();

  return (
    <div className={style.user__address}>
      {data &&
        data
          .filter((item: IUserAddress) => item.is_default)
          .map((item: IUserAddress) => (
            <CardAddress key={item.id} data={item} />
          ))
          .concat(
            data
              ?.filter((item: IUserAddress) => item.is_merchant_address)
              .map((item: IUserAddress) => (
                <CardAddress key={item.id} data={item} />
              )),
          )
          .concat(
            data
              ?.filter(
                (item: IUserAddress) =>
                  !item.is_default && !item.is_merchant_address,
              )
              .map((item: IUserAddress) => (
                <CardAddress key={item.id} data={item} />
              )),
          )}
    </div>
  );
};
export default UserAddress;
