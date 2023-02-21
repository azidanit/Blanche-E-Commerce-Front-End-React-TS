import { EyeOutlined, StarOutlined } from '@ant-design/icons';
import { Switch, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Pagination } from '../../../..';
import { useGetProductListQuery } from '../../../../../app/features/merchant/merchantApiSlice';
import { useAppSelector } from '../../../../../app/hooks';
import { toRupiah } from '../../../../../helpers/toRupiah';
import { Button, Card, Image } from '../../../../atoms';
import style from './index.module.scss';
import './override.scss';

interface Row {
  key: string;
  price: React.ReactNode;
  stock: React.ReactNode;
  statistic: React.ReactNode;
  product: React.ReactNode;
  status: React.ReactNode;
  action: React.ReactNode;
}

const limit = 10;

const columns: ColumnsType<Row> = [
  {
    title: 'Product Info',
    dataIndex: 'product',
    key: 'product',
  },
  {
    title: 'Statistic',
    dataIndex: 'statistic',
    key: 'statistic',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Stock',
    dataIndex: 'stock',
    key: 'stock',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
  },
];

const ProductTable: React.FC = () => {
  const navigate = useNavigate();
  const params = useAppSelector((state) => state.params);
  const { data } = useGetProductListQuery({
    page: params.search.page ? params.search.page : 1,
    limit,
  });
  const [dataSource, setDataSource] = useState<Row[]>();
  const onDelete = (id: number) => {
    console.log(id);
  };

  const onEdit = (id: number) => {
    navigate(`/merchant/products/edit/${id}`);
  };

  useEffect(() => {
    if (!data) return;
    const res: Row[] = data.products.map((item) => {
      return {
        key: item.id.toString(),
        stock: <p key={item.id}>{item.total_stock}</p>,
        price:
          item.max_real_price === item.min_real_price ? (
            <p key={item.id}>{toRupiah(item.max_real_price)}</p>
          ) : (
            <p key={item.id}>
              {toRupiah(item.min_real_price)} - {toRupiah(item.max_real_price)}
            </p>
          ),
        status: <Switch defaultChecked={!item.is_archived} />,
        product: (
          <div className={style.pt__row__product} key={item.id}>
            <Image
              className={style.pt__row__product__img}
              src={item.thumbnail_img}
              alt={item.title}
            />
            <Link
              to={`/${item.slug}`}
              className={style.pt__row__product__title}
            >
              {item.title}
            </Link>
          </div>
        ),
        statistic: (
          <div className={style.pt__row__statistic} key={item.id}>
            <div className={style.pt__row__statistic__item}>
              <EyeOutlined size={16} />
              <span className={style.pt__row__statistic__item__value}>
                {item.num_of_sale}
              </span>
            </div>
            <div className={style.pt__row__statistic__item}>
              <StarOutlined size={16} />
              <span className={style.pt__row__statistic__item__value}>
                {item.avg_rating}
              </span>
            </div>
          </div>
        ),
        action: (
          <div className={style.pt__row__action} key={item.id}>
            <Button
              type="primary"
              onClick={() => {
                onEdit(item.id);
              }}
              ghost
            >
              Edit
            </Button>
            <Button
              onClick={() => {
                onDelete(item.id);
              }}
              danger
            >
              Delete
            </Button>
          </div>
        ),
      };
    });
    setDataSource(res);
  }, [data]);

  return (
    <Card className={classNames(style.pt, 'pt')}>
      <Table
        columns={columns}
        dataSource={dataSource}
        pagination={false}
        scroll={{ x: 800 }}
      />
      <div className={style.pt__pagination}>
        <Pagination
          total={data?.total_data}
          pageSize={limit}
          showSizeChanger={false}
        />
      </div>
    </Card>
  );
};

export default ProductTable;
