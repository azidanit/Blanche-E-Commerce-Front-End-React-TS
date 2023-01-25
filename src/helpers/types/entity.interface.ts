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

const data = {
  id: 1,
  merchant_id: 1,
  merchant: {
    name: 'ZogoZ Shop',
    domain: 'zogojogo',
    image_url: 'http://dummyimage.com/173x122.png/ff4444/ffffff',
    avg_rating: 4.8,
  },
  category_id: 1,
  category: {
    name: 'Elektronika Instrumentasi',
    url: 'test-url',
  },
  title: 'laptop geming',
  description: 'ini laptop khusus gamer ygy',
  min_real_price: 2450000,
  max_real_price: 2450000,
  min_discount_price: 2450000,
  max_discount_price: 2450000,
  unit_sold: 2400,
  images: [
    {
      image_url:
        'https://cf.shopee.co.id/file/10efc6e8321e9a1f06c5af02dbf6f7e6',
    },
    {
      image_url:
        'https://cf.shopee.co.id/file/10efc6e8321e9a1f06c5af02dbf6f7e6',
    },
    {
      image_url:
        'https://cf.shopee.co.id/file/10efc6e8321e9a1f06c5af02dbf6f7e6',
    },
    {
      image_url:
        'https://cf.shopee.co.id/file/10efc6e8321e9a1f06c5af02dbf6f7e6',
    },
    {
      image_url:
        'https://cf.shopee.co.id/file/10efc6e8321e9a1f06c5af02dbf6f7e6',
    },
  ],
  weight: 2,
  SKU: 'ABC1230XYZ',
  favorite_count: 10,
  total_stock: 77,
  status: 'ACTIVE',
  dimension: '15,20,25',
  rating: {
    avg_rating: 4.5,
    count: 21,
  },
};

export interface IAddress {
  province: string;
  city: string;
}

export interface IMerchantInfo {
  id: number;
  name: string;
  domain: string;
  address: IAddress;
  avg_rating: number;
  join_date: string;
  num_of_product: number;
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

export interface IVariantItem {
  id: number;
  is_archived: boolean;
  image: string;
  price: number;
  stock: number;
}

export interface IVariant {
  variant_options: IVariantOption[];
  variant_items: IVariantItem[];
}

export interface IProductDetail {
  id: number;
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
