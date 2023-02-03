import React from 'react';
import {
  Avatar,
  Button,
  Card,
  DatePicker,
  FormLabel,
  Input,
  Select,
} from '../../../atoms';
import { Form } from '../../../molecules';
import Modal from '../../../molecules/Modal';
import style from './index.module.scss';
import { rules } from './validation';
import useForm from './useForm';
import useMediaQuery from '../../../../hooks/useMediaQuery';
import TextArea from 'antd/es/input/TextArea';
import { Space } from 'antd';

interface EditAddressProps {
  isModalOpen: boolean;
  handleOk: () => void;
  handleCancel: () => void;
}

const AddAddress: React.FC<EditAddressProps> = ({
  isModalOpen,
  handleOk,
  handleCancel,
}) => {
  const { handleSubmit } = useForm();

  return (
    <Modal
      title="Edit User Address"
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
          <Space>
            <FormLabel label="Name " name="name" rules={rules.name}>
              <Input placeholder="Name" />
            </FormLabel>
            <FormLabel label="Phone" name="phone" rules={rules.phone}>
              <Input placeholder="Phone" />
            </FormLabel>
          </Space>
          <FormLabel label="Label Address" name="label" rules={rules.phone}>
            <Input placeholder="Label Address" />
          </FormLabel>
          <FormLabel label="Province" name="province">
            <Select
              showSearch
              placeholder="Select Province"
              optionFilterProp="children"
              // filterOption={(input, option) =>
              //   (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
              // }
              options={[
                {
                  value: 'jack',
                  label: 'Jack',
                },
                {
                  value: 'lucy',
                  label: 'Lucy',
                },
                {
                  value: 'tom',
                  label: 'Tom',
                },
              ]}
            />
          </FormLabel>
          <FormLabel label="City" name="city">
            <Select
              showSearch
              placeholder="Select City"
              optionFilterProp="children"
              // filterOption={(input, option) =>
              //   (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
              // }
              options={[
                {
                  value: 'jack',
                  label: 'Jack',
                },
                {
                  value: 'lucy',
                  label: 'Lucy',
                },
                {
                  value: 'tom',
                  label: 'Tom',
                },
              ]}
            />
          </FormLabel>
          <FormLabel label="District" name="district">
            <Select
              showSearch
              placeholder="Select district"
              optionFilterProp="children"
              // filterOption={(input, option) =>
              //   (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
              // }
              options={[
                {
                  value: 'jack',
                  label: 'Jack',
                },
                {
                  value: 'lucy',
                  label: 'Lucy',
                },
                {
                  value: 'tom',
                  label: 'Tom',
                },
              ]}
            />
          </FormLabel>
          <FormLabel label="Sub District" name="subdistrict">
            <Select
              showSearch
              placeholder="Select Sub District"
              optionFilterProp="children"
              // filterOption={(input, option) =>
              //   (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
              // }
              options={[
                {
                  value: 'jack',
                  label: 'Jack',
                },
                {
                  value: 'lucy',
                  label: 'Lucy',
                },
                {
                  value: 'tom',
                  label: 'Tom',
                },
              ]}
            />
          </FormLabel>
          <FormLabel label="More Details" name="details">
            <TextArea />
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

export default AddAddress;
