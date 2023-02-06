import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  AddAddressProps,
  FormReturnAddress,
  OptionType,
  SelectedInput,
} from '../../../../helpers/types';

function useForm(): FormReturnAddress<AddAddressProps> {
  const location = useLocation();
  const [error, setError] = useState<Error>();
  const [option, setOption] = useState<OptionType>({
    provinces: undefined,
    cities: undefined,
    districts: undefined,
    subDistrict: undefined,
  });

  const [selectedInput, setSelectedInput] = useState<SelectedInput>({
    province: undefined,
    city: undefined,
    district: undefined,
    subDistrict: undefined,
  });

  const handleChangeProvince = (province: string) => {
    setSelectedInput({
      province,
      city: undefined,
      district: undefined,
      subDistrict: undefined,
    });
  };

  const handleChangeCity = (city: string) => {
    setSelectedInput((prevValue) => ({
      ...prevValue,
      city,
      district: undefined,
      subDistrict: undefined,
    }));
  };

  const handleChangeDistrict = (district: string) => {
    setSelectedInput((prevValue) => ({
      ...prevValue,
      district,
      subDistrict: undefined,
    }));
  };

  const handleChangeSubDistrict = (subDistrict: string) => {
    setSelectedInput((prevValue) => ({
      ...prevValue,
      subDistrict,
    }));
  };

  const handleSubmit = async (values: AddAddressProps) => {
    console.log('asd');
    try {
      console.log(values);
      // navigate(from, { replace: true });
    } catch (error) {
      setError(error as Error);
    }
  };

  return {
    handleSubmit,
    error,
    handleChangeCity,
    handleChangeDistrict,
    handleChangeProvince,
    handleChangeSubDistrict,
    selectedInput,
    setOption,
    option,
  };
}

export default useForm;
