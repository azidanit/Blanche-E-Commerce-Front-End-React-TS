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
