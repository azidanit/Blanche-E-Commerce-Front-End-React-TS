import { DefaultOptionType } from 'antd/es/select';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../../app/hooks';
import {
  AddAddressProps,
  EditProfileProps,
  FormReturnAddress,
  FormReturnAuth,
  OptionType,
  SelectedInput,
} from '../../../../helpers/types';

function useForm(): FormReturnAddress<AddAddressProps> {
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [error, setError] = useState<Error>();
  const [option, setOption] = useState<OptionType>({
    provinces: undefined,
    cities: undefined,
    districts: undefined,
    subDistrict: undefined,
  });

  const [selectedInput, setSelectedInput] = useState<SelectedInput>({
    province: '',
    city: '',
    district: '',
    subDistrict: '',
  });

  const handleChangeSelect = (value: string, name: string) => {
    if (name === 'province') {
      setSelectedInput({
        province: value,
        city: null,
        district: null,
        subDistrict: '',
      });
    } else if (name === 'city') {
      setSelectedInput({
        ...selectedInput,
        city: value,
        district: '',
      });
    } else if (name === 'district') {
      setSelectedInput({
        ...selectedInput,
        district: value,
        subDistrict: '',
      });
    } else {
      setSelectedInput({
        ...selectedInput,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (values: AddAddressProps) => {
    try {
      navigate(from, { replace: true });
    } catch (error) {
      setError(error as Error);
    }
  };

  return {
    handleSubmit,
    error,
    handleChangeSelect,
    selectedInput,
    setOption,
    option,
  };
}

export default useForm;
