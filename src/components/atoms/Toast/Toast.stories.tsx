import React, { useState } from 'react';
import Story from '../../storybook/Story';
import Toast from '../../atoms/Toast';
import Button from '../Button';

export const toast = () => {
  const [isVisible, setIsVisible] = useState(false);
  return <Story name='Toast' description='Мини-нотификация'>
    <Toast isVisible={isVisible} setVisibility={setIsVisible}>
      <p>Текст уведомления</p>
    </Toast>
    <Button onClick={() => setIsVisible(true)}>Показать уведомление</Button>
  </Story>;
};

export default {
  title: 'Toast',
  component: Toast
};
