import React, { ChangeEvent, useState } from 'react';
import { Card, Input, Modal, ModalHeader } from '../../components';
import style from './index.module.scss';
import { Button, Divider, Radio, RadioChangeEvent } from 'antd';
import { useGetSealabsPayAccountQuery } from '../../app/features/profile/profileApiSlice';
import classNames from 'classnames';
import './override.scss';
import { toRupiahWithoutSymbol } from '../../helpers/toRupiah';

const { Group } = Radio;

interface IInput {
  value: number | undefined;
  formattedValue: string | undefined;
}

const initialInputState: IInput = {
  value: undefined,
  formattedValue: undefined,
};

const TopupWallet: React.FC = () => {
  const { data } = useGetSealabsPayAccountQuery();
  const [inputState, setInputState] = useState(initialInputState);
  const [selectedAcc, setSelectedAcc] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    let str = e.target.value;
    str = str.replace(/[^0-9]/g, '');
    const amount = str !== '' ? parseInt(str) : undefined;
    setInputState({
      value: amount,
      formattedValue: amount ? toRupiahWithoutSymbol(amount) : '',
    });
  };

  const onChangeRadio = (e: RadioChangeEvent) => {
    setSelectedAcc(e.target.value);
  };

  return (
    <>
      <div className={style.tw}>
        <h3 className={style.tw__title}>Top Up Wallet</h3>
        <Card className={style.tw__card}>
          <div className={style.tw__amount}>
            <h4 className={style.tw__card__subtitle}>Amount</h4>
            <Input
              addonBefore="Rp"
              onChange={onChangeInput}
              value={inputState.formattedValue}
            />
          </div>
          <div>
            <h4 className={style.tw__card__subtitle}>Pay with:</h4>
            {data && (
              <Group
                name="group"
                className={classNames(style.tw__radio, 'topup__radio')}
                onChange={onChangeRadio}
              >
                {data.map((item, index) => (
                  <div key={item.id} className={style.tw__radio__item}>
                    <Radio value={item.id}>
                      <p className={style.tw__radio__item__name}>
                        {item.name_on_card}
                      </p>
                      <p className={style.tw__radio__item__number}>
                        {item.card_number.match(/.{1,4}/g)?.join(' ') || ''}
                      </p>
                    </Radio>
                    {index < data.length - 1 && (
                      <Divider className={style.tw__divider} />
                    )}
                  </div>
                ))}
              </Group>
            )}
          </div>
          <Button
            className={style.tw__button}
            type="primary"
            onClick={showModal}
            disabled={!inputState.value || selectedAcc === 0}
            block
          >
            Pay
          </Button>
        </Card>
      </div>
      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        onOk={handleOk}
        width={400}
        centered
      >
        <ModalHeader
          title="Confirm Payment"
          info="Are you sure you want to top up your wallet?"
        />
      </Modal>
    </>
  );
};

export default TopupWallet;
