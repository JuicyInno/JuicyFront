import React, { useState } from 'react';
import { Story } from '@storybook/react';
import Chip from '../Chip/index';
import ImagePreview from './ImagePreview';
import {
  StoryDocs, StoryDocsH1, StoryDocsH2
} from '../../storybook';
import StoryContainer from '../../storybook/Story';
import StoryRow from '../../storybook/StoryRow';

export default {
  title: 'controls/withTest/ImagePreview',
  component: ImagePreview,
  argTypes: {}
};

const mockList = [
  'https://klike.net/uploads/posts/2019-05/1556708032_1.jpg',
  'https://bipbap.ru/wp-content/uploads/2017/07/1-campos-amapolas.jpg',
  'https://24tv.ua/resources/photos/news/1200x675_DIR/202105/1619997.jpg',
  'https://www.ejin.ru/wp-content/uploads/2017/09/1-931.jpg',
  'https://oir.mobi/uploads/posts/2021-06/1623810332_31-oir_mobi-p-samie-krasivie-letnie-peizazhi-priroda-kra-31.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFs-VLqsAoid2QHok8-KYgJ-VXX1ufdUD6dCmYP3Cc7zw6MRrGftd3ASrlwQO9oh9AfPo&usqp=CAU',
  'https://cs8.pikabu.ru/post_img/big/2018/04/20/10/1524246614168232071.jpg',
  'https://cs9.pikabu.ru/post_img/big/2018/04/20/10/152424661518614873.jpg',
  'https://oir.mobi/uploads/posts/2021-06/thumbs/1623387620_30-oir_mobi-p-temnii-peizazh-priroda-krasivo-foto-35.jpg',
  'https://bipbap.ru/wp-content/uploads/2017/09/50dca6763731640fb4fa59a302daf612.jpg',
  'https://bipbap.ru/wp-content/uploads/2017/07/morskie_peyzagi_krasivie_plyagi_foto_12.jpg',
  'https://secretmag.ru/thumb/1280x720/filters:quality(75)/imgs/2021/11/02/12/4999384/d53776b3b010f6c92bdf3e0d7946b938aabd8c08.webp',
  'https://www.ixbt.com/img/n1/news/2021/10/2/22459ff25f8eff76bddf34124cc2c85b16f4cd4a_large.jpg',
  'https://uprostim.com/wp-content/uploads/2021/01/image165-15.jpg'
];

export const Demo: Story = (args: any) => {

  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  const mockList2 = [...mockList];
  mockList2.length = 5;


  return (
    <StoryDocs >
      <StoryDocsH1>Image Preview List of Pictures</StoryDocsH1>
      <div>
        <Chip onClick={() => setToggle(!toggle)}>
          Список картинок
        </Chip>
        {toggle && < ImagePreview onClose={() => setToggle(false)} imageList={mockList} />}
      </div>
      <StoryDocsH2>Image Preview Single Pictures</StoryDocsH2>
      <div>
        <Chip onClick={() => setToggle2(!toggle2)}>
          Картинка
        </Chip>
        {toggle2 && < ImagePreview onClose={() => setToggle2(false)} imageList={['https://uprostim.com/wp-content/uploads/2021/01/image165-15.jpg']} />}
      </div>
      <StoryDocsH2>Image Preview less than 10 Images</StoryDocsH2>

      <div>
        <Chip onClick={() => setToggle3(!toggle3)}>
          Картинка
        </Chip>
        {toggle3 && < ImagePreview onClose={() => setToggle3(false)} imageList={mockList2} />}
      </div>
    </StoryDocs >
  );
};

export const Playground: Story = (args: any) => {
  const [toggle2, setToggle2] = useState(false);
  return (
    <StoryContainer>
      <StoryDocsH2>Image Preview Single Pictures</StoryDocsH2>
      <StoryRow>

        <Chip onClick={() => setToggle2(!toggle2)}>
          Картинка
        </Chip>
        {toggle2 && < ImagePreview onClose={() => setToggle2(false)} imageList={['https://uprostim.com/wp-content/uploads/2021/01/image165-15.jpg']} />}
      </StoryRow>
    </StoryContainer>
  );
};

Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/gDl8sDPM8Zmh5ol4ywzLrj/%D0%93%D0%91%D0%9B%2F%D0%92%D0%BD%D1%83%D1%82%D1%80%D0%B8%D0%B1%D0%B0%D0%BD%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B5-%D0%BA%D0%B0%D0%BD%D0%B0%D0%BB%D1%8B%2FUi-Home?node-id=24130%3A183221',
  },

};
Playground.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/gDl8sDPM8Zmh5ol4ywzLrj/%D0%93%D0%91%D0%9B%2F%D0%92%D0%BD%D1%83%D1%82%D1%80%D0%B8%D0%B1%D0%B0%D0%BD%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B5-%D0%BA%D0%B0%D0%BD%D0%B0%D0%BB%D1%8B%2FUi-Home?node-id=24130%3A183221',
  },
};
