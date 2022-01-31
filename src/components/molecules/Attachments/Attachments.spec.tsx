import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { byText } from "testing-library-selector";

import { initialFiles } from '../../../utils/helpers';
import Attachments from './Attachments';

describe('Test <Attachments /> component', () => {
  it('should render InputFile component', () => {
    const { container } = render(<Attachments attachments={initialFiles} />);

    expect(container.getElementsByClassName('rf-attachments__chip')).toHaveLength(4);
    expect(container.getElementsByClassName('rf-chip__icon')).toHaveLength(4);

    expect(byText("screenshot1.jpg").get()).toBeInTheDocument();
    expect(byText("pdfFile.pdf").get()).toBeInTheDocument();
    expect(byText("quston.png").get()).toBeInTheDocument();
    expect(byText("word_file.docx").get()).toBeInTheDocument();
  });

  it('should pass className', () => {
    const { container } = render(<Attachments attachments={initialFiles} className="className" />);

    expect(container.getElementsByClassName('className')).toHaveLength(1);
  });

  it('should pass showRemoveIcon = false', () => {
    const { container } = render(<Attachments attachments={initialFiles} showRemoveIcon={false} />);

    expect(container.getElementsByClassName('rf-chip__icon')).toHaveLength(0);
  });

  it('should be call onRemove', () => {
    const onRemove = jest.fn();
    const { container } = render(<Attachments attachments={initialFiles} onRemove={onRemove} />);

    const removeItem = container.getElementsByClassName('rf-chip__icon').item(0);

    if (!removeItem) {
      fail('Нет элемента');
    }

    fireEvent.click(removeItem);

    expect(onRemove).toBeCalled();
  });
});
