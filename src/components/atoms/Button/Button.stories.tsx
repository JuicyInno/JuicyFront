import React from 'react';
import Button, { ButtonType, IButtonProps } from './Button';
import { Story } from '@storybook/react';

import {
  StoryDocs, StoryDocsH1, StoryDocsH2, StoryDocsH3, StoryDocsDescription, StoryDocsLabel
} from '../../storybook';
import StoryContainer from '../../storybook/Story';
import StoryRow from '../../storybook/StoryRow';

import { variantsClassic } from '../../../types';

import { AllIconPlace, AllAdd } from '../../../indexIcon';
import { withDesign } from 'storybook-addon-designs';

const buttonTypes: ButtonType[] = [
  'primary',
  'light',
  'secondary',
  'outline',
  'ghost',
  'danger',
  'icon',
  'iconFill',
  'text',
  'white'
];

export default {
  title: 'controls/withTest/Button',
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
        <Button {...props} size='xl'><AllIconPlace /></Button>
        <Button {...props} size='l'><AllIconPlace /></Button>
        <Button {...props} size='m'><AllIconPlace /></Button>
        <Button {...props} size='s'><AllIconPlace /></Button>
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
        <Button size='xl' startAdornment={<AllIconPlace size='m' />}>Button 56</Button>
        <Button size='l' startAdornment={<AllIconPlace size='s' />}>Button 48</Button>
        <Button size='m' startAdornment={<AllIconPlace size='xs' />}>Button 40</Button>
        <Button size='s' startAdornment={<AllIconPlace size='xxs' />}>Button 32</Button>

        <Button size='xl' endAdornment={<AllIconPlace size='m' />}>Button 56</Button>
        <Button size='l' endAdornment={<AllIconPlace size='s' />}>Button 48</Button>
        <Button size='m' endAdornment={<AllIconPlace size='xs' />}>Button 40</Button>
        <Button size='s' endAdornment={<AllIconPlace size='xxs' />}>Button 32</Button>

        <Button size='xl' startAdornment={<AllIconPlace size='m' />}></Button>
        <Button size='l' startAdornment={<AllIconPlace size='s' />}></Button>
        <Button size='m' startAdornment={<AllIconPlace size='xs' />}></Button>
        <Button size='s' startAdornment={<AllIconPlace size='xxs' />}></Button>

        <Button size='xl' buttonType='text' startAdornment={<AllIconPlace size='m' />}>Text button 56</Button>
        <div /> <div />
        <Button size='s' buttonType='text' startAdornment={<AllIconPlace size='xxs' />}>Text button 32</Button>
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

        <StoryDocsH3>Danger</StoryDocsH3>

        <StoryDocsLabel>Default</StoryDocsLabel>
        {getButtons({ buttonType: 'danger' })}
        <StoryDocsLabel>Disabled</StoryDocsLabel>
        {getButtons({
          buttonType: 'danger',
          disabled: true
        })}
        <StoryDocsLabel>Loading</StoryDocsLabel>
        {getButtons({
          buttonType: 'danger',
          preloader: true
        })}

        <StoryDocsH3>Success</StoryDocsH3>

        <StoryDocsLabel>Default</StoryDocsLabel>
        {getButtons({ buttonType: 'success' })}
        <StoryDocsLabel>Disabled</StoryDocsLabel>
        {getButtons({
          buttonType: 'success',
          disabled: true
        })}
        <StoryDocsLabel>Loading</StoryDocsLabel>
        {getButtons({
          buttonType: 'success',
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

        <StoryDocsH3>Outline</StoryDocsH3>

        <StoryDocsLabel>Default</StoryDocsLabel>
        {getButtons({ buttonType: 'outline' })}
        <StoryDocsLabel>Disabled</StoryDocsLabel>
        {getButtons({
          buttonType: 'outline',
          disabled: true
        })}
        <StoryDocsLabel>Loading</StoryDocsLabel>
        {getButtons({
          buttonType: 'outline',
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

        <StoryDocsH3>Icon Buttons</StoryDocsH3>

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

        <StoryDocsH3>Buttons Round</StoryDocsH3>

        <StoryDocsLabel>Default</StoryDocsLabel>
        {getButtons({ buttonType: 'round' })}
        <StoryDocsLabel>Active</StoryDocsLabel>
        {getButtons({ buttonType: 'round-active' })}
        <StoryDocsLabel>Disabled</StoryDocsLabel>
        {getButtons({
          buttonType: 'round',
          disabled: true
        })}
        <StoryDocsLabel>Loading</StoryDocsLabel>
        {getButtons({
          buttonType: 'round',
          preloader: true
        })}

        <StoryDocsH3>Icon Buttons Round</StoryDocsH3>

        <StoryDocsLabel>Default</StoryDocsLabel>
        {getIconButtons({ buttonType: 'icon-round' })}
        <StoryDocsLabel>Active</StoryDocsLabel>
        {getIconButtons({ buttonType: 'icon-round-active' })}
        <StoryDocsLabel>Disabled</StoryDocsLabel>
        {getIconButtons({
          buttonType: 'icon-round',
          disabled: true
        })}
        <StoryDocsLabel>Loading</StoryDocsLabel>
        {getIconButtons({
          buttonType: 'icon-round',
          preloader: true
        })}

        <StoryDocsH3>White Button</StoryDocsH3>

        <StoryDocsLabel>Default</StoryDocsLabel>
        {getButtons({ buttonType: 'white' })}
        <StoryDocsLabel>Disabled</StoryDocsLabel>
        {getButtons({
          buttonType: 'white',
          disabled: true
        })}
        <StoryDocsLabel>Loading</StoryDocsLabel>
        {getButtons({
          buttonType: 'white',
          preloader: true
        })}
      </div>
      <div style={{
        display: 'grid',
        gap: '40px',
        gridTemplateColumns: 'repeat(3, auto)',
        justifyItems: 'center',
        width: 'max-content'
      }}>
        <StoryDocsH3>Text Button</StoryDocsH3>

        <StoryDocsLabel>Default</StoryDocsLabel>
        <Button buttonType={'text'} size='xl'>Button 56</Button>
        <Button buttonType={'text'} size='s'>Button 32</Button>
        <StoryDocsLabel>Disabled</StoryDocsLabel>
        <Button buttonType={'text'} disabled size='xl'>Button 56</Button>
        <Button buttonType={'text'} disabled size='s'>Button 32</Button>
        <StoryDocsLabel>Loading</StoryDocsLabel>
        <Button buttonType={'text'} preloader size='xl'>Button 56</Button>
        <Button buttonType={'text'} preloader size='s'>Button 32</Button>

        <StoryDocsH3>Text Icon Button</StoryDocsH3>

        <StoryDocsLabel>Default</StoryDocsLabel>
        <Button size='xl' buttonType='text' startAdornment={<AllAdd size='s' />}>Text button 56</Button>
        <Button size='s' buttonType='text' startAdornment={<AllAdd size='xxs' />}>Text button 32</Button>
      </div>
    </StoryDocs>
  );
};

Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Tl0AmqQJK4qaCl4pLRio7A/Design-System-for-Story-Book?node-id=4%3A4233',
  },
  actions: { disabled: true },
  controls: { disabled: true }
};

export const Playground: Story = (args: IButtonProps) => {
  const buttonType = args.buttonType === 'icon' || args.buttonType === 'iconFill' ? 'primary' : args.buttonType;
  const adornment = args.size === 's' ? <AllIconPlace size='xxs' /> : <AllIconPlace size='m' />;

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
