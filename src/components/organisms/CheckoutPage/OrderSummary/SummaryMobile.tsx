import { Collapse } from 'antd';
import React from 'react';
import Summary from './Summary';

const SummaryMobile: React.FC = () => {
  const { Panel } = Collapse;

  return (
    <Collapse>
      <Panel header="Order Summary" key="1">
        <Summary />
      </Panel>
    </Collapse>
  );
};

export default SummaryMobile;
