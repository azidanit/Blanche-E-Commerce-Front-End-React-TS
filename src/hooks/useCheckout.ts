import { message } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useCheckoutSummaryMutation } from '../app/features/checkout/checkoutApiSlice';

import { capitalizeFirstLetter } from '../helpers/capitalizeFirstLetter';
import {
  ICheckoutResponse,
  ICheckoutSummaryMerchant,
  IUserAddress,
  IVoucherMarketplaceResponse,
} from '../helpers/types';

interface useCheckoutReturn {
  orderSummary: ICheckoutResponse | undefined;
  address: IUserAddress | undefined;
  errorAddress: string;
  mpVoucher: IVoucherMarketplaceResponse | undefined;
  merchant: ICheckoutSummaryMerchant[];
  errorDeliveryOption: string;
  handleChangeAddress: (address: IUserAddress) => void;
  handleChangeMpVoucher: (
    voucher: IVoucherMarketplaceResponse | undefined,
  ) => void;
  handleChangeMerchant: (
    merchant_id: number,
    voucher_merchant: string,
    delivery_option: string,
  ) => void;
  handleMakeTx: () => boolean;
  isLoading: boolean;
  setOrderSummary: React.Dispatch<
    React.SetStateAction<ICheckoutResponse | undefined>
  >;
  data: string | null;
}

const useCheckout = (): useCheckoutReturn => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const [orderSummary, setOrderSummary] = useState<
    ICheckoutResponse | undefined
  >(undefined);
  const [address, setAddress] = useState<IUserAddress | undefined>(undefined);
  const [errorAddress, setErrorAddress] = useState<string>('');
  const [mpVoucher, setMpVoucher] = useState<
    IVoucherMarketplaceResponse | undefined
  >(undefined);
  const [merchant, setMerchant] = useState<ICheckoutSummaryMerchant[]>([]);
  const [errorDeliveryOption, setErrorDeliveryOption] = useState<string>('');
  const data = params.get('data');

  const [checkoutSummary, { isLoading }] = useCheckoutSummaryMutation();

  const handleChangeAddress = (address: IUserAddress) => {
    setAddress(address);
  };

  const handleChangeMpVoucher = (
    voucher: IVoucherMarketplaceResponse | undefined,
  ) => {
    setMpVoucher(voucher);
  };

  const handleChangeMerchant = (
    merchant_id: number,
    voucher_merchant: string,
    delivery_option: string,
  ) => {
    const merchantIndex = merchant.findIndex(
      (item) => item.merchant_id === merchant_id,
    );

    if (merchantIndex === -1) {
      const newMerchant: ICheckoutSummaryMerchant = {
        merchant_id,
        voucher_merchant,
        delivery_option,
      };

      setMerchant([...merchant, newMerchant]);
    } else {
      const newMerchant = [...merchant];
      newMerchant[merchantIndex] = {
        merchant_id,
        voucher_merchant,
        delivery_option,
      };

      setMerchant(newMerchant);
    }
  };

  useEffect(() => {
    if (
      (merchant.filter((item) => item.delivery_option).length > 0 &&
        merchant.length > 0) ||
      merchant.length !== 0
    ) {
      setErrorDeliveryOption('');
    }
  }, [merchant]);

  const handleMakeTx = (): boolean => {
    if (!address) {
      setErrorAddress('Please select address');
    }

    const isMerchantDeliveryOptionEmpty =
      (merchant.filter((item) => !item.delivery_option).length > 0 &&
        merchant.length > 0) ||
      merchant.length === 0;

    if (isMerchantDeliveryOptionEmpty) {
      setErrorDeliveryOption('Please select delivery option');
    }

    return errorDeliveryOption === '' && !isMerchantDeliveryOptionEmpty;
  };

  return {
    orderSummary,
    address,
    errorAddress,
    mpVoucher,
    merchant,
    errorDeliveryOption,
    handleChangeAddress,
    handleChangeMpVoucher,
    handleChangeMerchant,
    handleMakeTx,
    isLoading,
    setOrderSummary,
    data,
  };
};

export default useCheckout;
