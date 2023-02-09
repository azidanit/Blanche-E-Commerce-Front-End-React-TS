import { Upload, message } from 'antd';
import {
  RcFile,
  UploadChangeParam,
  UploadFile,
  UploadProps,
} from 'antd/es/upload';
import React, { useState } from 'react';
import { ModalHeader } from '../../..';
import { usePatchProfileDetailsMutation } from '../../../../app/features/profile/profileApiSlice';
import useMediaQuery from '../../../../hooks/useMediaQuery';
import { Avatar, Button, Card } from '../../../atoms';
import style from './index.module.scss';
import { Modal } from '../../../';
import classNames from 'classnames';

interface CardAvatarProps {
  src: string;
}

const beforeUpload = (file: RcFile) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return false;
};

const CardAvatar: React.FC<CardAvatarProps> = ({ src }) => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [patch] = usePatchProfileDetailsMutation();
  const [file, setFile] = useState<File>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleUpload: UploadProps['onChange'] = (
    info: UploadChangeParam<UploadFile>,
  ) => {
    setFile(info.fileList[0].originFileObj);
    showModal();
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setFile(undefined);
  };

  const handleSubmit = async () => {
    try {
      if (!file) return;
      const formData = new FormData();
      formData.append('profile_picture', file as File);
      await patch(formData).unwrap();
      setIsModalOpen(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Card className={style.profile__section__avatar}>
        <Avatar
          shape="square"
          className={style.profile__section__avatar__photo}
          src={src}
          alt="profile"
        />
        <Upload
          name="file"
          onChange={handleUpload}
          showUploadList={false}
          beforeUpload={beforeUpload}
          maxCount={1}
          className={classNames(
            style.profile__section__avatar__upload,
            'upload',
          )}
        >
          <Button className={style.profile__section__avatar__button} block>
            Upload
          </Button>
        </Upload>
      </Card>
      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        onOk={handleSubmit}
        centered
      >
        <ModalHeader
          title="Edit profile Picture"
          info="Are you sure you want to change your profile picture?"
        />
      </Modal>
    </>
  );
};

export default CardAvatar;
