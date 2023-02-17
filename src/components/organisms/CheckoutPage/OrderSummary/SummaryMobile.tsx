import { Collapse } from 'antd';
import React from 'react';
import {
  ICheckoutResponse,
  IVoucherMarketplaceResponse,
} from '../../../../helpers/types';
import Summary from './Summary';

interface SummaryProps {
  order: ICheckoutResponse;
  mpVoucher: IVoucherMarketplaceResponse | undefined;
}
const SummaryMobile: React.FC<SummaryProps> = ({ order, mpVoucher }) => {
  const { Panel } = Collapse;

  return (
    <Collapse>
      <Panel header="Order Summary" key="1">
        <Summary order={order} mpVoucher={mpVoucher} />
      </Panel>
    </Collapse>
  );
};

export default SummaryMobile;
