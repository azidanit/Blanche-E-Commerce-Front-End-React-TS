import React, { useEffect, useState } from 'react';
import Modal from '../../../molecules/Modal';
import CardAddress from './CardAddress';
import {
  IGetUserAddressResponse,
  IUser,
  IUserAddress,
} from '../../../../helpers/types';
import style from './index.module.scss';
import { RadioButtonGroup } from '../../..';
import { Radio } from 'antd';

interface ModalAddressPageProps {
  isModalOpen: boolean;
  handleCancel: () => void;
  data: IGetUserAddressResponse | undefined;
  defaultAddress: IUserAddress | undefined;
  handleSetAddress: (data: IUserAddress | undefined) => void;
}

const ModalAddress: React.FC<ModalAddressPageProps> = ({
  isModalOpen,
  handleCancel,
  data,
  defaultAddress,
  handleSetAddress,
}) => {
  const [address, setAddress] = useState<IUserAddress | undefined>(
    defaultAddress,
  );

  const handleChange = (e: any) => {
    setAddress(e.target.value);
  };

  return (
    <Modal
      title="Choose Address"
      open={isModalOpen}
      centered
      onCancel={handleCancel}
      onOk={() => handleSetAddress(address)}
      className={style.choose__address__modal}
      width={600}
    >
      <Radio.Group
        className={style.choose__address__modal__radio}
        onChange={handleChange}
        value={address}
      >
        {data &&
          data
            .filter((item: IUserAddress) => item.is_default)
            .map((item: IUserAddress) => (
              <Radio
                key={item.id}
                value={item}
                className={style.choose__address__radio__item}
              >
                <CardAddress data={item} />
              </Radio>
            ))
            .concat(
              data
                ?.filter((item: IUserAddress) => !item.is_default)
                .map((item: IUserAddress) => (
                  <Radio key={item.id} value={item}>
                    <CardAddress data={item} />
                  </Radio>
                )),
            )}
      </Radio.Group>
    </Modal>
  );
};

export default ModalAddress;
