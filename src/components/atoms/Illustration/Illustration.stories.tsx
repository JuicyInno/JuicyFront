import React, { ReactNode } from 'react';
import StoryItem from '../../storybook/StoryItem';
import StoryRow from '../../storybook/StoryRow';
import IL_Empty from '../../../assets/icons/Illustrations/IL_Empty';
import IL_Work from '../../../assets/icons/Illustrations/IL_Work';
import IL_Close_Entrance from '../../../assets/icons/Illustrations/IL_Close_Entrance';
import IL_Notifications from '../../../assets/icons/Illustrations/IL_Notifications';
import IL_Donut from '../../../assets/icons/Illustrations/IL_Donut';
import IL_Donut_2 from '../../../assets/icons/Illustrations/IL_Donut_2';
import IL_Settings from '../../../assets/icons/Illustrations/IL_Settings';
import IL_Ghost from '../../../assets/icons/Illustrations/IL_Ghost';
import IL_Magnifier_Doc from '../../../assets/icons/Illustrations/IL_Magnifier_Doc';
import IL_Magnifier_Not_Available from '../../../assets/icons/Illustrations/IL_Magnifier_Not_Available';
import IL_Magnifier_Folder from '../../../assets/icons/Illustrations/IL_Magnifier_Folder';
import IL_Magnifier_Zero from '../../../assets/icons/Illustrations/IL_Magnifier_Zero';
import IL_Broken_Magnifier from '../../../assets/icons/Illustrations/IL_Broken_Magnifier';
import IL_Not_Available from '../../../assets/icons/Illustrations/IL_Not_Available';
import { withDesign } from 'storybook-addon-designs';
import { Tooltip } from '../../../index';
import { StoryDocs, StoryDocsH1 } from '../../storybook';
/* eslint-disable max-len */

export default {
  title: 'icons,illustrations/Illustration',
  decorators: [withDesign],
};

export const Demo = () => {

  const illustration: any = [
    ['IL_Empty', <IL_Empty/>],
    ['IL_Work', <IL_Work/>],
    ['IL_Close_Entrance', <IL_Close_Entrance/>],
    ['IL_Notifications', <IL_Notifications/>],
    ['IL_Donut', <IL_Donut/>],
    ['IL_Donut_2', <IL_Donut_2/>],
    ['IL_Settings', <IL_Settings/>],
    ['IL_Ghost', <IL_Ghost/>],
    ['IL_Magnifier_Doc', <IL_Magnifier_Doc/>],
    ['IL_Magnifier_Not_Available', <IL_Magnifier_Not_Available/>],
    ['IL_Magnifier_Folder', <IL_Magnifier_Folder/>],
    ['IL_Magnifier_Zero', <IL_Magnifier_Zero/>],
    ['IL_Broken_Magnifier', <IL_Broken_Magnifier/>],
    ['IL_Not_Available', <IL_Not_Available/>]
  ];

  const illustrationTSX = illustration.map((item: ReactNode[]) => {
    return (
      <Tooltip position='bottom' background={'white'}>
        {item[1]}
        <p>{`${item[0]}`}</p>
      </Tooltip>
    );
  });

  return (
    <StoryDocs>
      <StoryDocsH1>Illustration</StoryDocsH1>
      <StoryItem>
        <StoryRow>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridGap: '40px'
          }}>
            {illustrationTSX}
          </div>
        </StoryRow>
      </StoryItem>
    </StoryDocs>
  );
};

Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Tl0AmqQJK4qaCl4pLRio7A/Design-System-for-Story-Book?node-id=18%3A29146'
  },
};
