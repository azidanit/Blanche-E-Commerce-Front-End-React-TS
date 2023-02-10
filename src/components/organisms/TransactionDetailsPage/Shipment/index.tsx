import { StepProps, Steps } from 'antd';
import React from 'react';
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

const items: StepProps[] = [
  {
    title: 'Paid',
    description: dateToMinuteHourMonthStringDayYear(new Date(), ' '),
    icon: <MdOutlinePayments size={32} />,
  },
  {
    title: 'Processed',
    description: dateToMinuteHourMonthStringDayYear(new Date(), ' '),
    icon: <MdTimelapse size={32} />,
  },
  {
    title: 'Delivered',
    description: dateToMinuteHourMonthStringDayYear(new Date(), ' '),
    icon: <MdOutlineLocalShipping size={32} />,
  },
  {
    title: 'Completed',
    description: '-',
    icon: <MdCheck size={32} />,
  },
];

interface ShipmentProps {
  className?: string;
}

const Shipment: React.FC<ShipmentProps> = ({ className = '' }) => {
  return (
    <div className={classNames(className, style.shipment, 'shipment')}>
      <Steps
        current={2}
        items={items}
        labelPlacement="vertical"
        className={style.shipment__steps}
        responsive
      />
    </div>
  );
};

export default Shipment;
