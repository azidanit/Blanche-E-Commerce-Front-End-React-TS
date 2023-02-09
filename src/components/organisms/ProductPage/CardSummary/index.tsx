import { Divider, notification, Skeleton, Space } from 'antd';
import { valueType } from 'antd/es/statistic/utils';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateCartsMutation } from '../../../../app/features/cart/cartApiSlice';
import { toRupiah } from '../../../../helpers/toRupiah';
import { ICartItem } from '../../../../helpers/types';
import { IErrorResponse } from '../../../../helpers/types/response.interface';
import useProduct from '../../../../hooks/useProduct';
import { Alert, Button, Card } from '../../../atoms';
import { InputQuantity } from '../../../molecules';
import CartItem from './CartItem';
import style from './index.module.scss';

const CardSummary: React.FC = () => {
  const { product, stock, price, isLoading, variant, isHaveVariant } =
    useProduct();

  const [quantity, setQuantity] = useState(1);

  const [addToCart, { isLoading: isLoadingAddToCart }] =
    useCreateCartsMutation();

  const [error, setError] = useState('');
  const [errorAddToCart, setErrorAddToCart] = useState<
    IErrorResponse | Error
  >();
  const navigate = useNavigate();

  const [totalPrice, setTotalPrice] = useState(
    price ? price : product?.max_real_price,
  );

  const handleChange = (value: valueType | null) => {
    setQuantity(value as number);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    if (quantity < (stock as number)) {
      setQuantity(quantity + 1);
    }
  };

  const handleCheckQty = () => {
    if (quantity > Number(stock)) {
      setError('Quantity is more than stock');
    } else if (variant == undefined && isHaveVariant) {
      setError('Please select variant');
    } else {
      setError('');
    }
  };

  const handleSubmit = async () => {
    try {
      const body = {
        product_id: product?.id ? product.id : 0,
        quantity: quantity ? quantity : 0,
        variant_item_id: variant?.id ? variant.id : undefined,
      };
      await addToCart(body).unwrap();
      notification.success({
        message: 'Success',
        description: 'Product added to cart',
      });
    } catch (err) {
      const error = err as IErrorResponse;
      setErrorAddToCart(error);
      if (error.message === 'Unauthorized') {
        navigate('/login');

        notification.error({
          message: 'Error',
          description: 'Please login first',
        });
      }

      if (error.code !== 400) {
        setErrorAddToCart(new Error('Something went wrong'));
      }
    }
  };
  useEffect(() => {
    setTotalPrice(quantity * (price as number));
  }, [quantity, price]);

  return (
    <Card className={style.card__summary}>
      <Skeleton loading={isLoading}>
        <h6>Order Summary</h6>
        <CartItem quantity={quantity} />
        <div className={style.card__summary__quantity}>
          <InputQuantity
            value={quantity}
            handleDecrement={handleDecrement}
            handleIncrement={handleIncrement}
            handleChange={handleChange}
            size="middle"
            disabledIncrement={quantity >= (stock as number)}
            disableDecrement={quantity <= 1 || quantity > (stock as number)}
            min={1}
            onBlur={handleCheckQty}
            onPressEnter={handleCheckQty}
          />
          <p>
            Stock: <span>{stock}</span>
          </p>
        </div>
        {error && <Alert message={error} type="error" />}
        {errorAddToCart && variant && (
          <Alert message={errorAddToCart.message} type="error" showIcon />
        )}
        <Divider />
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
              disabled={!variant && isHaveVariant}
              loading={isLoadingAddToCart}
            >
              Add to Cart
            </Button>
            <Button
              type="primary"
              size="large"
              ghost
              disabled={!variant && isHaveVariant}
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

export default CardSummary;
