import { Skeleton } from 'antd';
import { Key } from 'antd/es/table/interface';
import { DataNode } from 'antd/es/tree';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useGetCategoriesQuery } from '../../app/features/home/homeApiSlice';
import { setParams } from '../../app/features/home/paramsSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Tree } from '../../components';
import style from './index.module.scss';

const CategoryTree: React.FC = () => {
  const { data, isLoading } = useGetCategoriesQuery({});
  const [categories, setCategories] = React.useState<DataNode[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedKey, setSelectedKey] = useState<string | undefined>();
  const params = useAppSelector((state) => state.params);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) {
      const newCategories = data.map((category) => ({
        title: category.name,
        key: category.id.toString(),
        children: category.children?.map((subCategory) => ({
          title: subCategory.name,
          key: subCategory.id.toString(),
          children: subCategory.children?.map((subSubCategory) => ({
            title: subSubCategory.name,
            key: subSubCategory.id.toString(),
          })),
        })),
      }));
      setCategories(newCategories);
    }
  }, [data]);

  useEffect(() => {
    const category = params.search.category_id;
    setSelectedKey(category ? category.toString() : undefined);
  }, [params.search.q]);

  const onSelect = (selectedKeysValue: Key[]) => {
    if (!selectedKeysValue.length) {
      setSelectedKey(undefined);
      searchParams.delete('category_id');
      setSearchParams(searchParams);
      dispatch(setParams({ category_id: undefined }));
      return;
    }
    setSelectedKey(selectedKeysValue[0].toString());
    searchParams.set('category_id', selectedKeysValue[0].toString());
    setSearchParams(searchParams);
    dispatch(setParams({ category_id: selectedKeysValue[0] as number }));
  };

  return (
    <Skeleton loading={isLoading}>
      {categories.length && (
        <Tree
          treeData={categories}
          onSelect={onSelect}
          selectedKeys={[selectedKey as string]}
          defaultExpandedKeys={[selectedKey as string]}
          className={style.tree}
        />
      )}
    </Skeleton>
  );
};

export default CategoryTree;
