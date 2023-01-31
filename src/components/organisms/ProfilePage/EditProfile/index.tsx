import React from 'react';
import {
  Avatar,
  Button,
  Card,
  DatePicker,
  FormLabel,
  Input,
} from '../../../atoms';
import { Form } from '../../../molecules';
import Modal from '../../../molecules/Modal';
import style from './index.module.scss';
import { rules } from './validation';
import useForm from './useForm';
import useMediaQuery from '../../../../hooks/useMediaQuery';

interface EditProfileProps {
  isModalOpen: boolean;
  handleOk: () => void;
  handleCancel: () => void;
}

const EditProfile: React.FC<EditProfileProps> = ({
  isModalOpen,
  handleOk,
  handleCancel,
}) => {
  const { handleSubmit } = useForm();
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <Modal
      title="Edit User"
      open={isModalOpen}
      onOk={handleOk}
      centered
      onCancel={handleCancel}
      width={600}
    >
      <div className={style.edit__profile}>
        <Form
          name="basic"
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={handleSubmit}
          autoComplete="off"
        >
          <Card className={style.edit__profile__avatar}>
            <Avatar size={!isMobile ? 280 : 180} />
            <Button>Edit Photo</Button>
          </Card>
          <FormLabel label="Name" name="name" rules={rules.name}>
            <Input placeholder="Name" />
          </FormLabel>
          <FormLabel
            label="Birth Date"
            name="birthdate"
            rules={rules.birthdate}
          >
            <DatePicker />
          </FormLabel>
          <FormLabel label="Phone" name="phone" rules={rules.phone}>
            <Input placeholder="Phone" />
          </FormLabel>
          {/* {isError && (
            <Alert
              message={capitalizeFirstLetter(error?.message)}
              type="error"
              showIcon
              className={style.card__login__alert}
            />
          )} */}
        </Form>
      </div>
    </Modal>
  );
};

export default EditProfile;
