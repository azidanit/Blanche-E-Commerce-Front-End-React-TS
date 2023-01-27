import { Col, Row } from 'antd';
import React from 'react';
import {
  CardMerchantRegistration,
  Container,
  Image,
} from '../../../components';
import useMediaQuery from '../../../hooks/useMediaQuery';
import style from './index.module.scss';

const MerchantRegister: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  return (
    <div className={style.merchant__register}>
      <Row className={style.merchant__register__page} gutter={[64, 16]}>
        {!isMobile && (
          <Col flex="none">
            <Image
              src="/assets/svg/illustration.svg"
              alt="Merchant Register"
              className={style.merchant__register__page__image}
            />
          </Col>
        )}
        <Col flex="auto">
          <CardMerchantRegistration />
        </Col>
      </Row>
    </div>
  );
};

export default MerchantRegister;
