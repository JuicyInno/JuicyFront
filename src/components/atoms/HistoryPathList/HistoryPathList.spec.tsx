import React from 'react';
import {render} from '@testing-library/react';
import HistoryPathList from "./HistoryPathList";
import {pathsHistory} from "../../molecules/History/mock";

describe('Test <History/> component', () => {
  it('should render HistoryPathList', () => {
    const {container} = render(<HistoryPathList path={pathsHistory} />);
    expect(container.querySelectorAll('.rf-history-path-list__history-element')).toHaveLength(5);
  })

  it('should render HistoryPathList on mini mode', () => {
    const {container} = render(<HistoryPathList path={pathsHistory} isMinimal />);
    expect(container.querySelectorAll('.rf-history-sidebar__details--minimal')).toHaveLength(5);
  })
})
