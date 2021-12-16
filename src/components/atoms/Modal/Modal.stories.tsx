import { Story } from '@storybook/react';
import React, { useState } from 'react';
import { withDesign } from 'storybook-addon-designs';
import Modal, { ModalSize } from './Modal';
import { Button } from '../../../index';
import StoryContainer from '../../storybook/Story';
import StoryItem from '../../storybook/StoryItem';
import StoryCol from '../../storybook/StoryCol';
import StoryRow from '../../storybook/StoryRow';
import { StoryDocs, StoryDocsH1 } from '../../storybook';


export default {
  title: 'popovers/withTest/Modal',
  component: Modal,
  decorators: [withDesign],
  argTypes: {
    header: { control: null },
    footer: { control: null },
    children: { control: null }
  }
};

const ModalFooter = ({ toggle }: { toggle: (value: boolean) => void }) => (
  <StoryRow>
    <StoryCol>
      <Button size='l'>Согласен</Button>
    </StoryCol>
    <StoryCol>
      <Button buttonType='ghost' onClick={() => toggle(false)} size='l'>Отмена</Button>
    </StoryCol>
  </StoryRow>
);

export const Demo = () => {
  const [show, setShow] = useState(false);
  const [showCustom, setShowCustom] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  const [showDrawerCustom, setShowDrawerCustom] = useState(false);
  const [showShowSizeModal, setShowSizeModal] = useState<ModalSize | undefined>();

  return (
    <StoryDocs>
      <StoryDocsH1>Modal</StoryDocsH1>

      <StoryItem description={<>variant <strong>modal</strong></>}>
        <StoryRow>
          <StoryCol>
            <Button onClick={() => setShow(true)}>Открыть Modal</Button>
          </StoryCol>

          <StoryCol>
            <Button onClick={() => setShowCustom(true)}>Открыть Modal (custom)</Button>
          </StoryCol>
        </StoryRow>
      </StoryItem>

      <StoryItem description={<>variant <strong>drawer</strong></>}>
        <StoryRow>
          <StoryCol>
            <Button onClick={() => setShowDrawer(true)}>Открыть Drawer</Button>
          </StoryCol>
          <StoryCol>
            <Button onClick={() => setShowDrawerCustom(true)}>Открыть Drawer (custom)</Button>
          </StoryCol>
        </StoryRow>
      </StoryItem>

      <StoryItem description={<>size <strong>modal</strong></>}>
        <StoryRow>
          <StoryCol>
            <Button onClick={() => setShowSizeModal('s')}>Открыть Modal (size S)</Button>
          </StoryCol>
          <StoryCol>
            <Button onClick={() => setShowSizeModal('m')}>Открыть Modal (size M)</Button>
          </StoryCol>
          <StoryCol>
            <Button onClick={() => setShowSizeModal('l')}>Открыть Modal (size L)</Button>
          </StoryCol>
          <StoryCol>
            <Button onClick={() => setShowSizeModal('xl')}>Открыть Modal (size XL)</Button>
          </StoryCol>
        </StoryRow>
      </StoryItem>

      {show && (
        <Modal onClose={() => setShow(false)} header='Header' footer={<ModalFooter toggle={setShow} />}>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequatur ea laudantium nihil nisi quos
            soluta
            veritatis? Ad aliquid doloribus esse fugiat minus officiis perferendis praesentium, qui quis quos!
            Eligendi
            error exercitationem fuga fugiat illum impedit pariatur placeat quam similique unde. Alias amet aut autem
            dolor hic illum qui sit.
          </div>
        </Modal>
      )}

      {showCustom && (
        <Modal custom onClose={() => setShowCustom(false)}>
          <div style={{
            minWidth: '400px',
            maxWidth: '600px'
          }}>
            <div style={{ padding: '20px 40px' }}>
              <h3 style={{ marginBottom: '20px' }}>Custom title</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repellendus dolor asperiores quo obcaecati mollitia voluptatem odit inventore? Minima sunt nostrum,
                velit ipsam dolore perspiciatis hic deserunt quidem iste sint eaque ab iure facilis esse nihil accusantium ad
                ipsum error beatae mollitia repudiandae quasi dolorum minus! Vel impedit iste vero asperiores officiis,
                sit aliquid maiores, tempore ipsum alias voluptatibus similique quidem eius? Repudiandae modi architecto aperiam
                labore sed perferendis, ad alias quisquam maiores tenetur laudantium, numquam mollitia dignissimos commodi repellendus
                tempora animi quod doloribus! Omnis minus autem earum dolore odio, quam sint adipisci consectetur sit modi ipsum, id,
                illo esse corrupti?
              </p>
            </div>

            <div style={{ padding: '10px 40px 20px' }}>
              <ModalFooter toggle={setShowCustom} />
            </div>
          </div>
        </Modal>
      )}

      {showDrawer && (
        <Modal
          onClose={() => setShowDrawer(false)}
          variant='drawer'
          header={<div>header</div>}
          footer={<ModalFooter toggle={setShowDrawer} />}
        >
          <div style={{ width: '500px' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequatur ea laudantium nihil nisi quos
            soluta
            veritatis? Ad aliquid doloribus esse fugiat minus officiis perferendis praesentium, qui quis quos!
            Eligendi
            error exercitationem fuga fugiat illum impedit pariatur placeat quam similique unde. Alias amet aut autem
            dolor hic illum qui sit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur odio libero quasi nemo, eum delectus obcaecati autem?
            Eum, placeat ullam rerum et velit enim tempore doloremque? Reiciendis, maiores? Temporibus, aliquam?
            Eligendi
            error exercitationem fuga fugiat illum impedit pariatur placeat quam similique unde. Alias amet aut autem
            dolor hic illum qui sit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur odio libero quasi nemo, eum delectus obcaecati autem?
            Eum, placeat ullam rerum et velit enim tempore doloremque? Reiciendis, maiores? Temporibus, aliquam?
            Eligendi
            error exercitationem fuga fugiat illum impedit pariatur placeat quam similique unde. Alias amet aut autem
            dolor hic illum qui sit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur odio libero quasi nemo, eum delectus obcaecati autem?
            Eum, placeat ullam rerum et velit enim tempore doloremque? Reiciendis, maiores? Temporibus, aliquam?
            Eligendi
            error exercitationem fuga fugiat illum impedit pariatur placeat quam similique unde. Alias amet aut autem
            dolor hic illum qui sit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur odio libero quasi nemo, eum delectus obcaecati autem?
            Eum, placeat ullam rerum et velit enim tempore doloremque? Reiciendis, maiores? Temporibus, aliquam?
          </div>
        </Modal>
      )}

      {showDrawerCustom && (
        <Modal
          onClose={() => setShowDrawerCustom(false)}
          variant='drawer'
          custom
        >
          <div style={{ padding: '20px' }}>
            <p style={{ marginBottom: '20px' }}>custom drawer content</p>

            <Button onClick={() => setShowDrawerCustom(false)} size='l'>Закрыть</Button>
          </div>
        </Modal>
      )}


      {showShowSizeModal !== undefined && (
        <Modal size={showShowSizeModal} header='header' onClose={() => setShowSizeModal(undefined)}>
          <div>
            hello modal size <strong>{showShowSizeModal}</strong>
          </div>
        </Modal>
      )}
    </StoryDocs>
  );
};


export const Playground: Story = (args) => {
  const [show, toggle] = useState(false);

  return (
    <StoryContainer>
      <StoryItem description='Модальное окно открывается поверх страницы.'>
        <Button onClick={ () => toggle(true) }>Открыть</Button>

        {show && (
          <Modal {...args} header='Header' footer={ <ModalFooter toggle={toggle} /> } onClose={ () => toggle(false) }>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequatur ea laudantium nihil nisi quos
              soluta
              veritatis? Ad aliquid doloribus esse fugiat minus officiis perferendis praesentium, qui quis quos!
              Eligendi
              error exercitationem fuga fugiat illum impedit pariatur placeat quam similique unde. Alias amet aut autem
              dolor hic illum qui sit.
            </div>
          </Modal>
        )}
      </StoryItem>
    </StoryContainer>
  );
};

Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Tl0AmqQJK4qaCl4pLRio7A/Design-System-for-Story-Book?node-id=1032%3A24809',
  },
};
