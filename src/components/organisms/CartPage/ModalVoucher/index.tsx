import { Skeleton } from 'antd';
import classNames from 'classnames';
import React, { useState } from 'react';
import useProduct from '../../../../hooks/useProduct';
import { Image } from '../../../atoms';
import Modal from '../../../molecules/Modal';
import style from './index.module.scss';

interface ModalVoucherProps {
  img: string;
  isModalOpen: boolean;
  handleOk: () => void;
  handleCancel: () => void;
}

const ModalVoucher: React.FC<ModalVoucherProps> = ({
  img,
  isModalOpen,
  handleOk,
  handleCancel,
}) => {
  const { product, activeImage, isLoading } = useProduct();
  const [activeImg, setActiveImg] = useState(img);

  const handleActiveImage = (image: string) => {
    setActiveImg(image);
  };

  return (
    <Modal
      title="Modal Product Gallery"
      open={isModalOpen}
      onOk={handleOk}
      centered
      onCancel={handleCancel}
      width={900}
    ></Modal>
  );
};

export default ModalVoucher;
