import React from 'react';
import { render } from '@testing-library/react';
import ImagePreview from './ImagePreview';

describe('Test <ImagePreview/> component', () => {
  it('should work as uncontrolled component', () => {
    const { container } = render(<ImagePreview imageList={['https://uprostim.com/wp-content/uploads/2021/01/image165-15.jpg']} onClose={() => { }} />);
    expect(document.getElementsByClassName('rf-image-preview')).toHaveLength(1)
  });
});
