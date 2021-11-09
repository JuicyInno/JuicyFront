import React, { useEffect, useState } from 'react';
import { ITreeOption } from '../../../types';
import Tree from './Tree';
import { list, listSmall } from './list';
import OrgTree from './OrgTree';
import { withDesign } from 'storybook-addon-designs';
import { StoryDocs, StoryDocsH1 } from '../../storybook';
import StoryContainer from '../../storybook/Story';
import StoryRow from '../../storybook/StoryRow';


export default {
  title: 'components/withTest/OrgTree',
  component: Tree,
  decorators: [withDesign],
  argTypes: {
    open: {
      type: 'boolean',
      defaultValue: true,
    }
  }
};

export const Demo = () => {

  const [data, setData] = useState<ITreeOption[]>([]);
  const [dataSmall, setDataSmall] = useState<ITreeOption[]>([]);
  const [activeItem, setActiveItem] = useState<ITreeOption | undefined>(undefined);
  const [activeItemSmall, setActiveItemSmall] = useState<ITreeOption | undefined>(undefined);

  const onChange = (o: ITreeOption) => {
    setActiveItem(o);
  };

  useEffect(() => {
    setTimeout(() => {
      setData(list);
      setActiveItem({
        value: '1_2_2',
        label: 'Служба развития внешних сайтов',
        children: [],
      });
      setDataSmall(listSmall);
    }, 500);
  }, []);

  const onChangeSmall = (o: ITreeOption) => {
    setActiveItemSmall(o);
  };

  return (
    <StoryDocs>
      <StoryDocsH1>Tree structure</StoryDocsH1>

      <StoryRow>
        <div style={{
          border: ' 1px dashed #7B61FF',
          borderRadius: '5px',
          padding: '16px',
          display: 'flex',
          gap: '16px'
        }}>
          <div style={{ maxWidth: '288px' }}>
            <OrgTree id='first' list={data} onChange={onChange} activeOption={activeItem} />
          </div>
          <div style={{ maxWidth: '288px' }}>
            <OrgTree open={false} id='second' list={dataSmall} onChange={onChangeSmall} activeOption={activeItemSmall} />
          </div>
        </div>
      </StoryRow>
    </StoryDocs >

  );
};

Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/gDl8sDPM8Zmh5ol4ywzLrj/Design-System-VTB-Home?node-id=20799%3A57488',
  },
};

export const Playground = (args: any) => {
  return (
    <StoryContainer>
      <StoryRow>
        <OrgTree list={listSmall} {...args} />
      </StoryRow>
    </StoryContainer>
  );
};
