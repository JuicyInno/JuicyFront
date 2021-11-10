import React from 'react';
import Badge, { IBadgeProps } from './Badge';
import { Story } from '@storybook/react';
import { variants } from '../../../types';
import { withDesign } from 'storybook-addon-designs';
import { StoryDocs, StoryDocsH1, StoryDocsH2, } from '../../storybook';
import StoryContainer from '../../storybook/Story';
import StoryRow from '../../storybook/StoryRow';


export default {
  title: 'components/withTest/Badge',
  component: Badge,
  decorators: [withDesign],
  typeArgs: {
    size: {
      options: ['s', 'm'],
      control: { type: 'select' },
      defaultValue: 'm'
    },
    variant: {
      options: variants,
      control: { type: 'select' },
      defaultValue: 'blue'
    },
    className: { control: null },
    position: { control: null }
  }
};

export const badge = (args: IBadgeProps) => {

  return (
    <StoryDocs>
      <StoryDocsH1>Badge Documentation</StoryDocsH1>
      <div style={{ fontSize: '16px' }}>
        Badge — компонент, который обычно дополняет другие компоненты и показывает количественные зачения. Например, в компоненте Tabs может показывать количество элементов в закладке. Или показывать количество оповещений в панели нотификации.

      </div>
      <div style={{
        fontSize: '16px',
        marginBottom: '80px'
      }}>
        <br /> Компонент существует в двух размерах — S 16 и M 20 px по высоте.
      </div>

      <div>
        <div style={{
          display: 'flex',
          alignItems: 'self-start'
        }}>
          <Badge variant='tertiary' badgeContent={5} size='m'>
            <div style={{
              width: 30,
              height: 30
            }} />
          </Badge>
          <Badge variant='tertiary' badgeContent={5} size='s'>
            <div style={{
              width: 30,
              height: 30
            }} />
          </Badge>
          <p style={{
            fontSize: '14px',
            lineHeight: '20px',
            marginLeft: '35px',
            marginTop: '-10px'

          }}>Light</p>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'self-start'
        }}>
          <Badge variant='blue' badgeContent={5} size='m'>
            <div style={{
              width: 30,
              height: 30
            }} />
          </Badge>
          <Badge variant='blue' badgeContent={5} size='s'>
            <div style={{
              width: 30,
              height: 30
            }} />
          </Badge>
          <p style={{
            fontSize: '14px',
            lineHeight: '20px',
            marginLeft: '35px',
            marginTop: '-10px'

          }}>Info</p>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'self-start'
        }}>
          <Badge variant='yellow' badgeContent={5} size='m'>
            <div style={{
              width: 30,
              height: 30
            }} />
          </Badge>
          <Badge variant='yellow' badgeContent={5} size='s'>
            <div style={{
              width: 30,
              height: 30
            }} />
          </Badge>
          <p style={{
            fontSize: '14px',
            lineHeight: '20px',
            marginLeft: '35px',
            marginTop: '-10px'

          }}>Warning</p>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'self-start'
        }}>
          <Badge variant='green' badgeContent={5} size='m'>
            <div style={{
              width: 30,
              height: 30
            }} />
          </Badge>
          <Badge variant='green' badgeContent={5} size='s'>
            <div style={{
              width: 30,
              height: 30
            }} />
          </Badge>
          <p style={{
            fontSize: '14px',
            lineHeight: '20px',
            marginLeft: '35px',
            marginTop: '-10px'

          }}>Success</p>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'self-start'
        }}>
          <Badge variant='red' badgeContent={5} size='m'>
            <div style={{
              width: 30,
              height: 30
            }} />
          </Badge>
          <Badge variant='red' badgeContent={5} size='s'>
            <div style={{
              width: 30,
              height: 30
            }} />
          </Badge>
          <p style={{
            fontSize: '14px',
            lineHeight: '20px',
            marginLeft: '35px',
            marginTop: '-10px'

          }}>Error</p>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'self-start'
        }}>
          <Badge variant='grey' badgeContent={5} size='m'>
            <div style={{
              width: 30,
              height: 30
            }} />
          </Badge>
          <Badge variant='grey' badgeContent={5} size='s'>
            <div style={{
              width: 30,
              height: 30
            }} />
          </Badge>
          <p style={{
            fontSize: '14px',
            lineHeight: '20px',
            marginLeft: '35px',
            marginTop: '-10px'

          }}>Grey</p>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'self-start'
        }}>
          <Badge variant='dark' badgeContent={5} size='m'>
            <div style={{
              width: 30,
              height: 30
            }} />
          </Badge>
          <Badge variant='dark' badgeContent={5} size='s'>
            <div style={{
              width: 30,
              height: 30
            }} />
          </Badge>
          <p style={{
            fontSize: '14px',
            lineHeight: '20px',
            marginLeft: '35px',
            marginTop: '-10px'

          }}>Dark</p>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'self-start'
        }}>
          <Badge variant='light-inactive' badgeContent={5} size='m'>
            <div style={{
              width: 30,
              height: 30
            }} />
          </Badge>
          <Badge variant='light-inactive' badgeContent={5} size='s'>
            <div style={{
              width: 30,
              height: 30
            }} />
          </Badge>
          <p style={{
            fontSize: '14px',
            lineHeight: '20px',
            marginLeft: '35px',
            marginTop: '-10px'

          }}>Light Inactive</p>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'self-start'
        }}>
          <Badge variant='light-disable' badgeContent={5} size='m'>
            <div style={{
              width: 30,
              height: 30
            }} />
          </Badge>
          <Badge variant='light-disable' badgeContent={5} size='s'>
            <div style={{
              width: 30,
              height: 30
            }} />
          </Badge>
          <p style={{
            fontSize: '14px',
            lineHeight: '20px',
            marginLeft: '35px',
            marginTop: '-10px'

          }}>Light Disable</p>
        </div>
      </div>

      <div>
        <div style={{
          display: 'flex',
          alignItems: 'self-start',
          background: '#F1F2F4',
          paddingTop: '25px'

        }}>
          <Badge variant='white' badgeContent={5} size='m'>
            <div style={{
              width: 30,
              height: 30
            }} />
          </Badge>
          <Badge variant='white' badgeContent={5} size='s'>
            <div style={{
              width: 30,
              height: 30
            }} />
          </Badge>
          <p style={{
            fontSize: '14px',
            lineHeight: '20px',
            marginLeft: '35px',
            marginTop: '-10px'

          }}>White</p>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'self-start',
          background: '#F1F2F4',
        }}>
          <Badge variant='white-inactive' badgeContent={5} size='m'>
            <div style={{
              width: 30,
              height: 30
            }} />
          </Badge>
          <Badge variant='white-inactive' badgeContent={5} size='s'>
            <div style={{
              width: 30,
              height: 30
            }} />
          </Badge>
          <p style={{
            fontSize: '14px',
            lineHeight: '20px',
            marginLeft: '35px',
            marginTop: '-10px'

          }}>White Inactive</p>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'self-start',
          background: '#F1F2F4',
        }}>
          <Badge variant='white-disable' badgeContent={5} size='m'>
            <div style={{
              width: 30,
              height: 30
            }} />
          </Badge>
          <Badge variant='white-disable' badgeContent={5} size='s'>
            <div style={{
              width: 30,
              height: 30
            }} />
          </Badge>
          <p style={{
            fontSize: '14px',
            lineHeight: '20px',
            marginLeft: '35px',
            marginTop: '-10px'

          }}>White Disable</p>
        </div>
      </div>

      <StoryDocsH2>Пример использования</StoryDocsH2>
      <div style={{
        fontSize: '16px',
        marginBottom: '20px'
      }}>Напротив заголовка показывает количество айтемов</div>

      <div style={{
        marginBottom: '40px',
        fontWeight: 500
      }}>
        <Badge variant={args.variant} position='bottomRight' size='m' badgeContent={5}>Заголовок</Badge>
      </div>

      <div style={{
        fontSize: '16px',
        marginBottom: '20px'
      }}>Рядом с иконкой показывает количество</div>

      <div style={{ marginBottom: '40px' }}>
        <Badge variant={args.variant} size='m' badgeContent={5}>
          <svg width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg' style={{ color: '#8A96A8' }}>
            <circle cx='24' cy='24' r='24' fill='#F1F2F4' />
            <path fill-rule='evenodd' clip-rule='evenodd' d='M17 18.2C17 17.0799 17 16.5198 17.218 16.092C17.4097 15.7157 17.7157 15.4097 18.092 15.218C18.5198 15 19.0799 15 20.2 15H27.8C28.9201 15 29.4802 15 29.908 15.218C30.2843 15.4097 30.5903 15.7157 30.782 16.092C31 16.5198 31 17.0799 31 18.2V29.8C31 30.9201 31 31.4802 30.782 31.908C30.5903 32.2843 30.2843 32.5903 29.908 32.782C29.4802 33 28.9201 33 27.8 33H20.2C19.0799 33 18.5198 33 18.092 32.782C17.7157 32.5903 17.4097 32.2843 17.218 31.908C17 31.4802 17 30.9201 17 29.8V18.2ZM20 19C20 18.4477 20.4477 18 21 18H27C27.5523 18 28 18.4477 28 19C28 19.5523 27.5523 20 27 20H21C20.4477 20 20 19.5523 20 19ZM21 22C20.4477 22 20 22.4477 20 23C20 23.5523 20.4477 24 21 24H24C24.5523 24 25 23.5523 25 23C25 22.4477 24.5523 22 24 22H21Z' fill='currentColor' />
          </svg>
        </Badge>
      </div>

      <div style={{
        fontSize: '16px',
        marginBottom: '20px'
      }}>Рядом с иконкой показывает количество</div>

      <div>
        <Badge variant={args.variant} size='m'>
          <svg width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg' style={{ color: '#8A96A8' }}>
            <circle cx='24' cy='24' r='24' fill='#F1F2F4' />
            <path fill-rule='evenodd' clip-rule='evenodd' d='M17 18.2C17 17.0799 17 16.5198 17.218 16.092C17.4097 15.7157 17.7157 15.4097 18.092 15.218C18.5198 15 19.0799 15 20.2 15H27.8C28.9201 15 29.4802 15 29.908 15.218C30.2843 15.4097 30.5903 15.7157 30.782 16.092C31 16.5198 31 17.0799 31 18.2V29.8C31 30.9201 31 31.4802 30.782 31.908C30.5903 32.2843 30.2843 32.5903 29.908 32.782C29.4802 33 28.9201 33 27.8 33H20.2C19.0799 33 18.5198 33 18.092 32.782C17.7157 32.5903 17.4097 32.2843 17.218 31.908C17 31.4802 17 30.9201 17 29.8V18.2ZM20 19C20 18.4477 20.4477 18 21 18H27C27.5523 18 28 18.4477 28 19C28 19.5523 27.5523 20 27 20H21C20.4477 20 20 19.5523 20 19ZM21 22C20.4477 22 20 22.4477 20 23C20 23.5523 20.4477 24 21 24H24C24.5523 24 25 23.5523 25 23C25 22.4477 24.5523 22 24 22H21Z' fill='currentColor' />
          </svg>
        </Badge>
      </div>
    </StoryDocs >

  );
};


