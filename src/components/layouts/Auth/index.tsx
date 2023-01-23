import React from 'react';
import style from './index.module.scss';
import { AuthSectionLeft, AuthSectionRight } from '../../molecules';
import { Row, Col } from 'antd';

interface AuthProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthProps> = ({ children }) => {
  return (
    <Row className={style.auth__layout}>
      <Col xs={2} sm={4} md={6} lg={8} xl={10}>
        <AuthSectionLeft />
      </Col>
      <Col xs={2} sm={4} md={6} lg={8} xl={10}>
        <AuthSectionRight />
      </Col>
    </Row>
  );
};

export default AuthLayout;
