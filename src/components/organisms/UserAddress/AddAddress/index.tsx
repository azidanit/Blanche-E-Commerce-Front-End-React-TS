import React, { useEffect } from 'react';
import { FormLabel, Input, Select } from '../../../atoms';
import { Form } from '../../../molecules';
import Modal from '../../../molecules/Modal';
import style from './index.module.scss';
import { rules } from './validation';
import useForm from './useForm';
import TextArea from 'antd/es/input/TextArea';
import { Space } from 'antd';
import {
  useGetCitiesByProvinceIdQuery,
  useGetDistrictByCityIdQuery,
  useGetProvincesQuery,
  useGetSubDistrictByDistrictIdQuery,
} from '../../../../app/features/address/addressApiSlice';
import { DefaultOptionType } from 'antd/es/select';

interface AddAddressProps {
  isModalOpen: boolean;
  handleOk: () => void;
  handleCancel: () => void;
}

const AddAddress: React.FC<AddAddressProps> = ({
  isModalOpen,
  handleOk,
  handleCancel,
}) => {
  const { handleSubmit, selectedInput, handleChangeSelect, setOption, option } =
    useForm();

  const { data: provinces, isLoading: isLoadingProvinces } =
    useGetProvincesQuery({
      refetchOnMountOrArgChange: true,
    });

  const { data: cities, isLoading: isLoadingCities } =
    useGetCitiesByProvinceIdQuery(Number(selectedInput.province), {
      skip: !selectedInput.province,
      refetchOnMountOrArgChange: true,
    });

  const { data: districts, isLoading: isLoadingDistricts } =
    useGetDistrictByCityIdQuery(Number(selectedInput.city), {
      skip: !selectedInput.city,
      refetchOnMountOrArgChange: true,
    });

  const { data: subdistrict, isLoading: isLoadingSubdstricts } =
    useGetSubDistrictByDistrictIdQuery(Number(selectedInput.district), {
      skip: !selectedInput.city,
      refetchOnMountOrArgChange: true,
    });

  useEffect(() => {
    const data = provinces?.provinces.map((item) => {
      return { value: item.id, label: item.name };
    });
    setOption({
      ...option,
      provinces: data,
    });
  }, [provinces]);

  useEffect(() => {
    const data = cities?.cities.map((item) => {
      return { value: item.id, label: item.name };
    });
    const dataDistricts = districts?.districts.map((item) => {
      return { value: item.id, label: item.name };
    });
    const dataSubdistrict = subdistrict?.sub_districts.map((item) => {
      return { value: item.id, label: item.name };
    });

    setOption({
      ...option,
      cities: data,
      districts: dataDistricts,
      subDistrict: dataSubdistrict,
    });
  }, [
    cities,
    districts,
    subdistrict,
    selectedInput.province,
    selectedInput.city,
    selectedInput.district,
  ]);

  return (
    <Modal
      title="Add User Address"
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
              filterOption={(input, option) => {
                return (option?.label ?? '')
                  .toString()
                  .toLowerCase()
                  .includes(input.toLowerCase());
              }}
              onChange={(value) => handleChangeSelect(value, 'province')}
              loading={isLoadingProvinces}
              value={selectedInput.province}
              options={option.provinces ? option.provinces : undefined}
            />
          </FormLabel>
          <FormLabel label="City" name="city">
            <Select
              showSearch
              placeholder="Select City"
              filterOption={(input, option) => {
                return (option?.label ?? '')
                  .toString()
                  .toLowerCase()
                  .includes(input.toLowerCase());
              }}
              loading={isLoadingCities}
              value={selectedInput.city}
              onChange={(value) => handleChangeSelect(value, 'city')}
              options={option.cities ? option.cities : undefined}
            />
          </FormLabel>
          <FormLabel label="District" name="district">
            <Select
              showSearch
              placeholder="Select district"
              optionFilterProp="children"
              filterOption={(input, option) => {
                return (option?.label ?? '')
                  .toString()
                  .toLowerCase()
                  .includes(input.toLowerCase());
              }}
              value={selectedInput.district}
              loading={isLoadingDistricts}
              onChange={(value) => handleChangeSelect(value, 'district')}
              options={option.districts ? option.districts : undefined}
            />
          </FormLabel>
          <FormLabel label="Sub District" name="subdistrict">
            <Select
              showSearch
              placeholder="Select Sub District"
              optionFilterProp="children"
              filterOption={(input, option) => {
                return (option?.label ?? '')
                  .toString()
                  .toLowerCase()
                  .includes(input.toLowerCase());
              }}
              value={selectedInput.subDistrict}
              loading={isLoadingSubdstricts}
              onChange={(value) => handleChangeSelect(value, 'subdistrict')}
              options={option.subDistrict ? option.subDistrict : undefined}
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
