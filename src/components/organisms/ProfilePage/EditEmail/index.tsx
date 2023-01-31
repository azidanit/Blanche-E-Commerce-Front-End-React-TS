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

interface EditEmailProps {
  isModalOpen: boolean;
  handleOk: () => void;
  handleCancel: () => void;
}

const EditEmail: React.FC<EditEmailProps> = ({
  isModalOpen,
  handleOk,
  handleCancel,
}) => {
  const { handleSubmit } = useForm();
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <Modal
      title="Edit Email"
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
          <FormLabel label="Email" name="email" rules={rules.phone}>
            <Input placeholder="email" />
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

export default EditEmail;
