import { EyeOutlined, StarOutlined } from '@ant-design/icons';
import { message, Switch, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import classNames from 'classnames';
import { PaginationProps } from 'rc-pagination';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Pagination } from '../../../..';
import {
  useDeleteProductMutation,
  useGetProductListQuery,
} from '../../../../../app/features/merchant/merchantApiSlice';
import { capitalizeFirstLetter } from '../../../../../helpers/capitalizeFirstLetter';
import { toRupiah } from '../../../../../helpers/toRupiah';
import { IMerchantProductOverview } from '../../../../../helpers/types';
import { IErrorResponse } from '../../../../../helpers/types/response.interface';
import { Button, Card, Image } from '../../../../atoms';
import style from './index.module.scss';
import './override.scss';

interface ProductTableProps {
  search: string;
}

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

const ProductTable: React.FC<ProductTableProps> = ({ search }) => {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const { data } = useGetProductListQuery({
    page,
    limit,
    q: search,
  });
  const [deleteProduct, { isLoading }] = useDeleteProductMutation();
  const [dataSource, setDataSource] = useState<Row[]>();

  const onChange: PaginationProps['onChange'] = (page) => {
    setPage(page);
  };

  const onDelete = async (item: IMerchantProductOverview) => {
    try {
      await deleteProduct(item.id).unwrap();
      message.success(`Product ${item.title} is deleted`);
    } catch (err) {
      const error = err as IErrorResponse;
      message.error(capitalizeFirstLetter(error.message));
    }
  };

  const onEdit = (item: IMerchantProductOverview) => {
    navigate(`/merchant/products/edit/${item.id}`);
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
                onEdit(item);
              }}
              ghost
            >
              Edit
            </Button>
            <Button
              onClick={() => {
                onDelete(item);
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
          onChange={onChange}
          current={page}
          showSizeChanger={false}
        />
      </div>
    </Card>
  );
};

export default ProductTable;
