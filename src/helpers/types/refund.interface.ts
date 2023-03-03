export interface IRequestRefund {
  reason: string;
  image: File;
}

export interface IGetRefundResponse {
  total_data: number;
  total_page: number;
  current_page: number;
  refund_requests: IRefundRequest[];
}

export interface IRefundRequest {
  id: number;
  transaction_id: number;
  invoice_code: string;
  username: string;
  merchant_domain: string;
  reason: string;
  image_url: string;
  created_at: string;
  refund_request_statuses: IRefundStatus[];
}

export interface IRefundStatus {
  canceled_by_buyer_at?: string;
  accepted_by_buyer_at: any;
  rejected_by_buyer_at?: string;
  accepted_by_seller_at?: string;
  rejected_by_seller_at?: string;
  accepted_by_admin_at?: string;
  rejected_by_admin_at?: string;
}
