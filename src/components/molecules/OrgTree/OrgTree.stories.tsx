import React, { useEffect, useState } from 'react';
import StoryItem from '../../storybook/StoryItem';
import Story from '../../storybook/Story';
import { ITreeOption } from '../../../types';
import Tree from './Tree';
import { list } from './list';
import OrgTree from './OrgTree';

export default {
  title: 'OrgTree',
  component: Tree
};

export const tree = () => {

  const [data, setData] = useState<ITreeOption[]>([]);

  const [activeItem, setActiveItem] = useState<ITreeOption | undefined>(undefined);

  const onChange = (o: ITreeOption) => {
    setActiveItem(o);
  };

  useEffect(() => {
    setTimeout(() => {
      setData(list);
    }, 500);
  }, []);


  return (
    <Story name='OrgTree' width={600}>
      <StoryItem description='Древовидная структура с бесконечной вложенностью'>
        <OrgTree list={data} onChange={onChange} activeOption={activeItem}/>
      </StoryItem>
    </Story>
  );
};
