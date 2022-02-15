import React from 'react';
import { Story } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import {
  StoryDocs, StoryDocsDescription, StoryDocsH1, StoryDocsH2
} from '../../storybook';
import HistorySidebar from './HistorySidebar';
import StoryContainer from '../../storybook/Story';
import StoryRow from '../../storybook/StoryRow';
import { pathsHistory, attachments } from '../HistorySidebar/mock';

import NewHistorySidebar, { IHistory } from './_HistorySidebar';
import { Tile } from '../../..';

export default {
  title: 'components/withTest/HistorySidebar',
  component: HistorySidebar,
  decorators: [withDesign],
  argTypes: {
    history: { control: null },
    attachments: { control: null },
    isUZADO: { type: 'boolean' },
    host: { type: 'string' }
  }
};

const _item: IHistory = {
  approvers: [
    {
      id: '3',
      firstName: 'Иван',
      lastName: 'Иванов',
      middleName: 'Иванович',
      fullName: 'Иванов Иван Иванович',
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuIbv-7JSgC23hcGq8qDRBpFzdMBEw8urHdQ&usqp=CAU',
      phone: '+7(495)999-99-99',
      mobilePhone: '+79999999999',
      internalPhone: '9999',
      email: 'user@domail.com',
      manager: true,
      position: '',
      department: ''
    }
  ],
  approverName: 'Линейный руководитель',
  approveDateTime: '2022-02-15T09:03:37.612Z',
  name: 'Согласование линейным руководителем',
  comment: 'согласовано делегатом',
  status: 'Согласовано',
  statusType: 'POSITIVE'
};

const _history: IHistory[] = [
  _item,
  {
    ..._item,
    approverName: 'Бусыгина Александра Павловна',
    approveDateTime: undefined,
    name: 'Согласование заявки',
    comment: undefined,
    status: 'Подписано ЭП',
    statusType: 'NEUTRAL'
  },
  {
    ..._item,
    approvers: [
      {
        id: '1',
        firstName: 'firstName',
        lastName: 'lastName',
        middleName: 'middleName',
        fullName: 'firstName lastName middleName',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuIbv-7JSgC23hcGq8qDRBpFzdMBEw8urHdQ&usqp=CAU',
        phone: '+7(495)999-99-99',
        mobilePhone: '+79999999999',
        internalPhone: '9999',
        email: 'user@domail.com',
        manager: true,
        position: 'Начальник управления',
        department: ''
      },
      {
        id: '2',
        firstName: 'Иван',
        lastName: 'Иванов',
        middleName: 'Иванович',
        fullName: 'Иванов Иван Иванович',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuIbv-7JSgC23hcGq8qDRBpFzdMBEw8urHdQ&usqp=CAU',
        phone: '+7(495)999-99-99',
        mobilePhone: '+79999999999',
        internalPhone: '9999',
        email: 'user@domail.com',
        manager: true,
        position: 'Начальник управления',
        department: ''
      }
    ],
    approverName: 'Бусыгина Александра Павловна',
    approveDateTime: undefined,
    name: 'Согласование заявки',
    comment: undefined,
    status: 'Отклонено',
    statusType: 'NEGATIVE'
  },
  {
    ..._item,
    approverName: 'Бусыгина Александра Павловна',
    approveDateTime: undefined,
    name: 'Согласование заявки',
    comment: undefined,
    status: undefined,
    statusType: 'NEUTRAL'
  },
  {
    ..._item,
    approverName: 'Бусыгина Александра Павловна',
    approveDateTime: undefined,
    name: 'Согласование заявки',
    comment: undefined,
    status: undefined,
    statusType: 'NEUTRAL'
  },
];

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
        {/* <HistorySidebar history={pathsHistory} attachments={attachments} /> */}
        <NewHistorySidebar history={_history} attachments={attachments} userId='1' />
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
          <NewHistorySidebar
            history={_history}
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
        <HistorySidebar { ...args } history={pathsHistory} />
      </StoryRow>
    </StoryContainer>
  );
};
