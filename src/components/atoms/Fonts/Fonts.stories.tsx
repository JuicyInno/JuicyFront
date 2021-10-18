import React from 'react';
import './Fonts.scss';
import { Story } from '@storybook/react';
import StoryContainer from '../../storybook/Story';
import { withDesign } from 'storybook-addon-designs';
import { StoryDocs, StoryDocsH2 } from '../../storybook';

export default {
  title: 'Шрифты',
  decorators: [withDesign],
};

interface IFontGroup {
  title: string;
  fonts: IFont[];
}

interface IFont {
  name: string;
  group: string;
  weight: string;
  size: string;
  lineHeight: string;
  description: string;
}

export const fonts: Story = () => {

  const fontsList: IFontGroup[] = [
    {
      title: 'Headers (Main)',
      fonts: [
        {
          name: 'XXL-H1',
          group: 'Main',
          weight: 'SemiBold',
          size: '42 pt',
          lineHeight: '52 px',
          description: 'Большой заголовок для лендингов. Не применяется на мобильных устройствах.',
        },
        {
          name: 'XL-H2',
          group: 'Main',
          weight: 'SemiBold',
          size: '36 pt',
          lineHeight: '44 px',
          description: 'Большой заголовок. Используется в редких случаях, когда нужно сделать визуальный акцент. Не применяется на мобильных устройствах.'
        },
        {
          name: 'L-H3',
          group: 'Main',
          weight: 'SemiBold',
          size: '32 pt',
          lineHeight: '40 px',
          description: 'Большой базовый заголовок. Используется в случаях, когда много пространства и используются компоненты размера XL'
        },
        {
          name: 'M-H4',
          group: 'Main',
          weight: 'SemiBold',
          size: '28 pt',
          lineHeight: '36 px',
          description: 'Базовый заголовок первого уровня'
        },
        {
          name: 'S-H5',
          group: 'Main',
          weight: 'SemiBold',
          size: '22 pt',
          lineHeight: '28 px',
          description: 'Базовый заголовок второго уровня'
        },
        {
          name: 'XS-H6',
          group: 'Main',
          weight: 'SemiBold',
          size: '18 pt',
          lineHeight: '24 px',
          description: 'Базовый заголовок третьего уровня'
        },
        {
          name: 'XS-18pt-Normal',
          group: 'Main',
          weight: 'Book',
          size: '18 pt',
          lineHeight: '24 px',
          description: 'Крупный шрифт параграфа, может использоваться как подзаголовок'
        }
      ]
    },
    {
      title: 'Body styles (Additional)',
      fonts: [
        {
          name: 'L-16pt-Bold',
          group: 'Additional',
          weight: 'SemiBold',
          size: '16 pt',
          lineHeight: '24 px',
          description: 'Акцентированный текст, подзаголовок',
        },
        {
          name: 'L-16pt-Normal',
          group: 'Additional',
          weight: 'Book',
          size: '16 pt',
          lineHeight: '24 px',
          description: 'Базовый шрифт системы для набора текстов',
        },
        {
          name: 'M-16pt-Normal',
          group: 'Additional',
          weight: 'Book',
          size: '16 pt',
          lineHeight: '20 px',
          description: 'Базовый шрифт системы для набора текста длинною в 1-2 строки (опционально)',
        },
        {
          name: 'S-14pt-Bold',
          group: 'Additional',
          weight: 'SemiBold',
          size: '14 pt',
          lineHeight: '20 px',
          description: 'Акцентированный текст, подзаголовок',
        },
        {
          name: 'S-14pt-Normal',
          group: 'Additional',
          weight: 'Book',
          size: '14 pt',
          lineHeight: '20 px',
          description: 'Базовый шрифт системы для набора текстов',
        },
        {
          name: 'XS-14pt-Normal',
          group: 'Additional',
          weight: 'Book',
          size: '14 pt',
          lineHeight: '16 px',
          description: 'Базовый шрифт системы для набора текста длинною в 1-2 строки (опционально)',
        }
      ]
    },
    {
      title: 'Button styles (Button)',
      fonts: [
        {
          name: 'M-16pt',
          group: 'Button',
          weight: 'Medium',
          size: '16 pt',
          lineHeight: '24 px',
          description: 'Шрифт используется только в кнопках',
        },
        {
          name: 'S-14pt',
          group: 'Button',
          weight: 'Medium',
          size: '14 pt',
          lineHeight: '20 px',
          description: 'Шрифт используется только в кнопках',
        }
      ]
    },
    {
      title: 'Caption',
      fonts: [
        {
          name: 'XS-12pt',
          group: 'Caption',
          weight: 'Book',
          size: '12 pt',
          lineHeight: '16 px',
          description: 'Самый маленький шрифт системы. Применяется в компонентах, сносках, примечаниях, счетчиках и тд.',
        }
      ]
    }
  ];

  const fontsJSX = fontsList.map((g: IFontGroup) => {
    return (
      <StoryDocs>
        <StoryDocsH2>{g.title}</StoryDocsH2>
        <div className='fonts-list'>
          {
            g.fonts.map((f: IFont) => {
              return (
                <div className='font'>
                  <div className='font__main'>
                    <div className={`font__name ${f.name}`}>{f.name}</div>
                    <div className='font__group'>{f.group}</div>
                  </div>
                  <div className='font__details'>
                    <div className='font__details-item'>
                      <div className='font__label'>Шрифт</div>
                      <div className='font__value'>{f.weight}</div>
                    </div>
                    <div className='font__details-item'>
                      <div className='font__label'>Размер</div>
                      <div className='font__value'>{f.size}</div>
                    </div>
                    <div className='font__details-item'>
                      <div className='font__label'>Высота строки</div>
                      <div className='font__value'>{f.lineHeight}</div>
                    </div>
                  </div>
                  <div className='font__description'>{f.description}</div>
                </div>
              );
            })
          }
        </div>
      </StoryDocs>
    );
  });

  return (
    <StoryContainer>
      {fontsJSX}
    </StoryContainer>
  );
};

fonts.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Y86V3oIhkZQ4u27iBuhN0l/Проекты-ВТБ-основной?node-id=13613%3A94113',
  },
  actions: { disabled: true },
  controls: { disabled: true }
};
