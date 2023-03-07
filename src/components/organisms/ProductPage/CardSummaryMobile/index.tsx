import { message, Skeleton } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateCartsMutation } from '../../../../app/features/cart/cartApiSlice';
import { toRupiah } from '../../../../helpers/toRupiah';
import { IErrorResponse } from '../../../../helpers/types/response.interface';
import useProduct from '../../../../hooks/useProduct';
import { Alert, Button, Card } from '../../../atoms';
import style from './index.module.scss';

const CardSummaryMobile: React.FC = () => {
  const { product, stock, price, isLoading, variant, isHaveVariant } =
    useProduct();

  const [quantity, setQuantity] = useState(1);

  const [addToCart, { isLoading: isLoadingAddToCart, isError }] =
    useCreateCartsMutation();

  const [error, setError] = useState('');
  const [errorAddToCart, setErrorAddToCart] = useState<
    IErrorResponse | Error
  >();
  const navigate = useNavigate();

  const [totalPrice, setTotalPrice] = useState(
    price ? price : product?.max_real_price,
  );

  const handleSubmit = async () => {
    try {
      const body = {
        product_id: product?.id ? product.id : 0,
        quantity: quantity ? quantity : 0,
        variant_item_id: variant?.id ? variant.id : undefined,
      };
      await addToCart(body).unwrap();
      message.success('Product added to cart');
    } catch (err) {
      const error = err as IErrorResponse;
      setErrorAddToCart(error);

      if (error.message === 'Unauthorized') {
        navigate('/login');

        message.error('Please login first');
      }
    }
  };
  useEffect(() => {
    setTotalPrice(quantity * (price as number));
    setErrorAddToCart(undefined);
    setError('');
  }, [quantity, price]);

  return (
    <Card className={style.card__summary}>
      <Skeleton loading={isLoading}>
        {stock === 0 && (
          <Alert
            message="Out of stock please select another variant"
            type="error"
            showIcon
            closable
          />
        )}
        {error && <Alert message={error} type="error" showIcon closable />}
        {errorAddToCart && variant && (
          <Alert
            message={errorAddToCart.message}
            type="error"
            showIcon
            closable
          />
        )}

        {errorAddToCart && isError && (
          <Alert
            message={errorAddToCart.message}
            type="error"
            showIcon
            closable
          />
        )}

        <div className={style.card__summary__total}>
          <span>Total</span>
          <p>{toRupiah(totalPrice)}</p>
        </div>
      </Skeleton>
      <div className={style.card__summary__button}>
        {isLoading ? (
          <>
            <Skeleton.Button block />
            <Skeleton.Button block />
          </>
        ) : (
          <>
            <Button
              type="primary"
              size="large"
              block
              onClick={handleSubmit}
              disabled={(!variant && isHaveVariant) || stock === 0}
              loading={isLoadingAddToCart}
            >
              Add to Cart
            </Button>
            <Button
              type="primary"
              size="large"
              ghost
              disabled={(!variant && isHaveVariant) || stock === 0}
              block
            >
              Buy Now
            </Button>
          </>
        )}
      </div>
    </Card>
  );
};

export default CardSummaryMobile;
