import React from 'react';
import { Pagination as APagination, PaginationProps } from 'antd';

const Pagination: React.FC<PaginationProps> = (props) => {
  return <APagination {...props} />;
};

export default Pagination;
