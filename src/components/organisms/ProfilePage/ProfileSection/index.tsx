import { Col, Divider, Row } from 'antd';
import React, { useState } from 'react';
import { Button } from '../../../atoms';
import EditProfile from '../EditProfile';
import CardAvatar from './CardAvatar';
import style from './index.module.scss';
import Profile from './Profile';

const ProfileSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Row className={style.profile__section} gutter={[32, 32]}>
      <Col xl={8}>
        <CardAvatar />
      </Col>
      <Col xl={16}>
        <div className={style.profile__section__item}>
          <h6>My Profile</h6>
          <Button size="middle" type="primary" onClick={showModal}>
            Edit Profile
          </Button>
        </div>
        <Divider />
        <Profile />
        <Button> Change Password</Button>
      </Col>

      <EditProfile
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </Row>
  );
};

export default ProfileSection;
