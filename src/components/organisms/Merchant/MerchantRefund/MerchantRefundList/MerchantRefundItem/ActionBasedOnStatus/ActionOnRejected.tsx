import React from 'react';
import { MdChatBubbleOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { IRefundRequest } from '../../../../../../../helpers/types/refund.interface';
import { Button } from '../../../../../../atoms';
import style from '../index.module.scss';

interface ActionProps {
  refund: IRefundRequest;
}

const ActionOnNeedRejected: React.FC<ActionProps> = ({ refund }) => {
  return (
    <Button type="primary" ghost danger disabled>
      Rejected
    </Button>
  );
};

export default ActionOnNeedRejected;
