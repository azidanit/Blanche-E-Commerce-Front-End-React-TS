import React from 'react';
import { Link } from 'react-router-dom';
import { Alert, Button, Card, FormLabel, Input } from '../../../../atoms';
import { Form } from '../../../../molecules';
import style from './index.module.scss';
import useForm from './useForm';
import { rules } from './validation';

interface FirstStepProps {
  step: number;
  handleNext: () => void;
}

const FirstStep: React.FC<FirstStepProps> = ({ step, handleNext }) => {
  const { handleSubmit, values } = useForm({ handleNext });

  return (
    <div className={style.card__first__step}>
      {step === 0 ? (
        <Form
          name="basic"
          layout="vertical"
          autoComplete="off"
          onFinish={handleSubmit}
        >
          <FormLabel
            label="Store Name"
            name="store"
            rules={rules.store}
            initialValue={values?.store}
          >
            <Input placeholder="store name" />
          </FormLabel>
          <FormLabel
            label="Domain Name"
            name="domain"
            rules={rules.domain}
            initialValue={values?.domain}
          >
            <Input placeholder="blanche.com/domain" />
          </FormLabel>
          {/* {isError && (
          <Alert
            message={capitalizeFirstLetter(error?.message)}
            type="error"
            showIcon
            className={style.card__first__step__alert}
          />
        )} */}
          <div className="card__first__step__button">
            <Button type="primary" size="large" htmlType="submit" block>
              Next
            </Button>
          </div>
        </Form>
      ) : (
        <ul>
          <li>Store : {values?.store}</li>
          <li>Domain : {values?.domain}</li>
        </ul>
      )}
    </div>
  );
};

export default FirstStep;
