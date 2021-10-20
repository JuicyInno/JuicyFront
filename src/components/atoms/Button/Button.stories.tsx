import React from 'react';
import Button, { ButtonType, IButtonProps } from './Button';
import { Story } from '@storybook/react';

import {
  StoryDocs, StoryDocsH1, StoryDocsH2, StoryDocsH3, StoryDocsDescription, StoryDocsLabel
} from '../../storybook';
import StoryContainer from '../../storybook/Story';
import StoryRow from '../../storybook/StoryRow';

import { variantsClassic } from '../../../types';

import Placeholder20 from '../../../assets/icons/Placeholder20';
import Placeholder24 from '../../../assets/icons/Placeholder24';
import { withDesign } from 'storybook-addon-designs';

const buttonTypes: ButtonType[] = [
  'primary',
  'light',
  'secondary',
  'ghost',
  'danger',
  'icon',
  'iconFill',
  'text',
  'white'
];

export default {
  title: 'atoms/withTest/Button',
  component: Button,
  decorators: [withDesign],
  argTypes: {
    buttonType: {
      options: buttonTypes,
      control: { type: 'select' },
      defaultValue: 'primary'
    },
    size: {
      options: [
        's',
        'm',
        'l',
        'xl'
      ],
      control: { type: 'select' },
      defaultValue: 'm'
    },
    disabled: { type: 'boolean' },
    textColor: {
      options: variantsClassic,
      control: { type: 'select' },
      defaultValue: 'default'
    },
    type: { control: null },
    pressedCondition: { control: null },
    startAdornment: { control: null },
    endAdornment: { control: null },
  }
};

