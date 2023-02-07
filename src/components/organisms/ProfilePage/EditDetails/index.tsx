import React from 'react';
import dayjs from 'dayjs';

import {
  Alert,
  DatePicker,
  FormLabel,
  Input,
  InputNumber,
  Select,
} from '../../../atoms';
import { Form } from '../../../molecules';
import Modal from '../../../molecules/Modal';
import style from './index.module.scss';
import { rules } from './validation';
import useForm from './useForm';
import useMediaQuery from '../../../../hooks/useMediaQuery';
import { IDetails } from '../../../../helpers/types';
import { Form as Aform } from 'antd';
import { capitalizeFirstLetter } from '../../../../helpers/capitalizeFirstLetter';

interface EditDetailsProps {
  isModalOpen: boolean;
  handleOk: () => void;
  handleCancel: () => void;
  details: IDetails;
}

const genderOptions = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
];

const EditDetails: React.FC<EditDetailsProps> = ({
  isModalOpen,
  handleOk,
  handleCancel,
  details,
}) => {
  const { handleSubmit, error, isLoading, isError } = useForm({ handleOk });
  const [form] = Aform.useForm();
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <Modal
      open={isModalOpen}
      onOk={form.submit}
      centered
      onCancel={handleCancel}
      width={600}
      destroyOnClose
      confirmLoading={isLoading}
    >
      <div className={style.edit__profile}>
        <div className={style.edit__profile__header}>
          <h5 className={style.edit__profile__header__title}>Edit Details</h5>
          <p className={style.edit__profile__header__info}>
            Make sure the data is correct before submitting.
          </p>
        </div>
        <Form
          name="basic"
          layout="vertical"
          initialValues={{
            fullname: details.name,
            phone: details.phone,
            gender: details.gender,
            birthdate: dayjs(details.birthdate),
          }}
          onFinish={handleSubmit}
          autoComplete="off"
          preserve={false}
          form={form}
        >
          <FormLabel label="Fullname" name="fullname" rules={rules.fullname}>
            <Input placeholder="Fullname" />
          </FormLabel>
          <FormLabel
            label="Birth Date"
            name="birthdate"
            rules={rules.birthdate}
          >
            <DatePicker format="DD-MM-YYYY" />
          </FormLabel>
          <FormLabel label="Phone" name="phone" rules={rules.phone}>
            <InputNumber
              placeholder="Phone"
              className={style.edit__profile__input}
              size="large"
            />
          </FormLabel>
          <FormLabel label="Gender" name="gender" rules={rules.gender}>
            <Select placeholder="Gender" showSearch options={genderOptions} />
          </FormLabel>
          {isError && error && (
            <Alert
              message={capitalizeFirstLetter(error?.message)}
              type="error"
              showIcon
              className={style.card__login__alert}
            />
          )}
        </Form>
      </div>
    </Modal>
  );
};

export default EditDetails;
