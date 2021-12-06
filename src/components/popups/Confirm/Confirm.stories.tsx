import React from 'react';
import Confirm from './Confirm';
import Story from '../../storybook/Story';
import { Modal } from '../../../index';

export default {
  title: 'popovers/не проверено/Confirm',
  component: Confirm
};

export const confirm = () => {

  const onAction = (comment?: string) => {
    console.log(comment);
  };

  return (
    <Story name='Изображение пользователя'>
      <Modal>
        <Confirm textAccept='Согласен'
          isCrossCloseButton={true}
          text='Вы согласны на обработку персональных данных?'
          onClose={() => { }} onAction={onAction} comment='Комментарий' showComment />
      </Modal>
    </Story>
  );
};
