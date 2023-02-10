import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import { Alert, Badge, Button, Card } from '../../../atoms';
import style from './index.module.scss';
import EditAddress from '../EditAddress';
import { IUserAddress } from '../../../../helpers/types';
import {
  useDeleteUserAddressMutation,
  useSetDefaultAddressMutation,
} from '../../../../app/features/address/userAddressApiSlice';
import { notification } from 'antd';
import { Popconfirm } from '../../..';
import { QuestionCircleOutlined } from '@ant-design/icons';

interface CardAddressProps {
  data: IUserAddress;
}

export interface initialValueType {
  id: number;
  name: string;
  phone: string;
  province: string;
  label: string;
  province_id: number;
  city: string;
  city_id: number;
  district: string;
  district_id: number;
  subDistrict: string;
  subdistrict_id: number;
  details: string;
}

const CardAddress: React.FC<CardAddressProps> = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState<Error>();

  const [initialValue, setInitialValue] = useState<initialValueType>({
    id: 0,
    name: '',
    phone: '',
    label: '',
    province: '',
    province_id: 0,
    city: '',
    city_id: 0,
    district: '',
    district_id: 0,
    subDistrict: '',
    subdistrict_id: 0,
    details: '',
  });

  const [setDefaultAddress, { isSuccess, isError, isLoading }] =
    useSetDefaultAddressMutation();
  const [
    deleteAddress,
    { isLoading: isLoadingDelete, isError: isErrorDelete },
  ] = useDeleteUserAddressMutation();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const classProps = classNames(
    style.card__address,
    data?.is_default && style.card__address__active,
  );

  useEffect(() => {
    setInitialValue({
      id: data?.id,
      name: data?.name,
      phone: data?.phone,
      label: data?.label,
      province: data?.province_name,
      city: data?.city_name,
      district: data?.district_name,
      subDistrict: data?.subdistrict_name,
      province_id: data?.province_id,
      city_id: data?.city_id,
      district_id: data?.district_id,
      subdistrict_id: data?.subdistrict_id,
      details: data?.details,
    });
  }, [data]);

  const handleSetDefaulAddress = async () => {
    try {
      await setDefaultAddress(data?.id).unwrap();

      document.documentElement.scrollTop = 0;
      notification.success({
        message: 'Success',
        description: 'Set default address success',
      });
    } catch (e) {
      const error = e as Error;
      setError(error);

      notification.error({
        message: 'Error Set Default Address',
        description: error.message,
      });
    }
  };

  const handleDeleteAddress = async () => {
    try {
      await deleteAddress(data?.id).unwrap();
      notification.success({
        message: 'Success',
        description: 'Delete address success',
      });
    } catch (e) {
      const error = e as Error;
      setError(error);
    }
  };

  return (
    <Card className={classProps}>
      <div className={style.card__address__title}>
        <p>{data.label}</p>
        {data?.is_default && (
          <Badge
            className={style.card__address__badge}
            count="Default"
            color={'gray'}
          />
        )}
      </div>
      <ul className={style.card__address__content}>
        <li>
          {data?.name} ({data?.phone})
        </li>
        <li>{data?.details}</li>
        <li>
          {data?.subdistrict_name}, {data?.district_name} {data?.zip_code}
        </li>
        <li>
          {data?.city_name}, {data?.province_name}
        </li>
      </ul>
      <div className={style.card__address__button}>
        <Button type="primary" size="middle" onClick={showModal}>
          Change Address
        </Button>
        <Popconfirm
          title="Delete address"
          description="Are you sure to delete this address?"
          icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
          onConfirm={handleDeleteAddress}
          okButtonProps={{ loading: isLoadingDelete }}
        >
          <Button
            size="middle"
            type="primary"
            loading={isLoadingDelete}
            disabled={data.is_default}
            danger
          >
            Delete Address
          </Button>
        </Popconfirm>
        <Button
          type="primary"
          ghost
          size="middle"
          disabled={data.is_default}
          onClick={handleSetDefaulAddress}
          loading={isLoading}
        >
          Set Default Address
        </Button>
      </div>
      <EditAddress
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        data={initialValue}
        handleCancel={handleCancel}
      />
      {isErrorDelete && (
        <Alert message={error?.message} type="error" showIcon closable />
      )}
    </Card>
  );
};

export default CardAddress;
