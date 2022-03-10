import React from 'react';
import { render, screen } from '@testing-library/react';
import TextCollapse from './TextCollapse';

const _text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quibusdam necessitatibus doloribus maiores? Quas, eos alias! Non vitae, veritatis quas, quae ab, recusandae nostrum vel culpa quasi dicta repellat magnam ullam perspiciatis odit dolor doloremque debitis est minima adipisci quibusdam a cumque molestias? Optio eligendi earum necessitatibus aperiam ipsam quisquam ullam magni quia dignissimos nostrum, soluta cupiditate, reiciendis iusto perspiciatis harum eos! Voluptate sapiente, atque exercitationem voluptatibus, delectus cumque placeat nobis harum quibusdam repellendus unde corrupti maxime ipsam quod dolorum blanditiis minus nam inventore vero rerum natus obcaecati! Accusantium mollitia molestiae reprehenderit minus aliquid. Beatae natus nisi provident ratione voluptates?';

describe('Test <TextCollapse /> component', () => {
  it('should render TextCollapse', () => {
    render(
      <div style={{ maxWidth: '100px' }}>
        <TextCollapse row={1}>{_text}</TextCollapse>
      </div>
    );
    expect(screen.getByText(_text)).toBeInTheDocument();
  });
});
