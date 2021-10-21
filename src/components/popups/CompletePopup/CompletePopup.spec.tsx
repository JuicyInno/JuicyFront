import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CompletePopup from './CompletePopup';
import { Button } from '../../..';

describe('Test <CompletePopup /> component', () => {
  it('should have label and description', () => {
    const { container } = render(<CompletePopup label='Complete popup' description='description' onClose={jest.fn} />);

    expect(screen.getByText('Complete popup')).toBeInTheDocument();
    expect(screen.getByText('description')).toBeInTheDocument();
    expect(container.getElementsByClassName('rf-complete-popup__icon--success')).toHaveLength(1);
  });

  it('should allow icon close', () => {
    const { container } = render(<CompletePopup label='Complete popup' description='desc' icon='close' onClose={jest.fn} />);

    expect(container.getElementsByClassName('rf-complete-popup__icon--close')).toHaveLength(1);
  });

  it('should allow icon success', () => {
    const { container } = render(<CompletePopup label='Complete popup' description='desc' icon='success' onClose={jest.fn} />);

    expect(container.getElementsByClassName('rf-complete-popup__icon--success')).toHaveLength(1);
  });

  it('should allow icon trash', () => {
    const { container } = render(<CompletePopup label='Complete popup' description='desc' icon='trash' onClose={jest.fn} />);

    expect(container.getElementsByClassName('rf-complete-popup__icon--trash')).toHaveLength(1);
  });

  it('should allow icon return', () => {
    const { container } = render(<CompletePopup label='Complete popup' description='desc' icon='return' onClose={jest.fn} />);

    expect(container.getElementsByClassName('rf-complete-popup__icon--return')).toHaveLength(1);
  });

  it('should allow icon refresh', () => {
    const { container } = render(<CompletePopup label='Complete popup' description='desc' icon='refresh' onClose={jest.fn} />);

    expect(container.getElementsByClassName('rf-complete-popup__icon--refresh')).toHaveLength(1);
  });

  it('should call onClose', () => {
    const handleClose = jest.fn();
    render(<CompletePopup label='Complete popup' description='desc' onClose={handleClose} />);

    fireEvent.click(screen.getByRole('button'));

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('should substituted buttons', () => {
    const { container } = render(
      <CompletePopup
        label='Complete popup'
        description='desc'
        buttons={
          <div className='buttons-test'>
            <Button fullWidth buttonType='light' onClick={jest.fn}>
              Закрыть
            </Button>
          </div>
        }
      />
    );

    expect(container.getElementsByClassName('buttons-test')).toHaveLength(1);
  });
});
