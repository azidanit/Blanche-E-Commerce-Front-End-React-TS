import { Divider, Skeleton } from 'antd';
import React, { Fragment, useState } from 'react';
import { UserSealabsPay } from '../../..';
import {
  useDeleteSealabsPayAccountMutation,
  useGetSealabsPayAccountQuery,
  usePatchDefaultSealabsPayAccountMutation,
} from '../../../../app/features/profile/profileApiSlice';
import { Button, SEO } from '../../../atoms';
import AddSealabsPay from '../../UserSealabsPay/AddSealabsPay';
import style from './index.module.scss';

const SealabsPaySection: React.FC = () => {
  const { data, isLoading } = useGetSealabsPayAccountQuery();
  const [deleteAccount] = useDeleteSealabsPayAccountMutation();
  const [patchDefault] = usePatchDefaultSealabsPayAccountMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(data);

  const onClick = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onDelete = async (id: number) => {
    try {
      await deleteAccount(id);
    } catch (err) {
      console.log(err);
    }
  };

  const onSetDefault = async (id: number) => {
    try {
      await patchDefault(id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <SEO title="Sealabs Pay Account" description="Sealabs Pay Account page" />
      <div className={style.sps}>
        <div className={style.sps__header}>
          <div className={style.sps__header__left}>
            <h1 className={style.sps__header__left__title}>
              Sealabs Pay Accounts
            </h1>
            <p className={style.sps__header__left__info}>
              See all of your sealabs pay accounts here.
            </p>
          </div>
          <Button
            onClick={onClick}
            className={style.sps__header__add}
            type="primary"
            size="large"
          >
            Add new account
          </Button>
        </div>
        <div className={style.sps__list}>
          <h4 className={style.sps__list__header}>Default</h4>
          <p className={style.sps__list__info}>
            Automatically selected for your payment.
          </p>
          <Skeleton loading={isLoading}>
            {data
              ?.filter((item) => item.is_default)
              .map((item) => (
                <Fragment key={item.id}>
                  <UserSealabsPay
                    cardNumber={item.card_number}
                    activeDate={item.active_date}
                    nameOnCard={item.name_on_card}
                    onDelete={() => {
                      onDelete(Number(item.id));
                    }}
                    onSetDefault={() => {
                      onSetDefault(Number(item.id));
                    }}
                    isDefault={item.is_default}
                  />
                </Fragment>
              ))}
          </Skeleton>
        </div>
        <div className={style.sps__list}>
          <h4 className={style.sps__list__header}>Others</h4>
          <p className={style.sps__list__info}>
            You can set default payment account here.
          </p>
          <Skeleton loading={isLoading}>
            {data
              ?.filter((item) => !item.is_default)
              .map((item, index) => (
                <Fragment key={item.id}>
                  <UserSealabsPay
                    cardNumber={item.card_number}
                    activeDate={item.active_date}
                    nameOnCard={item.name_on_card}
                    onDelete={() => {
                      onDelete(Number(item.id));
                    }}
                    onSetDefault={() => {
                      onSetDefault(Number(item.id));
                    }}
                    isDefault={item.is_default}
                  />
                  {index < data.length - 2 && (
                    <Divider className={style.sps__list__divider} />
                  )}
                </Fragment>
              ))}
          </Skeleton>
        </div>
      </div>
      <AddSealabsPay
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </>
  );
};

export default SealabsPaySection;
