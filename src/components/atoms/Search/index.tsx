import React from 'react';
import { Input as AInput } from 'antd';
import style from './index.module.scss';
import classNames from 'classnames';

interface SearchProps {
  onSearch: (value: string) => void;
  className?: string;
  placeholder?: string;
  defaultValue?: string;
}

const { Search: ASearch } = AInput;

const Search: React.FC<SearchProps> = ({
  onSearch,
  className,
  placeholder = '',
  defaultValue = '',
}) => {
  const classProps = classNames(style.search, className);

  return (
    <ASearch
      placeholder={placeholder}
      onSearch={onSearch}
      size="large"
      className={classProps}
      enterButton
      defaultValue={defaultValue}
    />
  );
};

export default Search;
