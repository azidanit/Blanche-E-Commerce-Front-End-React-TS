import { Form } from 'antd';
import React from 'react';
import { Button, Card, FormLabel, Input, InputPassword } from '../../../atoms';
import style from './index.module.scss';
import useForm from './useForm';
import { rules } from './rules';
import { Link } from 'react-router-dom';
import CardLoginBottom from './CardLoginBottom';

const CardLogin = (): JSX.Element => {
  const { handleSubmit } = useForm();

  return (
    <Card className={style.card__login}>
      <>
        <h6>Login</h6>

        <Form
          name="basic"
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={handleSubmit}
          autoComplete="off"
        >
          <FormLabel label="Email" name="email" rules={rules.email}>
            <Input placeholder="Email" />
          </FormLabel>

          <FormLabel label="Password" name="password" rules={rules.password}>
            <InputPassword placeholder="Password" />
          </FormLabel>
          <Button type="primary" size="large" htmlType="submit" block>
            Login
          </Button>
        </Form>
        <Link to="/">Forgot Password?</Link>
        <CardLoginBottom />
      </>
    </Card>
  );
};

export default CardLogin;
