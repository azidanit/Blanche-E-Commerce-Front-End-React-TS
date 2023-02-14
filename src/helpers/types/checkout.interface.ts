export interface ICheckoutRequest {
  product_id: number;
  variant_item_id: number;
  quantity: number;
  notes: string;
}

export interface IOrderMerchant {
  merchant_id: string;
  merchant_name: string;
  merchant_image: string;
  merchant_domain: string;
}

export interface IOrderItem {
  cart_item_id: string;
  product_id: string;
  product_slug: string;
  variant_item_id: string;
  variant_name: string;
  merchant_id: string;
  merchant_name: string;
  merchant_image: string;
  merchant_city_id: string;
  image: string;
  name: string;
  weight: number;
  real_price: number;
  discount_price: number;
  quantity: number;
  stock: number;
  notes: string;
  is_valid: boolean;
}

export interface IOrderDeliveryService {
  delivery_option: string;
  name: string;
  service: string;
  description: string;
  merchant_city: string;
  user_city: string;
  etd: string;
  note: string;
}

export interface IOrder {
  merchant: IOrderMerchant;
  items: IOrderItem[];
  delivery_service: IOrderDeliveryService;
  sub_total: number;
  delivery_cost: number;
  discount: number;
  total: number;
  is_voucher_invalid: boolean;
}

export interface ICheckoutResponse {
  order_code: string;
  orders: IOrder[];
  sub_total: number;
  delivery_cost: number;
  discount_merchant: number;
  discount_marketplace: number;
  total: number;
  is_voucher_invalid: boolean;
  is_order_valid: boolean;
}

export interface ICheckoutSummaryRequest {
  order_code: string;
  address_id?: number;
  voucher_merchant?: [
    {
      merchant_id?: string;
      voucher_merchant?: string;
      delivery_option?: string;
    },
  ];
  voucher_marketplace?: string;
}
