export interface ICartItem {
  slug?: string;
  title: string;
  imgUrl: string;
  price: number;
  quantity: number;
}

export interface IUser {
  id?: number;
  fullname?: string;
  email?: string;
  password: string;
  address?: string;
  photo?: string;
  role?: string;
}

export interface IMerchant {
  name: string;
  domain: string;
  image_url: string;
  avg_rating: number;
}

export interface ICategory {
  name: string;
  url: string;
}

export interface IImage {
  image_url: string;
}

export interface IRating {
  avg_rating: number;
  count: number;
}

export interface IDimension {
  width: number;
  length: number;
  height: number;
}

export interface IVariantOption {
  name: string;
  value: string[];
}

export interface IVarianItem {
  id: number;
  is_archived: boolean;
  image: string;
  price: number;
  stock: number;
}

export interface IVariant {
  variant_option: IVariantOption[];
  variant_items: IVarianItem[];
}

export interface IProduct {
  id: number;
  title: string;
  min_real_price: number;
  max_real_price: number;
  min_discount_price: number;
  max_discount_price: number;
  num_of_sale: number;
  avg_rating: number;
  thumbnail_img: string;
  slug: string;
  seller_city: string;
}

export interface IProductDetail {
  id: number;
  merchant_id: number;
  category_id: number;
  category: ICategory;
  title: string;
  description: string;
  min_real_price: number;
  max_real_price: number;
  min_discount_price: number;
  max_discount_price: number;
  unit_sold: number;
  images: IImage[];
  weight: number;
  dimension: IDimension;
  SKU: string;
  favorite_count: number;
  total_stock: number;
  status: string;
  rating: IRating;
  merchant: IMerchant;
}
