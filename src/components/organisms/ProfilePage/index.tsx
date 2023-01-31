import { Col, Row } from 'antd';
import React from 'react';
import CardProfile from './CardProfile';
import CardProfileDetails from './CardProfileDetails';

const ProfilePage: React.FC = () => {
  return (
    <Row gutter={[32, 32]}>
      <Col xl={7}>
        <CardProfile />
      </Col>
      <Col xl={17}>
        <CardProfileDetails />
      </Col>
    </Row>
  );
};

export default ProfilePage;
