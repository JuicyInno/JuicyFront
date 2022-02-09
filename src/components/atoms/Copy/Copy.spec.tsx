import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Copy from './Copy';

describe('Test <Copy /> component', () => {
  Object.assign(window.navigator, {
    clipboard: {
      writeText: jest.fn().mockImplementation(() => Promise.resolve()),
    },
  });

  it('should be rendered', async () => {
    const { container } = render(<Copy tooltipLabel='tooltipLabel' copyMessage='copyMessage' successCopyMessage='successCopyMessage' />);
    
    const element = container.getElementsByClassName('rf-copy__icon').item(0);

    if (!element) {
      fail('Нет элемента');
    }

    fireEvent.mouseOver(element);

    await waitFor(() => {
      expect(screen.getByText('tooltipLabel')).toBeInTheDocument();
    });

    fireEvent.click(element);

    await waitFor(() => {
      expect(window.navigator.clipboard.writeText).toHaveBeenCalledWith('copyMessage');
      expect(screen.getByText('successCopyMessage')).toBeInTheDocument();
    });
  });


  it('should be disabled', async () => {
    const { container } = render(<Copy tooltipLabel='tooltipLabel' copyMessage='copyMessage' successCopyMessage='successCopyMessage' disabled />);
    
    expect(container.getElementsByClassName('rf-copy--disabled')).toHaveLength(1);
  });
});
