import React from 'react';
import { Input as AInput } from 'antd';
import style from './index.module.scss';
import classNames from 'classnames';

interface SearchProps {
  onSearch: (value: string) => void;
  className?: string;
  placeholder?: string;
}

const { Search: ASearch } = AInput;

const Search: React.FC<SearchProps> = ({
  onSearch,
  className,
  placeholder = '',
}) => {
  const classProps = classNames(style.search, className);

  return (
    <ASearch
      placeholder={placeholder}
      onSearch={onSearch}
      className={classProps}
      enterButton
    />
  );
};

export default Search;
