import { NamePath } from 'antd/es/form/interface';

export const rules = {
  name: [
    {
      required: true,
      message: 'Please input product name!',
    },
  ],
  category: [
    {
      required: true,
      message: 'Please select product category!',
    },
  ],
  description: [
    {
      required: false,
    },
  ],
  condition: [
    {
      required: false,
    },
  ],
  price: [
    {
      required: true,
      message: 'Please input product price!',
    },
  ],
  stock: [
    {
      required: true,
      message: 'Please input product stock!',
    },
  ],
  sku: [
    {
      required: false,
    },
  ],
  images: [
    {
      required: true,
      message: 'Please upload product images!',
    },
  ],
  firstVariant: [
    { min: 3, message: 'Variant group must be at least 3 characters long.' },
    { max: 16, message: 'Variant group must be at most 16 characters long.' },
  ],
  secondVariant: [
    { min: 3, message: 'Variant group must be at least 3 characters long.' },
    { max: 16, message: 'Variant group must be at most 16 characters long.' },
    ({
      getFieldValue,
    }: {
      getFieldValue: (name: NamePath) => string;
    }): any => ({
      validator(_: undefined, value: string) {
        const firstVariant = getFieldValue('firstVariant');
        if (value === firstVariant) {
          return Promise.reject(
            new Error('Second variant cannot be the same as first variant!'),
          );
        }
        return Promise.resolve();
      },
    }),
  ],
};
