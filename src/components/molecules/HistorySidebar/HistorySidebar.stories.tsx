import React from 'react';
import { Story } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import {
  StoryDocs, StoryDocsDescription, StoryDocsH1, StoryDocsH2
} from '../../storybook';
import StoryContainer from '../../storybook/Story';
import StoryRow from '../../storybook/StoryRow';
import HistorySidebar from './HistorySidebar';
import { Tile } from '../../..';

import { attachments } from '../History/mock';
import { history } from './mock';

export default {
  title: 'components/withTest/HistorySidebar',
  component: HistorySidebar,
  decorators: [withDesign],
  argTypes: {
    history: { control: null },
    attachments: { control: null },
  }
};

export const Demo: Story = () => {
  return (
    <StoryDocs>
      <StoryDocsH1>History</StoryDocsH1>
      <StoryDocsH2>История согласования</StoryDocsH2>
      <StoryDocsDescription>Отображение пути согласования, используется во всех сервисах, кроме ЮЗЭДО</StoryDocsDescription>
      <div style={{
        display: 'flex',
        width: 600,
        height: 'auto',
        justifyContent: 'flex-end'
      }}>
        <HistorySidebar history={history} attachments={[]} userId='1' useHeightOffsetTop />
      </div>

      <h3 style={{
        marginBottom: '20px',
        marginTop: '40px'
      }}>History with activeStyle</h3>
      <Tile padding='0px'>
        <div style={{
          position: 'relative',
          display: 'flex',
          width: '100%',
          minHeight: 600
        }}>
          <div style={{ padding: '20px' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dolorum quidem praesentium necessitatibus ipsam illo, laborum iste, similique delectus temporibus,
          distinctio eum? Dolorem, nihil. Magnam, eaque. Temporibus earum expedita omnis? Itaque iusto dicta
           dignissimos quas impedit, repellat nam maiores eveniet sit ex qui, recusandae aliquam perspiciatis
           facere ut sunt, error quibusdam fugit incidunt aspernatur. Mollitia ullam pariatur sed fugit,
           ipsa possimus optio labore sint, autem soluta perspiciatis quo modi, deserunt reiciendis earum
           vitae alias? Quo cumque eaque accusantium excepturi animi molestias, consequatur laborum mollitia
           illum. Eaque velit modi cupiditate illo ipsa reprehenderit esse, praesentium nihil, totam id,
            pariatur dolor vitae ipsum.
          </div>
          <HistorySidebar
            history={history}
            attachments={attachments}
            activeStyle={{
              position: 'absolute',
              top: 0,
              right: 0
            }}
            defaultOpened
          />
        </div>
      </Tile>
    </StoryDocs>
  );
};

Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Tl0AmqQJK4qaCl4pLRio7A/Design-System-for-Story-Book?node-id=2211%3A24892',
  },
  actions: { disabled: true },
  controls: { disabled: true }
};

export const Playground: Story = (args: any) => {
  return (
    <StoryContainer>
      <StoryRow>
        <HistorySidebar { ...args } history={history} />
      </StoryRow>
    </StoryContainer>
  );
};
