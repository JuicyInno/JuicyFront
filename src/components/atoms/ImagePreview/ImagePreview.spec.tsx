import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import ImagePreview from './ImagePreview';


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


describe('Test <ImagePreview/> component', () => {
  it('should work as uncontrolled component', () => {
    const { container } = render(<ImagePreview imageList={['https://uprostim.com/wp-content/uploads/2021/01/image165-15.jpg']} onClose={() => { }} />);
    expect(document.getElementsByClassName('rf-image-preview')).toHaveLength(1)
  });

  it('should change label after click', () => {
    render(<ImagePreview imageList={mockList} onClose={() => { }} />);
    const label = screen.getByTestId('bottom__image--4');
    fireEvent.click(label);
    expect(screen.getByTestId('label-count-test').textContent!.split(' / ')[0].trim()).toBe('5');
  });


  it('should have max 10 bottom image items', () => {
    render(<ImagePreview imageList={mockList} onClose={() => { }} />);
    expect(document.getElementsByClassName('bottom-navigation__item')).toHaveLength(10)
  });

  it('shouldnt have count component', () => {
    render(<ImagePreview imageList={['https://uprostim.com/wp-content/uploads/2021/01/image165-15.jpg']} onClose={() => { }} />);
    expect(document.getElementsByClassName('rf-label-count__component')).toHaveLength(0)
  });

  it('shouldnt have bottom navigation component', () => {
    render(<ImagePreview imageList={['https://uprostim.com/wp-content/uploads/2021/01/image165-15.jpg']} onClose={() => { }} />);
    expect(document.getElementsByClassName('rf-image-preview__bottom-navigation')).toHaveLength(0)
  });

  it('should have count component if list length over than 10', () => {
    render(<ImagePreview imageList={new Array(11).fill('')} onClose={() => { }} />);
    expect(document.getElementsByClassName('rf-label-count__component')).toHaveLength(1)
  });



});
