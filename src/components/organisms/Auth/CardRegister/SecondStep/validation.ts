import { NamePath } from 'antd/es/form/interface';

export const rules = {
  fullname: [
    { required: true, message: 'Please input your fullname.' },
    { min: 3, message: 'Fullname must be at least 3 characters long.' },
  ],
  password: [
    { required: true, message: 'Please input your password.' },
    { min: 8, message: 'Password must be at least 8 characters long.' },
    { max: 32, message: 'Password must be at most 16 characters long.' },
    ({
      getFieldValue,
    }: {
      getFieldValue: (name: NamePath) => string;
    }): any => ({
      validator(_: undefined, value: string) {
        const username = getFieldValue('username');
        const regex = new RegExp(username, 'i');
        if (value && value.match(regex)) {
          return Promise.reject(new Error('Password cannot contain username.'));
        }
        return Promise.resolve();
      },
    }),
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
