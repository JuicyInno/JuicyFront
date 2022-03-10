import React, { useState } from 'react';
import { Story } from '@storybook/react';

import StoryRow from '../../storybook/StoryRow';
import Feedback, { FeedbackData } from './Feedback';
import StoryContainer from '../../storybook/Story';
import { BrowserRouter } from 'react-router-dom';
import Button from '../../atoms/Button';

import axios from 'axios';

import createPostFeedback from './createPostFeedback';

export default {
  title: 'popovers/withTest/Feedback',
  component: Feedback,
};

const request = axios.create({ baseURL: 'https://sapd-fes-ap01.vtb24.ru:44310/' });

const postFeedback = async (data: Partial<FeedbackData>) => {
  const mockuser = {
    email: 'MMBEZRUKOVA@VTB.RU',
    userId: '000000000147985',
    userName: 'Вершинин Александр',
    photo: '/sap/opu/odata4/sap/zhrbc/default/sap/zhrbc_0720_react_utils/0001/IUserPhoto(\'00147985\')/content',
    userPosition: 'Начальник департамента',
    userDepartment: 'Отдел развития персонала'
  };
  const mockProjectId = 2;
  const resData = {
    ...data,
    ...mockuser,
    projectId: mockProjectId
  } as FeedbackData;

  await createPostFeedback(request)(resData);
};

export const Demo = () => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <BrowserRouter>
      <StoryContainer name='Feedback'>
        <Button onClick={() => setVisible(true)}>Открыть</Button>

        {
          visible &&
          <Feedback
            postFeedback={postFeedback}
            onClose={() => setVisible(false)}
          />
        }
      </StoryContainer>
    </BrowserRouter>
  );
};

export const Playground: Story = (args) => {
  return (
    <BrowserRouter>
      <StoryContainer>
        <StoryRow>
          <Feedback postFeedback={postFeedback} {...args} />
        </StoryRow>
      </StoryContainer>
    </BrowserRouter>
  );
};

Playground.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Tl0AmqQJK4qaCl4pLRio7A/Design-System-for-Story-Book?node-id=2948%3A40979',
  },
};
