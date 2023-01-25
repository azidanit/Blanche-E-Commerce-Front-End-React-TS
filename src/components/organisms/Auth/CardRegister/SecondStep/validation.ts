import { NamePath } from 'antd/es/form/interface';

export const rules = {
  fullname: [
    { required: true, message: 'Please input your fullname.' },
    { min: 3, message: 'Fullname must be at least 3 characters long.' },
  ],
  password: [
    { required: true, message: 'Please input your password.' },
    { min: 8, message: 'Password must be at least 8 characters long.' },
  ],
  confirmPassword: [
    { required: true, message: 'Please confirm your password.' },
    ({
      getFieldValue,
    }: {
      getFieldValue: (name: NamePath) => string;
    }): any => ({
      validator(_: undefined, value: string) {
        if (!value || getFieldValue('password') === value) {
          return Promise.resolve();
        }
        return Promise.reject(new Error('Passwords are not the same.'));
      },
    }),
  ],
};

export const dependencies = {
  confirmPassword: ['password'],
};
