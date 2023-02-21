export interface IGetWalletDetailsResponse {
  id: number;
  balance: number;
}

export interface ICreatePinRequest {
  pin: string;
}

export interface ITopupWalletRequest {
  amount: number;
  slp_card_number: string;
}

export interface ITopupWalletResponse {
  amount: number;
  payment_id: number;
  slp_card_number: string;
  slp_redirect_url: string;
  wallet_id: number;
}

export interface ITransactionOverview {
  amount: number;
  issued_at: Date;
  payment_id: number;
  wallet_transaction_type: {
    code: string;
    id: number;
    name: string;
  };
}

export interface IGetWalletHistoryResponse {
  current_page: number;
  total_page: number;
  total_data: number;
  transactions: ITransactionOverview[];
}
