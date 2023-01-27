import { Row } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { Alert, Button, Card, FormLabel, Select } from '../../../../atoms';
import { Form } from '../../../../molecules';
import style from './index.module.scss';

interface SecondStepProps {
  step: number;
  handleNext: () => void;
  handleBack: () => void;
}

const SecondStep: React.FC<SecondStepProps> = ({
  step,
  handleBack,
  handleNext,
}) => {
  return (
    <div className={style.card__second__step}>
      <Form name="basic" layout="vertical" autoComplete="off">
        <FormLabel label="Default Store Address" name="store">
          <Select
            showSearch
            placeholder="Select a person"
            optionFilterProp="children"
            // filterOption={(input, option) =>
            //   (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            // }
            options={[
              {
                value: 'jack',
                label: 'Jack',
              },
              {
                value: 'lucy',
                label: 'Lucy',
              },
              {
                value: 'tom',
                label: 'Tom',
              },
            ]}
            disabled={step !== 1}
          />
        </FormLabel>
        {/* {isError && (
          <Alert
            message={capitalizeFirstLetter(error?.message)}
            type="error"
            showIcon
            className={style.card__second__step__alert}
          />
        )} */}
        <div
          className="card__second__step__button"
          style={{ display: 'flex', gap: 10 }}
        >
          <Button
            type="primary"
            size="large"
            htmlType="submit"
            block
            disabled={step !== 1}
            onClick={handleBack}
          >
            Back
          </Button>
          <Button
            type="primary"
            size="large"
            htmlType="submit"
            ghost
            block
            disabled={step !== 1}
          >
            Register Merchant
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default SecondStep;
