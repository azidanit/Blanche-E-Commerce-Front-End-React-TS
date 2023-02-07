import { Rule } from 'antd/es/form';

export const rules = {
  fullname: [
    { required: true, message: 'Fullname must be at least 2 characters long.' },
    { min: 2, message: 'Fullname must be at least 2 characters long.' },
    { max: 32, message: 'Fullname must be at most 32 characters long.' },
  ],
  birthdate: [
    {
      required: true,
      message: 'Birthdate is required',
    },
    {
      validator: (_: Rule, value: Date): Promise<void> => {
        return new Promise((resolve, reject) => {
          if (value >= new Date()) {
            reject(new Error('Birthdate must be in the past'));
          }
          resolve();
        });
      },
    },
  ],
  phone: [
    {
      required: true,
      message: 'Phone number is required',
    },
  ],
  gender: [
    {
      required: true,
      message: 'Gender is required',
    },
  ],
};
