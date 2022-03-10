import React from 'react';
import { Story } from '@storybook/react';
import { StoryDocs, StoryDocsH1 } from '../../storybook';
import StoryContainer from '../../storybook/Story';
import StoryRow from '../../storybook/StoryRow';
import { withDesign } from 'storybook-addon-designs';
import TextCollapse from './TextCollapse';

export default {
  title: 'components/withTest/TextCollapse',
  component: TextCollapse,
  decorators: [withDesign],
  argTypes: {}
};

export const Demo: Story = () => {
  return (
    <StoryDocs>
      <StoryDocsH1>TextCollapse</StoryDocsH1>

      <TextCollapse>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae impedit tempora enim cupiditate illo,
         dolore in pariatur facere corporis cumque veritatis voluptates ad quo quod totam cum, perferendis porro natus
         rem sit reprehenderit. Quis atque, ipsam perferendis asperiores quasi quae blanditiis aliquam harum similique.
         Impedit, odit. Consequatur laudantium cumque veniam qui maxime eos vitae dolorum reprehenderit.
         Ratione dolorum dolores repellat ipsum, quo architecto aperiam iusto blanditiis? Fugit error accusantium dolore vel suscipit?
         Eos, tempore! Reprehenderit velit, minima voluptas numquam tempora quos sunt obcaecati quae ad, tempore error rerum mollitia
         voluptatem. Beatae est perferendis earum facilis eaque iusto, architecto soluta, accusantium sapiente nihil molestias
         rem repudiandae, quibusdam ipsa molestiae nemo! In assumenda nesciunt eos blanditiis quaerat provident obcaecati possimus
         sit deleniti, ad similique distinctio nostrum tenetur sed, quos voluptatem omnis vero, a et nihil? Velit quis,
         inventore facere veritatis ipsa aliquid fugiat deleniti ipsum aspernatur qui officiis quia sit vel quisquam ullam atque esse
         nesciunt id voluptates dicta labore accusantium quidem sint. Dolorum eveniet vero in ipsa quia dolore sapiente nesciunt,
         alias quo, temporibus distinctio odit, eius itaque reprehenderit dolores culpa? Necessitatibus obcaecati exercitationem
          qui est quasi voluptas tempore possimus voluptates veritatis ut voluptatibus magnam, quod, suscipit cum eius nesciunt
          perspiciatis, vitae commodi blanditiis esse fugit numquam. Eaque odit animi ex. Voluptatem, temporibus iste labore
          laboriosam fuga nisi! Aspernatur rem consectetur aut dicta nisi ad voluptates, eos illum. Consequatur iste minima unde
          iure possimus, necessitatibus, eum ex illum corporis esse quaerat. Maxime delectus possimus tenetur placeat quis rerum
          atque eligendi quo harum sed, quae necessitatibus quos corporis beatae laudantium similique dolorum ea hic recusandae
          voluptate nulla suscipit vitae? Tenetur nostrum iusto exercitationem iste temporibus quaerat voluptatum? Molestiae,
          quam accusamus quos amet enim non impedit dicta debitis neque. Consequatur rem necessitatibus, doloribus tempore fugiat
          numquam dolorem atque quaerat nam autem possimus dolores hic voluptate repellendus reprehenderit voluptatum ad nemo.
          Ipsa dolor facilis optio temporibus nisi amet ullam odio accusantium vero sequi. Nobis, dolor! Tempore exercitationem
          illum est distinctio assumenda culpa itaque, esse quidem perferendis quaerat? Perspiciatis, commodi doloremque.
      </TextCollapse>

      <br />

      <TextCollapse>Small text</TextCollapse>
    </StoryDocs>
  );
};

Demo.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Tl0AmqQJK4qaCl4pLRio7A/Design-System-for-Story-Book?node-id=3162%3A37697',
  },
  actions: { disabled: true },
  controls: { disabled: true }
};

export const Playground: Story = (args: any) => {
  return (
    <StoryContainer>
      <StoryRow>
        <TextCollapse {...args}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae impedit tempora enim cupiditate illo,
         dolore in pariatur facere corporis cumque veritatis voluptates ad quo quod totam cum, perferendis porro natus
         rem sit reprehenderit. Quis atque, ipsam perferendis asperiores quasi quae blanditiis aliquam harum similique.
         Impedit, odit. Consequatur laudantium cumque veniam qui maxime eos vitae dolorum reprehenderit.
         Ratione dolorum dolores repellat ipsum, quo architecto aperiam iusto blanditiis? Fugit error accusantium dolore vel suscipit?
         Eos, tempore! Reprehenderit velit, minima voluptas numquam tempora quos sunt obcaecati quae ad, tempore error rerum mollitia
         voluptatem. Beatae est perferendis earum facilis eaque iusto, architecto soluta, accusantium sapiente nihil molestias
         rem repudiandae, quibusdam ipsa molestiae nemo! In assumenda nesciunt eos blanditiis quaerat provident obcaecati possimus
         sit deleniti, ad similique distinctio nostrum tenetur sed, quos voluptatem omnis vero, a et nihil? Velit quis,
         inventore facere veritatis ipsa aliquid fugiat deleniti ipsum aspernatur qui officiis quia sit vel quisquam ullam atque esse
         nesciunt id voluptates dicta labore accusantium quidem sint. Dolorum eveniet vero in ipsa quia dolore sapiente nesciunt,
         alias quo, temporibus distinctio odit, eius itaque reprehenderit dolores culpa? Necessitatibus obcaecati exercitationem
          qui est quasi voluptas tempore possimus voluptates veritatis ut voluptatibus magnam, quod, suscipit cum eius nesciunt
        </TextCollapse>
      </StoryRow>
    </StoryContainer>
  );
};
