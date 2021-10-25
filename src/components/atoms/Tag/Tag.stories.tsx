import React from 'react';
import Tag from './Tag';
import Tile from '../Tile';
import {
  StoryDocs, StoryDocsH1, StoryDocsH2, StoryDocsDescription
} from '../../storybook';
import StoryContainer from '../../storybook/Story';
import StoryRow from '../../storybook/StoryRow';

import Placeholder16 from '../../../assets/icons/Placeholder16';


export default {
  title: 'controls/не проверено/Tag',
  component: Tag,
  argTypes: { icon: { control: null } }
};

export const Demo = () => {

  const wrap: React.CSSProperties = { marginBottom: 16 };

  return (
    <StoryDocs>
      <StoryDocsH1>Tag</StoryDocsH1>
      <StoryContainer>
        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          marginLeft: '30px'
        }}>
          <div style={{
            display: 'grid',
            gap: 16,
            justifyItems: 'flex-start',
            border: '1px dashed #7B61FF',
            maxWidth: '170px',
            padding: '16px 11px',
            borderRadius: '5px',
            marginRight: '20px',

          }}>
            <Tag variant='yellow'>Отпуск</Tag>
            <Tag variant='yellow'>На согласовании</Tag>
            <Tag variant='grey'>+2</Tag>
            <Tag variant='grey'>Завершено</Tag>
            <Tag variant='green'>Подбор</Tag>
            <Tag variant='green'>Вакансия</Tag>
            <Tag variant='violet'>Увольнение</Tag>
            <Tag variant='violet'>Черновик</Tag>
            <Tag variant='red'>Отклонено</Tag>
            <Tag variant='magenta'>Декрет</Tag>
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyItems: 'flex-start',
            border: '1px dashed #7B61FF',
            maxWidth: '170px',
            padding: '16px 11px',
            borderRadius: '5px'
          }}>
            <div style={wrap}>
              <Tag variant='yellow'>На доработке</Tag>
            </div>
            <div style={wrap}>
              <Tag variant='yellow'>На доработку</Tag>
            </div>
            <div style={wrap}>
              <Tag variant='yellow'>На согласовании</Tag>
            </div>
            <div style={wrap}>
              <Tag variant='purple'>Черновик</Tag>
            </div>
            <div style={wrap}>
              <Tag variant='grey'>На согласовании</Tag>
            </div>
            <div style={wrap}>
              <Tag variant='green'>Приказ подписан</Tag>
            </div>
            <div style={wrap}>
              <Tag variant='red'>Отклонено</Tag>
            </div>
            <div style={wrap}>
              <Tag variant='red'>Отменено</Tag>
            </div>
            <div>
              <Tag variant='grey'>Завершено</Tag>
            </div>
          </div>
        </div>

        <div style={{
          marginTop: 20,
          display: 'flex',
          marginLeft: 30,
          flexDirection: 'column'
        }}>
          <div style={wrap}>
            <Tag onRemove={() => { }}>Москва</Tag>
          </div>
          <div style={wrap}>
            <Tag variant='blue' outlined onRemove={() => { }}>Москва</Tag>
          </div>
          <div style={wrap}>
            <Tag icon={<Placeholder16 />}>Москва</Tag>
          </div>
          <div style={wrap}>
            <Tag variant='blue' outlined icon={<Placeholder16 />}>Москва</Tag>
          </div>
        </div>

        <StoryDocsH2>Группа с тегами</StoryDocsH2>
        <StoryDocsDescription>
          Если у нас в карточке больше 1 тега, то стоит остальные прятать в селект. Отступ между тегами нужно делать 8px.
        </StoryDocsDescription>
        <StoryRow>
          <div style={{
            marginLeft: '72px',
            display: 'flex',
            gap: 16,
            justifyItems: 'flex-start',
            border: '1px dashed #7B61FF',
            padding: '16px',
            borderRadius: '5px',
            marginRight: '20px',
          }}>
            <Tile>
              <p style={{
                fontSize: 14,
                lineHeight: '16px',
                color: '#626F84',
              }}>Сотрудник</p>
              <div style={{
                marginTop: 8,
                display: 'grid',
                gap: 8,
                gridTemplateColumns: 'repeat(2, 1fr)'
              }}>
                <Tag variant='yellow'>Отпуск</Tag>
                <Tag variant='green'>Подбор</Tag>
              </div>
            </Tile>

            <Tile>
              <p style={{
                fontSize: 14,
                lineHeight: '16px',
                color: '#626F84',
              }}>Штатная еденица</p>
              <div style={{
                marginTop: 8,
                display: 'grid',
                gap: 8,
                gridTemplateColumns: 'repeat(2, 1fr)'
              }}>
                <Tag variant='violet'>Подбор</Tag>
                <Tag variant='violet'>Увольнение</Tag>
              </div>
              <p style={{
                fontSize: 14,
                lineHeight: '16px',
                color: '#626F84',
                marginTop: 14,
              }}>Сотрудник</p>
              <div style={{
                marginTop: 8,
                display: 'grid',
                gap: 8,
                gridTemplateColumns: 'repeat(2, 1fr)'
              }}>
                <Tag variant='yellow'>Отпуск</Tag>
                <Tag variant='violet'>Увольнение</Tag>
              </div>
            </Tile>
          </div>

        </StoryRow>
      </StoryContainer>
    </StoryDocs >
  );
};

Demo.parameters = {
  actions: { disabled: true },
  controls: { disabled: true },
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/gDl8sDPM8Zmh5ol4ywzLrj/Design-System-VTB-Home?node-id=20799%3A86567',
  },
};

export const Playground = (args: any) => {
  return (
    <StoryContainer>
      <StoryRow>
        <Tag {...args} onRemove={undefined}>Вариант</Tag>
      </StoryRow>
      <StoryRow>
        <Tag {...args}>Вариант</Tag>
      </StoryRow>
      <StoryRow>
        <Tag {...args} icon={<Placeholder16 />} onRemove={undefined}>Вариант</Tag>
      </StoryRow>
      <StoryRow>
        <Tag {...args} icon={<Placeholder16 />}>Вариант</Tag>
      </StoryRow>
    </StoryContainer>
  );
};
