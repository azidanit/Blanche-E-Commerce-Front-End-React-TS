import { ISealabsPayAccounts } from './entity.interface';

export interface EditProfileProps {
  name: string;
  birthdate: string;
  gender: string;
  phone_number: string;
  profile_picture: string;
}

export interface IEditProfileRequest {
  name?: string;
  birthdate?: string;
  gender?: string;
  phone_number?: string;
  profile_picture?: string;
}

export interface ErrorEditProfile {
  name: string;
  birthdate: string;
  gender: string;
  phone_number: string;
  profile_picture: string;
}

export interface IGetProfileResponse {
  id: number;
  fullname: string;
  email: string;
  phone: string;
  birth_date: string;
  gender: string;
  profile_picture: string;
  username: string;
}

export type IGetSealabsPayAccountsResponse = ISealabsPayAccounts[];

export interface IAddSealabsPayAccountRequest {
  card_number: string;
  name_on_card: string;
  active_date: Date;
}

export type IAddSealabsPayAccountResponse = {
  id: number;
} & IAddSealabsPayAccountRequest;
