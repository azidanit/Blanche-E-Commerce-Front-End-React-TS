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

export interface IAddress {
  province: string;
  city: string;
}

export interface IMerchantInfo {
  id: number;
  name: string;
  domain: string;
  avg_rating: number;
  join_date: string;
  num_of_sale: number;
  num_of_review: number;
  image_url: string;
}

export interface ICategory {
  name: string;
  url: string;
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
  type: string[];
}

export interface IVarianItem {
  id: number;
  is_archived: boolean;
  image: string;
  price: number;
  stock: number;
}

export interface IVariant {
  variant_options: IVariantOption[];
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
  title: string;
  min_real_price: number;
  max_real_price: number;
  min_discount_price: number;
  max_discount_price: number;
  category: ICategory;
  images: string[];
  is_used: boolean;
  SKU: string;
  description: string;
  favorite_count: number;
  is_favorited: boolean;
  unit_sold: number;
  total_stock: number;
  is_archived: boolean;
  avg_rating: number;
  weight: number;
  dimension: IDimension;
  variants: IVariant;
  merchant: IMerchantInfo;
}
