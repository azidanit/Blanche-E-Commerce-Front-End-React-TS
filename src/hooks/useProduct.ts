import { RootState } from '../app/store';
import { useSelector } from 'react-redux';
import { IMerchantInfo, IProductDetail, IVariantItem } from '../helpers/types';

export interface ProductState {
  product: IProductDetail | null;
  variant: IVariantItem | null;
  isDiscount: boolean;
  isRangePrice: boolean;
  price: number | null;
  stock: number | null;
  activeImage: string | null;
  isLoading: boolean;
}

export default function useProduct(): ProductState {
  return useSelector((state: RootState) => {
    return state.product.productInfo;
  });
}
