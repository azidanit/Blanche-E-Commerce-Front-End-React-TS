import { Divider, Skeleton } from 'antd';
import React, { Fragment, useState } from 'react';
import { UserSealabsPay } from '../../..';
import {
  useDeleteSealabsPayAccountMutation,
  useGetSealabsPayAccountQuery,
} from '../../../../app/features/profile/profileApiSlice';
import { Button, SEO } from '../../../atoms';
import AddSealabsPay from '../../UserSealabsPay/AddSealabsPay';
import style from './index.module.scss';

const SealabsPaySection: React.FC = () => {
  const { data, isLoading } = useGetSealabsPayAccountQuery();
  const [deleteAccount] = useDeleteSealabsPayAccountMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    await deleteAccount(id);
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
          >
            Add new account
          </Button>
        </div>
        <div className={style.sps__list}>
          <Skeleton loading={isLoading}>
            {data?.map((item, index) =>
              index < data.length - 1 ? (
                <Fragment key={item.id}>
                  <UserSealabsPay
                    cardNumber={item.card_number}
                    activeDate={item.active_date}
                    nameOnCard={item.name_on_card}
                    onDelete={() => {
                      onDelete(Number(item.id));
                    }}
                  />
                  <Divider className={style.sps__list__divider} />
                </Fragment>
              ) : (
                <Fragment key={item.id}>
                  <UserSealabsPay
                    cardNumber={item.card_number}
                    activeDate={item.active_date}
                    nameOnCard={item.name_on_card}
                    onDelete={() => {
                      onDelete(Number(item.id));
                    }}
                  />
                </Fragment>
              ),
            )}
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