badge.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File',
  },
};

export const Playground: Story = (args: IBadgeProps) => {
  return (
    <StoryContainer>
      <StoryRow>
        <Badge variant={args.variant} {...args}>
          <svg width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg' style={{ color: '#8A96A8' }}>
            <circle cx='24' cy='24' r='24' fill='#F1F2F4' />
            <path fill-rule='evenodd' clip-rule='evenodd' d='M17 18.2C17 17.0799 17 16.5198 17.218 16.092C17.4097 15.7157 17.7157 15.4097 18.092 15.218C18.5198 15 19.0799 15 20.2 15H27.8C28.9201 15 29.4802 15 29.908 15.218C30.2843 15.4097 30.5903 15.7157 30.782 16.092C31 16.5198 31 17.0799 31 18.2V29.8C31 30.9201 31 31.4802 30.782 31.908C30.5903 32.2843 30.2843 32.5903 29.908 32.782C29.4802 33 28.9201 33 27.8 33H20.2C19.0799 33 18.5198 33 18.092 32.782C17.7157 32.5903 17.4097 32.2843 17.218 31.908C17 31.4802 17 30.9201 17 29.8V18.2ZM20 19C20 18.4477 20.4477 18 21 18H27C27.5523 18 28 18.4477 28 19C28 19.5523 27.5523 20 27 20H21C20.4477 20 20 19.5523 20 19ZM21 22C20.4477 22 20 22.4477 20 23C20 23.5523 20.4477 24 21 24H24C24.5523 24 25 23.5523 25 23C25 22.4477 24.5523 22 24 22H21Z' fill='currentColor' />
          </svg>
        </Badge>
      </StoryRow>
    </StoryContainer>
  );
};
