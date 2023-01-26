import React from 'react';
import useProduct from '../../../../../hooks/useProduct';

const ProductDescriptionItem: React.FC = () => {
  const { product } = useProduct();

  return (
    <ul>
      <li>
        <span>Condition:</span>
        <p>{product?.is_used ? 'Used' : 'New'}</p>
      </li>
      <li>
        <span>Weight:</span>
        <p>{product?.weight}</p>
      </li>
      <li>
        <span>Category</span>
        <p>{product?.category?.name}</p>
      </li>
      <li>
        <span>Description:</span>
        <p>{product?.description}</p>
      </li>
    </ul>
  );
};

export default ProductDescriptionItem;
