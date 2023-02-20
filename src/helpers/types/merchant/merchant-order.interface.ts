export interface IMerchantTransactionListResponse {
  total_data: number;
  total_page: number;
  current_page: number;
  transactions: IMerchantTransaction[];
}

export interface IMerchantTransactionListRequest {
  q?: string;
  start_date?: string;
  end_date?: string;
  page?: number;
  limit?: number;
}

export interface IUpdateMerchantOrderStatusRequest {
  status: number;
  receipt_number?: string;
  invoice_code: string;
}

export interface IMerchantTransaction {
  invoice_code: string;
  total_price: number;
  buyer_username: string;
  transaction_date: Date;
  product_overview: IMerchantProductOverview;
  transaction_status: IMerchantTransactionStatus;
  shipping_details: IMerchantShippingDetails;
}

export interface IMerchantProductOverview {
  product: IMerchantProduct;
  total_product: number;
}

export interface IMerchantProduct {
  product_id: number;
  name: string;
  image: string;
  notes: string;
  real_price: number;
  discount_price: number;
  product_slug: string;
  product_variant_id: number;
  variant_name: string;
  quantity: number;
}

export interface IMerchantShippingDetails {
  address: IMerchantAddress;
  delivery_option: IMerchantDeliveryOption;
  transaction_delivery_status: IMerchantTransactionDeliveryStatus;
}

export interface IMerchantAddress {
  name: string;
  phone: string;
  label: string;
  details: string;
  zip_code: string;
  city_name: string;
  district_name: string;
  province_name: string;
  subdistrict_name: string;
}

export interface IMerchantDeliveryOption {
  courier_name: string;
  receipt_number: string;
}

export interface IMerchantTransactionDeliveryStatus {
  on_delivery_at: Date | null;
  on_delivered_at: Date | null;
}

export interface IMerchantTransactionStatus {
  on_waited_at: Date;
  on_processed_at: Date;
  on_delivered_at: Date | null;
  on_completed_at: Date | null;
  on_canceled_at: Date | null;
  on_refunded_at: null;
}
