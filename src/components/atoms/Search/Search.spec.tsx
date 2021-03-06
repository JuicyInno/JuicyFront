import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import { AllMicrophone } from '../../../indexIcon';
import Search from './Search';
import { IDebounceResult } from '../../../types/projects.types';
import { byTestId } from 'testing-library-selector';
import userEvent from '@testing-library/user-event';

describe('Test <Search/> component', () => {
  it('should render component', () => {
    const { container } = render(<Search />);

    expect(container.getElementsByClassName('rf-search__input')).toHaveLength(1);
  });

  it('should render component with clear icon ', () => {
    const { container } = render(<Search showClear value="test" />);

    expect(container.getElementsByClassName('rf-search__close-icon')).toHaveLength(1);
  });

  it('should render component without clear icon ', () => {
    const { container } = render(<Search showClear={false} value="test" />);

    expect(container.getElementsByClassName('rf-search__close-icon')).toHaveLength(0);
  });

  it('should render component with endAdornment ', () => {
    const { container } = render(<Search endAdornment={<AllMicrophone className="test-classname" />} />);

    expect(container.getElementsByClassName('test-classname')).toHaveLength(1);
  });

  it('should have 0.5 second debounce', async () => {
    let str = '';
    const onDebounce = (result: IDebounceResult) => {
      /*   console.log('Debounce worked'); */
      str = result.debounceString;
    };

    render(<Search debounce={500} onDebounce={onDebounce} />);
    userEvent.type(byTestId('search-test-id').get(), 'TEST');
    expect(str).toBe('');

    await waitFor(() => {
      expect(str).toBe('TEST');
    });
  });

  it('should call onClear function', () => {
    const onClear = jest.fn();

    render(<Search value='test' onClear={onClear} />);
    userEvent.click(byTestId('search-clear-test-id').get());
    expect(onClear).toBeCalled();
  });

  it('should use pattern for input', () => {
    render(<Search pattern="^[\da-zA-Zа-яА-Я]*$" />);

    const input = screen.getByTestId('search-test-id');

    userEvent.type(input, '123q_QйЙ!@#t');
    expect(input).toHaveDisplayValue('123qQйЙt');
  });
});