export const Demo: Story = () => {
  const getButtons = (props: IButtonProps) => {
    return (
      <>
        <Button {...props} size='xl'>Button 56</Button>
        <Button {...props} size='l'>Button 48</Button>
        <Button {...props} size='m'>Button 40</Button>
        <Button {...props} size='s'>Button 32</Button>
      </>
    );
  };

  const getIconButtons = (props: IButtonProps) => {
    return (
      <>
        <Button {...props} size='xl'><Placeholder24 /></Button>
        <Button {...props} size='l'><Placeholder24 /></Button>
        <Button {...props} size='m'><Placeholder24 /></Button>
        <Button {...props} size='s'><Placeholder20 /></Button>
      </>
    );
  };


  return (
    <StoryDocs>
      <StoryDocsH1>Кнопки</StoryDocsH1>

      <StoryDocsH2>Размеры</StoryDocsH2>
      <StoryDocsDescription>
        Кнопки представлены в четырех размерностях XL, L, M и S. Такое количество кнопок обусловлено большим количеством проектов разной
        степени плотности — от простых интерфейсов низкой плотности до сложных высоконагруженных систем.
      </StoryDocsDescription>

      <div style={{
        display: 'grid',
        gap: '20px',
        gridTemplateColumns: 'repeat(4, auto)',
        justifyItems: 'flex-start',
        width: 'max-content'
      }}>
        <Button size='xl'>Button XL</Button>
        <Button size='l'>Button L</Button>
        <Button size='m'>Button M</Button>
        <Button size='s'>Button S</Button>
      </div>

      <StoryDocsH2>Иконки в кнопках</StoryDocsH2>
      <StoryDocsDescription>
        Иконки в кнопках могут выводиться слева, справа и по центру (без текста). Иконка перенаследует цвет взависимости от состояния
        кнопки.
      </StoryDocsDescription>

      <div style={{
        display: 'grid',
        gap: '20px',
        gridTemplateColumns: 'repeat(4, auto)',
        justifyItems: 'flex-start',
        width: 'max-content'
      }}>
        <Button size='xl' startAdornment={<Placeholder24 />}>Button 56</Button>
        <Button size='l' startAdornment={<Placeholder24 />}>Button 48</Button>
        <Button size='m' startAdornment={<Placeholder24 />}>Button 40</Button>
        <Button size='s' startAdornment={<Placeholder20 />}>Button 32</Button>

        <Button size='xl' endAdornment={<Placeholder24 />}>Button 56</Button>
        <Button size='l' endAdornment={<Placeholder24 />}>Button 48</Button>
        <Button size='m' endAdornment={<Placeholder24 />}>Button 40</Button>
        <Button size='s' endAdornment={<Placeholder20 />}>Button 32</Button>

        <Button size='xl' startAdornment={<Placeholder24 />}></Button>
        <Button size='l' startAdornment={<Placeholder24 />}></Button>
        <Button size='m' startAdornment={<Placeholder24 />}></Button>
        <Button size='s' startAdornment={<Placeholder20 />}></Button>

        <Button size='xl' buttonType='text' startAdornment={<Placeholder24 />}>Text button 56</Button>
        <div /> <div />
        <Button size='s' buttonType='text' startAdornment={<Placeholder20 />}>Text button 32</Button>
      </div>

      <StoryDocsH2>Основные состояния</StoryDocsH2>

      <div style={{
        display: 'grid',
        gap: '20px',
        gridTemplateColumns: 'repeat(5, auto)',
        justifyItems: 'center',
        width: 'max-content'
      }}>
        <StoryDocsLabel>Размеры</StoryDocsLabel>
        <StoryDocsLabel><b>XL Button</b> <br /> Height: 56px</StoryDocsLabel>
        <StoryDocsLabel><b>L Button</b> <br /> Height: 48px</StoryDocsLabel>
        <StoryDocsLabel><b>M Button</b> <br /> Height: 40px</StoryDocsLabel>
        <StoryDocsLabel><b>S Button</b> <br /> Height: 32px</StoryDocsLabel>

        <StoryDocsH3>Primary</StoryDocsH3>

        <StoryDocsLabel>Default</StoryDocsLabel>
        {getButtons({ buttonType: 'primary' })}
        <StoryDocsLabel>Disabled</StoryDocsLabel>
        {getButtons({
          buttonType: 'primary',
          disabled: true
        })}
        <StoryDocsLabel>Loading</StoryDocsLabel>
        {getButtons({
          buttonType: 'primary',
          preloader: true
        })}

        <StoryDocsH3>Primary Light</StoryDocsH3>

        <StoryDocsLabel>Default</StoryDocsLabel>
        {getButtons({ buttonType: 'light' })}
        <StoryDocsLabel>Disabled</StoryDocsLabel>
        {getButtons({
          buttonType: 'light',
          disabled: true
        })}
        <StoryDocsLabel>Loading</StoryDocsLabel>
        {getButtons({
          buttonType: 'light',
          preloader: true
        })}

        <StoryDocsH3>Secondary</StoryDocsH3>

        <StoryDocsLabel>Default</StoryDocsLabel>
        {getButtons({ buttonType: 'secondary' })}
        <StoryDocsLabel>Disabled</StoryDocsLabel>
        {getButtons({
          buttonType: 'secondary',
          disabled: true
        })}
        <StoryDocsLabel>Loading</StoryDocsLabel>
        {getButtons({
          buttonType: 'secondary',
          preloader: true
        })}

        <StoryDocsH3>Ghost</StoryDocsH3>


        <StoryDocsLabel>Default</StoryDocsLabel>
        {getButtons({ buttonType: 'ghost' })}
        <StoryDocsLabel>Disabled</StoryDocsLabel>
        {getButtons({
          buttonType: 'ghost',
          disabled: true
        })}
        <StoryDocsLabel>Loading</StoryDocsLabel>
        {getButtons({
          buttonType: 'ghost',
          preloader: true
        })}

        <StoryDocsH3>Icon Button</StoryDocsH3>

        <StoryDocsLabel>Default</StoryDocsLabel>
        {getIconButtons({ buttonType: 'icon' })}
        <StoryDocsLabel>Disabled</StoryDocsLabel>
        {getIconButtons({
          buttonType: 'icon',
          disabled: true
        })}
        <StoryDocsLabel>Loading</StoryDocsLabel>
        {getIconButtons({
          buttonType: 'icon',
          preloader: true
        })}


        <StoryDocsH3>Text Button</StoryDocsH3>

        <StoryDocsLabel>Default</StoryDocsLabel>
        {getButtons({ buttonType: 'text' })}
        <StoryDocsLabel>Disabled</StoryDocsLabel>
        {getButtons({
          buttonType: 'text',
          disabled: true
        })}
        <StoryDocsLabel>Loading</StoryDocsLabel>
        {getButtons({
          buttonType: 'text',
          preloader: true
        })}
      </div>
    </StoryDocs>
  );
};

Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Y86V3oIhkZQ4u27iBuhN0l/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B-%D0%92%D0%A2%D0%91-%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%BE%D0%B9?node-id=13613%3A74510',
  },
  actions: { disabled: true },
  controls: { disabled: true }
};

export const Playground: Story = (args: IButtonProps) => {
  const buttonType = args.buttonType === 'icon' || args.buttonType === 'iconFill' ? 'primary' : args.buttonType;
  const adornment = args.size === 's' ? <Placeholder20 /> : <Placeholder24 />;

  return (
    <StoryContainer>
      <StoryRow>
        <Button { ...args }>
          { args.buttonType === 'icon' || args.buttonType === 'iconFill' ? 'i' : 'Button' }
        </Button>
      </StoryRow>
      <StoryRow>
        <Button { ...args } buttonType={buttonType} startAdornment={adornment}>
          Button
        </Button>
      </StoryRow>
      <StoryRow>
        <Button { ...args } buttonType={buttonType} endAdornment={adornment}>
          Button
        </Button>
      </StoryRow>
      <StoryRow>
        <Button { ...args } buttonType={buttonType} startAdornment={adornment} endAdornment={adornment}>
          Button
        </Button>
      </StoryRow>
      <StoryRow>
        <Button { ...args } buttonType={buttonType} startAdornment={adornment} />
      </StoryRow>
    </StoryContainer>
  );
};
