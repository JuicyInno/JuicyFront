import Story from '../../storybook/Story';
import StoryItem from '../../storybook/StoryItem';
import React from 'react';
import Signification, { ISignifyCallback } from './Signification';
import { variants } from '../../../types';
import { IRequestAttachment } from '../../../types/projects.types';
import { pdfFile } from '../../molecules/PDFViewer/pdf';
import './story.scss';
import { withDesign } from 'storybook-addon-designs';
const file:IRequestAttachment = {
  fileName: 'test',
  base64: pdfFile
};

export default {
  title: 'organisms/Подписание документов',
  component: Signification,
  decorators: [withDesign],
  typeArgs: {
    statusColor: {
      options: variants,
      control: { type: 'select' },
      defaultValue: 'default'
    }
  }
};
const response = (data:ISignifyCallback) => {
  console.warn('!!!response:', data);
};
const docInfo = <div className='doc__wrapper'>
  <div className='doc__title'>Тип документа</div>
  <div>Счет на оплату</div>
</div>;

export const Demo = () => {
  return <>
    <Story name='Подписание документов' description='Подписание документов с использованием цифровой (КЭП) или ручной подписи. После выбора того или иного способа подписания отображается соответствующая подсказка '>
      <StoryItem>
        <Signification
          onSignify={response}
          isSpoiler={false}
          hideButtons={['reject']}
          buttonCustomTexts={{ sign: 'котик приложи лапку' }}
          data={file}
          pdfUrl={'yandex.ru'}
          title='Приказ №384848483 от 30.08.2021'/>
      </StoryItem>
    </Story>
    <Story name='Подписание счетов' description='Подписание счетов с использованием цифровой (КЭП) подписи. Документ можно отклонить. В результате того или иного действия появляется соответствующая подсказка.'>
      <StoryItem>
        <Signification
          onSignify={response}
          data={file}
          hideButtons={['manual']}
          documentInfo={docInfo}
          title='Счет №SVTB2060_22 от 30.08.2021' />
      </StoryItem>
    </Story>
    <Story name='Прочий документ' description='Без подписания'>
      <StoryItem>
        <Signification
          onSignify={response}
          data={file}
          hideButtons={[
            'manual',
            'sign',
            'reject',
            'rejectManual'
          ]}
          documentInfo={docInfo}
          title='Счет №SVTB2060_22 от 30.08.2021' />
      </StoryItem>
    </Story>
  </>;
};
export const playground = () => {
  return <>
    <Story name='Подписание документов' description='Подписание документов с использованием цифровой (КЭП) или ручной подписи. После выбора того или иного способа подписания отображается соответствующая подсказка '>
      <StoryItem>
        <Signification
          onSignify={response}
          isSpoiler={false}
          hideButtons={['reject']}
          buttonCustomTexts={{ sign: 'котик приложи лапку' }}
          data={file}
          title='Приказ №384848483 от 30.08.2021'/>
      </StoryItem>
    </Story>

  </>;
};
Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Y86V3oIhkZQ4u27iBuhN0l/Проекты-ВТБ-основной?node-id=18118%3A266418'
  },
  actions: { disabled: true },
  controls: { disabled: true }
};
