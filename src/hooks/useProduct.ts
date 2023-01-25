import { RootState } from '../app/store';
import { useSelector } from 'react-redux';
import { IProductDetail, IVariantItem } from '../helpers/types';

export interface ProductState {
  product: IProductDetail | null;
  variant: IVariantItem | null;
  isDiscount: boolean;
  isRangePrice: boolean;
  isRangePriceDiscount: boolean;
  price: number | null;
  stock: number | null;
  images: string[] | null;
  activeImage: string | null;
}

export default function useProduct(): ProductState {
  return useSelector((state: RootState) => {
    console.log(state);
    return state.product;
  });
}
