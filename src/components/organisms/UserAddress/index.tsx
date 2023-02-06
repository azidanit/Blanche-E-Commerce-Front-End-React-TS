import React from 'react';
import { IUserAddress } from '../../../helpers/types';
import CardAddress from './CardAddress';
import style from './index.module.scss';
const data: IUserAddress[] = [
  {
    id: 5,
    phone: '085375627432',
    name: 'will',
    province_name: 'DI YOGYAKARTA',
    province_id: 5,
    city_name: 'KAB. SLEMAN',
    city_id: 54,
    district_name: 'NGAGLIK',
    district_id: 673,
    subdistrict_name: 'SINDUHARJO',
    subdistrict_id: 10536,
    zip_code: '55581',
    label: 'rumah',
    is_default: false,
  },
  {
    id: 8,
    phone: '085156220395',
    name: 'zogoz',
    province_name: 'DI YOGYAKARTA',
    province_id: 5,
    city_name: 'KAB. SLEMAN',
    city_id: 54,
    district_name: 'SEUNAGAN',
    district_id: 63,
    subdistrict_name: 'SUKOHARJO (SUKO HARJO)',
    subdistrict_id: 10537,
    zip_code: '55581',
    label: 'jkp gamer',
    is_default: false,
  },
  {
    id: 9,
    phone: '085156220395',
    name: 'zogoz',
    province_name: 'DI YOGYAKARTA',
    province_id: 5,
    city_name: 'KAB. SLEMAN',
    city_id: 54,
    district_name: 'NGAGLIK',
    district_id: 673,
    subdistrict_name: 'SUKOHARJO (SUKO HARJO)',
    subdistrict_id: 10537,
    zip_code: '55581',
    label: 'jkp gamer',
    is_default: false,
  },
  {
    id: 10,
    phone: '085156220395',
    name: 'zogoz',
    province_name: 'DI YOGYAKARTA',
    province_id: 5,
    city_name: 'KAB. SLEMAN',
    city_id: 54,
    district_name: 'NGAGLIK',
    district_id: 673,
    subdistrict_name: 'SUKOHARJO (SUKO HARJO)',
    subdistrict_id: 10537,
    zip_code: '55581',
    label: 'jkp gamer',
    is_default: false,
  },
  {
    id: 7,
    phone: '085156220395',
    name: 'zogoz',
    province_name: 'DI YOGYAKARTA',
    province_id: 5,
    city_name: 'KAB. SLEMAN',
    city_id: 54,
    district_name: 'NGAGLIK',
    district_id: 673,
    subdistrict_name: 'SUKOHARJO (SUKO HARJO)',
    subdistrict_id: 10537,
    zip_code: '55581',
    label: 'jkp gamer',
    is_default: false,
  },
  {
    id: 6,
    phone: '085375627432',
    name: 'will',
    province_name: 'DI YOGYAKARTA',
    province_id: 5,
    city_name: 'KAB. SLEMAN',
    city_id: 54,
    district_name: 'NGAGLIK',
    district_id: 673,
    subdistrict_name: 'SUKOHARJO (SUKO HARJO)',
    subdistrict_id: 10537,
    zip_code: '55581',
    label: 'kantor',
    is_default: true,
  },
];
const UserAddress: React.FC = () => {
  return (
    <div className={style.user__address}>
      {data
        .filter((item) => item.is_default)
        .map((item) => <CardAddress key={item.id} data={item} />)
        .concat(
          data
            ?.filter((item) => !item.is_default)
            .map((item) => <CardAddress key={item.id} data={item} />),
        )}
    </div>
  );
};
export default UserAddress;
