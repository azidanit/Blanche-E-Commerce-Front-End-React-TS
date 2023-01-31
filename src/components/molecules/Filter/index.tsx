import React from 'react';
import { Collapse } from 'antd';
import style from './index.module.scss';
import classNames from 'classnames';
import { IPanel } from '../../../pages/SearchResult/options';
import { Card } from '../../atoms';

const { Panel } = Collapse;

interface CollapseProps {
  defaultActiveKey: string[];
  className?: string;
  onChange?: (key: string | string[]) => void;
  panels: IPanel[];
  ghost?: boolean;
}

const Filter: React.FC<CollapseProps> = ({
  defaultActiveKey,
  className,
  onChange,
  panels,
  ghost,
}) => {
  const classProps = classNames(style.filter, className);

  return (
    <Card className={classProps}>
      <Collapse
        defaultActiveKey={defaultActiveKey}
        onChange={onChange}
        ghost={ghost}
      >
        {panels.map((panel) => (
          <Panel header={panel.header} key={panel.key}>
            {panel.children}
          </Panel>
        ))}
      </Collapse>
    </Card>
  );
};

export default Filter;
