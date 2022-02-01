import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { byText } from "testing-library-selector";

import { initialFiles } from '../../../utils/helpers';
import Attachment from './Attachment';

describe('Test <Attachment /> component', () => {
  it('should render InputFile component', () => {
    const { container } = render(<Attachment attachment={initialFiles[0]} />);

    expect(container.getElementsByClassName('rf-chip__icon')).toHaveLength(1);

    expect(byText("screenshot1.jpg").get()).toBeInTheDocument();
  });

  it('should pass className', () => {
    const { container } = render(<Attachment attachment={initialFiles[0]} className="className" />);

    expect(container.getElementsByClassName('className')).toHaveLength(1);
  });

  it('should pass showRemoveIcon = false', () => {
    const { container } = render(<Attachment attachment={initialFiles[0]} showRemoveIcon={false} />);

    expect(container.getElementsByClassName('rf-chip__icon')).toHaveLength(0);
  });

  it('should be call onRemove', () => {
    const onRemove = jest.fn();
    const { container } = render(<Attachment attachment={initialFiles[0]} onRemove={onRemove} />);

    const removeItem = container.getElementsByClassName('rf-chip__icon').item(0);

    if (!removeItem) {
      fail('Нет элемента');
    }

    fireEvent.click(removeItem);

    expect(onRemove).toBeCalled();
  });
});
