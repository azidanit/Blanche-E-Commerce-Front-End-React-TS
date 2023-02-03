export interface ICartItem {
  cart_item_id: number;
  discount_price: number;
  product_id: number;
  variant_item_id: number;
  merchant_id: number;
  merchant_name: string;
  merchant_image: string;
  image: string;
  name: string;
  real_price: number;
  quantity: number;
  stock: number;
  notes: string;
  is_checked: boolean;
  is_valid: boolean;
}

export interface ICart {
  merchant_id: number | null;
  merchant_name: string;
  merchant_image: string;
  items: ICartItem[];
}

export interface ICartResponse {
  carts: ICart[] | undefined;
  quantity: number | undefined;
  total: number | undefined;
}

export interface ICreateCartRequest {
  product_id: number | null;
  variant_item_id?: number | null;
  quantity: number | null;
}

export interface IUpdateCartRequest {
  cart_item_id: number | null;
  ic_checked: boolean;
}

export interface IUpdateCartItemRequest {
  cart_item_id?: number | null;
  quantity?: number | null;
  notes?: string;
  is_checked?: boolean;
}

export interface IDeleteSelectedCartRequest {
  product_id: number | null;
  variant_item_id: number | null;
  quantity: number | null;
}
