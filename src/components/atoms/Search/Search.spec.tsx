import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import { Microphone } from '../../../index';
import Search from './Search';
import { IDebounceResult } from '../../../types/projects.types';
import { byTestId } from 'testing-library-selector';
import userEvent from '@testing-library/user-event';

describe('Test <Search/> component', () => {
  it('should render component', () => {
    const { container } = render(<Search/>);
    
    expect(container.getElementsByClassName('rf-search__input')).toHaveLength(1);
  });
  
  it('should render component with clear icon ', () => {
    const { container } = render(<Search showClear value="test"/>);
    
    expect(container.getElementsByClassName('rf-search__close-icon')).toHaveLength(1);
  });
  
  it('should render component without clear icon ', () => {
    const { container } = render(<Search showClear={ false } value="test"/>);
    
    expect(container.getElementsByClassName('rf-search__close-icon')).toHaveLength(0);
  });
  
  it('should render component with endAdornment ', () => {
    const { container } = render(<Search endAdornment={ <Microphone className="test-classname"/> }/>);
    
    expect(container.getElementsByClassName('test-classname')).toHaveLength(1);
  });
  
  it('should have 1 second debounce', async () => {
    let str = '';
    const onDebounce = (result: IDebounceResult) => {
      console.log('Debounce worked');
      str = result.debounceString;
    };
    
    render(<Search debounce={ 1000 } onDebounce={ onDebounce }/>);
    userEvent.type(byTestId('search-test-id').get(), 'TEST');
    expect(str).toBe('');
    
    await waitFor(() => {
      expect(str).toBe('TEST');
    });
  });
});
