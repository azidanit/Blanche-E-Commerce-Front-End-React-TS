import { StepProps, Steps } from 'antd';
import React, { useEffect, useState } from 'react';
import style from './index.module.scss';
import {
  MdOutlinePayments,
  MdOutlineLocalShipping,
  MdCheck,
  MdTimelapse,
} from 'react-icons/md';
import { dateToMinuteHourMonthStringDayYear } from '../../../../helpers/parseDate';
import classNames from 'classnames';
import './override.scss';
import { ITransactionStatus } from '../../../../helpers/types';

interface TransactionStatus {
  className?: string;
  transactionStatus: ITransactionStatus;
}

const TransactionStatus: React.FC<TransactionStatus> = ({
  className = '',
  transactionStatus,
}) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (transactionStatus.on_completed_at) {
      setCurrent(3);
      return;
    }
    if (transactionStatus.on_canceled_at) {
      setCurrent(3);
      return;
    }
    if (transactionStatus.on_delivered_at) {
      setCurrent(2);
      return;
    }
    if (transactionStatus.on_processed_at) {
      setCurrent(1);
      return;
    }
    if (transactionStatus.on_waited_at) {
      setCurrent(0);
      return;
    }
  }, []);

  const items: StepProps[] = [
    {
      title: 'Paid',
      description: dateToMinuteHourMonthStringDayYear(
        new Date(transactionStatus.on_waited_at),
        ' ',
      ),
      icon: <MdOutlinePayments size={32} />,
    },
    {
      title: 'Processed',
      description: transactionStatus.on_processed_at
        ? dateToMinuteHourMonthStringDayYear(
            new Date(transactionStatus.on_processed_at),
            ' ',
          )
        : '-',
      icon: <MdTimelapse size={32} />,
    },
    {
      title: 'Delivered',
      description: transactionStatus.on_delivered_at
        ? dateToMinuteHourMonthStringDayYear(
            new Date(transactionStatus.on_delivered_at),
            ' ',
          )
        : '-',
      icon: <MdOutlineLocalShipping size={32} />,
    },
    {
      title: 'Completed',
      description: transactionStatus.on_completed_at
        ? dateToMinuteHourMonthStringDayYear(
            new Date(transactionStatus.on_completed_at),
            ' ',
          )
        : '-',
      icon: <MdCheck size={32} />,
    },
  ];

  return (
    <div
      className={classNames(
        className,
        style.transaction__status,
        'transaction__status',
      )}
    >
      <Steps
        current={current}
        items={items}
        labelPlacement="vertical"
        className={style.transaction__status__steps}
        responsive
      />
    </div>
  );
};

export default TransactionStatus;
