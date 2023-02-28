import { Divider } from 'antd';
import React from 'react';
import { MdFavorite, MdShare } from 'react-icons/md';
import { IProduct } from '../../../../../helpers/types';
import { Button } from '../../../../atoms';
import style from './index.module.scss';
import ModalShare from './ModalShare';

interface ProductActionProps {
  product: IProduct;
}

const ProductAction: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={style.product__action}>
      <Button
        type="link"
        size="large"
        className={style.product__action__btn}
        onClick={handleOpenModal}
      >
        {' '}
        <MdShare /> Share{' '}
      </Button>
      <Divider type="vertical" />
      <Button type="link" size="large" className={style.product__action__btn}>
        <MdFavorite />
        Favorite
      </Button>

      <ModalShare isModalOpen={isModalOpen} handleClose={handleCloseModal} />
    </div>
  );
};

export default ProductAction;
