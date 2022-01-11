import Story from '../../storybook/Story';
import StoryItem from '../../storybook/StoryItem';
import React from 'react';

import Signification, { ISignifyCallback } from './Signification';
import { IRequestAttachment } from '../../../types/projects.types';
import { pdfFile } from '../../molecules/PDFViewer/pdf';
import './story.scss';
import { withDesign } from 'storybook-addon-designs';

const file:IRequestAttachment = {
  fileName: 'test',
  base64: pdfFile
};

export default {
  title: 'components/withTest/Signification',
  component: Signification,
  decorators: [withDesign],
  argTypes: {
    data: { control: null },
    documentInfo: { control: null },
    title: { type: 'string' },
    isSpoiler: { type: 'boolean' }
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
  return <div className='story-sign__wrapper'>
    <Story name='Подписание документов' description='Подписание документов с использованием цифровой (КЭП) или ручной
     подписи. После выбора того или иного способа подписания отображается соответствующая подсказка '>
      <StoryItem>
        <Signification
          onSignify={response}
          isSpoiler={false}
          hideButtons={['reject', 'rejectManual']}
          buttonCustomTexts={{
            sign: 'Подписать электронной подписью',
            manual: 'Подписать вручную',
          }}
          data={file}
          pdfUrl={'yandex.ru'}
          title='Приказ №384848483 от 30.08.2021'/>
      </StoryItem>
    </Story>
    <Story name='Подписание счетов' description='Подписание счетов с использованием цифровой (КЭП) подписи.
    Документ можно отклонить. В результате того или иного действия появляется соответствующая подсказка.'>
      <StoryItem>
        <Signification
          onSignify={response}
          data={file}
          hideButtons={['manual']}
          documentInfo={docInfo}
          title='Счет №SVTB2060_22 от 30.08.2021'
        />
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
    <Story name='Вариант карточки без теней'>
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
          title='Счет №SVTB2060_22 от 30.08.2021'
          variant='border'
        />
      </StoryItem>
    </Story>
  </div>;
};
Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Tl0AmqQJK4qaCl4pLRio7A/Design-System-for-Story-Book?node-id=15%3A16731'
  },
  actions: { disabled: true },
  controls: { disabled: true }
};

// export const playground = (args: IProps) => {
//   console.log('!!!!');
//   return <div className='story-sign__wrapper'>
//     <Story name='Подписание документов' description='Подписание документов с использованием цифровой (КЭП) или ручной
//      подписи. После выбора того или иного способа подписания отображается соответствующая подсказка '>
//       <StoryItem>
//         <Signification
//           {...args}
//           data={file}
//         />
//       </StoryItem>
//     </Story>
//
//   </div>;
// };
