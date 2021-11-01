import React from 'react';
import { render, screen } from '@testing-library/react';
import OrgTree from './OrgTree';

import { list } from './list'
describe('Test <OrgTree/> component', () => {
  it('should render OrgTree component', () => {
    const { container } = render(<OrgTree list={list} />);

    expect(container.getElementsByClassName('rf-tree')).not.toHaveLength(0);
  });

  it('should render OrgTree component with activeOption ', () => {
    const { container } = render(<OrgTree list={list} activeOption={{
      value: '0',
      label: 'ВТБ ПАО',
      children: [],
    }} />);

    expect(container.getElementsByClassName('rf-tree__item--active-label')).toHaveLength(1)
  });

  it('should render OrgTree component open=true', () => {
    const { container } = render(<OrgTree list={list} />);

    expect(container.getElementsByClassName('rf-tree__item--open')).not.toHaveLength(0);
  });

});
