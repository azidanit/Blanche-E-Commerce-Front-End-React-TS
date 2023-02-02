import { Skeleton } from 'antd';
import { Key } from 'antd/es/table/interface';
import { DataNode } from 'antd/es/tree';
import React, { useEffect } from 'react';
import { useGetCategoriesQuery } from '../../../app/features/home/homeApiSlice';
import { Tree } from '../..';
import style from './index.module.scss';

interface FilterCategoryProps {
  onSelectCategory: (selectedKeysValue: Key[]) => void;
  selectedCategory: string | undefined;
}

const FilterCategory: React.FC<FilterCategoryProps> = ({
  onSelectCategory,
  selectedCategory,
}) => {
  const { data, isLoading } = useGetCategoriesQuery({});
  const [categories, setCategories] = React.useState<DataNode[]>([]);

  useEffect(() => {
    if (data) {
      const newCategories = data.map((category) => ({
        title: category.name,
        key: category.slug,
        children: category.children?.map((subCategory) => ({
          title: subCategory.name,
          key: subCategory.slug,
          children: subCategory.children?.map((subSubCategory) => ({
            title: subSubCategory.name,
            key: subSubCategory.slug,
          })),
        })),
      }));
      setCategories(newCategories);
    }
  }, [data]);

  return (
    <Skeleton loading={isLoading}>
      {categories.length && (
        <Tree
          treeData={categories}
          onSelect={onSelectCategory}
          selectedKeys={[selectedCategory || '']}
          defaultExpandedKeys={[selectedCategory || '']}
          className={style.category}
        />
      )}
    </Skeleton>
  );
};

export default FilterCategory;
