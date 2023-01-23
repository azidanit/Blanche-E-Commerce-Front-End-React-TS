import { Form } from 'antd';
import React from 'react';
import { Button, Card, FormLabel, Input, InputPassword } from '../../../atoms';
import style from './index.module.scss';
import useForm from './useForm';
import { rules } from './rules';

const CardLogin = (): JSX.Element => {
  const { handleSubmit } = useForm();

  return (
    <Card className={style.card__login}>
      <>
        <h6>Hey Hello👋</h6>
        <p>Lorem ipsum dolor sit amet.</p>

        <Form
          name="basic"
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={handleSubmit}
          autoComplete="off"
        >
          <FormLabel label="Email" name="email" rules={rules.email}>
            <Input />
          </FormLabel>

          <FormLabel label="Password" name="password" rules={rules.password}>
            <InputPassword />
          </FormLabel>
          <Button type="primary">Submit</Button>
        </Form>
      </>
    </Card>
  );
};

export default CardLogin;
