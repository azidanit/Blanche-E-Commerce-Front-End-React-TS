import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload, UploadProps } from 'antd';
import { RcFile, UploadChangeParam, UploadFile } from 'antd/es/upload';
import React, { useState } from 'react';
import { CartItem } from '../../..';
import { Card, FormLabel, Rate, TextArea } from '../../../atoms';
import style from './index.module.scss';

const beforeUpload = (file: RcFile) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return false;
};

const CardReviewProduct: React.FC = () => {
  const item = {
    name: 'Baju Kemeja Pria',
    image: 'https://picsum.photos/200/300',
    quantity: 1,
    real_price: 100000,
  };
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<File>();

  const handleUpload: UploadProps['onChange'] = (
    info: UploadChangeParam<UploadFile>,
  ) => {
    setFile(info.fileList[0].originFileObj);
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <Card className={style.card__review__product}>
      <CartItem item={item} />
      <FormLabel
        label="Rating"
        name="rating"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Rate />
      </FormLabel>
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        beforeUpload={beforeUpload}
        onChange={handleUpload}
      >
        {file ? (
          <img
            src={URL.createObjectURL(file)}
            alt="avatar"
            style={{ width: '100%' }}
          />
        ) : (
          uploadButton
        )}
      </Upload>
      <TextArea placeholder="Review Product " />
    </Card>
  );
};

export default CardReviewProduct;
