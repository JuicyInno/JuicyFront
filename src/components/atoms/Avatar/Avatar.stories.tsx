import React from 'react';
import Avatar from './Avatar';
import Story from '../../storybook/Story';
import StoryItem from '../../storybook/StoryItem';
import { usersMocks } from '../../popups/FindUsers/users.mocks';

export default {
  title: 'components/не проверено/Avatar',
  component: Avatar,
};

const sizes = [
  'xxs',
  'xs',
  's',
  'm',
  'l',
  'xl',
  'xxl',
  'xxxl',
  'xxxxl'
];

export const avatar = () => {

  return (
    <Story name='Аватар' description='Аватар пользователя'>
      <StoryItem subtitle='Main component' description='Основной компонент который исполюзуется в макетах'>
        <div style={{
          display: 'flex',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            top: 30,
            left: -15,
            width: 725,
            height: 115,
            border: '1px dashed #8A96A8',
            borderRadius: 5
          }} />
          {sizes.map((size: any) =>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              marginRight: 32
            }}>
              <div style={{
                fontSize: 12,
                marginBottom: 32,
                fontFamily: 'VTB Group UI',
                lineHeight: '16px',
                textAlign: 'center',
                color: '#626F84'
              }}>{size}</div>
              <div><Avatar fullName='K M' size={size} hasIcon /></div>
            </div>)
          }
        </div>
      </StoryItem>
      <StoryItem subtitle='Source' description='Компоненты которые переключаются внутри основного компонента'>
        <div style={{ display: 'flex' }}>
          <div style={{ marginRight: 8 }}><Avatar fullName='Н M' size='xs' photo={usersMocks[0].photo} /></div>
          <div style={{ marginRight: 8 }}><Avatar fullName='Н M' size='xs' hasIcon /></div>
          <div style={{ marginRight: 8 }}><Avatar fullName='Н M' size='xs' backgroundColor='white' /></div>
          <div style={{ marginRight: 8 }}><Avatar fullName='Н M' size='xs' /></div>
          <div style={{ marginRight: 8 }}><Avatar fullName='Н M' size='xs' backgroundColor='grey' /></div>
          <div style={{ marginRight: 8 }}><Avatar fullName='Н M' size='xs' backgroundColor='black' /></div>
        </div>
      </StoryItem>
      <StoryItem subtitle='Scale text' description='Допускается использование одной или двух букв для обозначения пользователя (в размере XXS, XS только одна буква).'>
        <div style={{
          display: 'flex',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            top: 30,
            left: -15,
            width: 725,
            height: 115,
            border: '1px dashed #8A96A8',
            borderRadius: 5
          }} />
          {sizes.map((size: any) =>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              marginRight: 32
            }}>
              <div style={{
                fontSize: 12,
                marginBottom: 32,
                fontFamily: 'VTB Group UI',
                lineHeight: '16px',
                textAlign: 'center',
                color: '#626F84'
              }}>{size}</div>
              <div><Avatar fullName='Н С' size={size} /></div>
            </div>)
          }
        </div>
      </StoryItem>
    </Story>
  );
};
