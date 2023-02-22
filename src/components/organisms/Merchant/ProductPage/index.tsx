import React from 'react';
import style from './index.module.scss';
import { Button, Form } from '../../..';
import ProductInfo from './ProductInfo';
import ProductMedia from './ProductMedia';
import ProductDetails from './ProductDetails';
import { useForm } from 'antd/es/form/Form';
import ProductType from './ProductType';
import ProductShipping from './ProductShipping';
import {
  useCreateProductMutation,
  useUploadProductImageMutation,
} from '../../../../app/features/merchant/merchantApiSlice';
import { IProductForm } from '../../../../helpers/types/merchant/product.interface';
import { message } from 'antd';
import { IErrorResponse } from '../../../../helpers/types/response.interface';
import {
  ICreateProductRequest,
  IVariantVariantItems,
} from '../../../../helpers/types/product.interface';
import { useNavigate } from 'react-router-dom';
import { capitalizeFirstLetter } from '../../../../helpers/capitalizeFirstLetter';

const ProductPage: React.FC = () => {
  const navigate = useNavigate();
  const [form] = useForm();
  const [createProduct, { isLoading }] = useCreateProductMutation();
  const [upload, { isLoading: isLoadingPhoto }] =
    useUploadProductImageMutation();

  const onFinishForm = async (values: IProductForm) => {
    try {
      const variantOptions = [];

      if (values.firstVariant && values.firstSelect) {
        variantOptions.push({
          name: values.firstVariant,
          type: values.firstSelect,
        });
      }
      if (values.secondVariant && values.secondSelect) {
        variantOptions.push({
          name: values.secondVariant,
          type: values.secondSelect,
        });
      }

      const variantItems: IVariantVariantItems[] = [];
      if (
        (values.firstVariant || values.secondVariant) &&
        values.variantItems
      ) {
        await Promise.all(
          values.variantItems.map(async (item) => {
            try {
              const fileObj = item.image[0].originFileObj;
              const formData = new FormData();
              formData.append('file', fileObj as File);
              const data = await upload(formData).unwrap();
              variantItems.push({
                image: data.image_url,
                price: item.price,
                stock: item.stock,
              });
            } catch (err) {
              const error = err as IErrorResponse;
              message.error(capitalizeFirstLetter(error.message));
            }
          }),
        );
      }

      const images: string[] = [];
      await Promise.all(
        values.images.fileList.map(async (file) => {
          try {
            const fileObj = file.originFileObj;
            const formData = new FormData();
            formData.append('file', fileObj as File);
            const data = await upload(formData).unwrap();
            images.push(data.image_url);
          } catch (err) {
            const error = err as IErrorResponse;
            message.error(capitalizeFirstLetter(error.message));
          }
        }),
      );

      const body: ICreateProductRequest = {
        title: values.title,
        price: values.price || null,
        category_id: parseInt(
          values.category_id[values.category_id.length - 1],
        ),
        description: values.description,
        total_stock: values.stock || null,
        is_archived: !values.status,
        weight: values.weight,
        dimension: values.dimension,
        variant: {
          variant_items: variantItems,
          variant_options: variantOptions,
        },
        is_used: values.condition === 'new' ? false : true,
        images,
      };

      await createProduct(body).unwrap();
      navigate('/merchant/products');
    } catch (err) {
      const error = err as IErrorResponse;
      message.error(capitalizeFirstLetter(error.message));
    }
  };

  return (
    <div className={style.pp}>
      <Form
        name="basic"
        layout="vertical"
        autoComplete="off"
        onFinish={onFinishForm}
        form={form}
        className={style.pp__form}
      >
        <ProductMedia />
        <ProductInfo />
        <ProductDetails />
        <ProductType />
        <ProductShipping />
        <div className={style.pp__action}>
          <Button
            loading={isLoading || isLoadingPhoto}
            htmlType="submit"
            type="primary"
          >
            Submit
          </Button>
          <Button htmlType="reset">Reset</Button>
        </div>
      </Form>
    </div>
  );
};

export default ProductPage;
