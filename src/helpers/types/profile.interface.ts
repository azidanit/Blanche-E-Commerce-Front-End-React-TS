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
