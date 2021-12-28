import React from "react";
import {render, fireEvent} from "@testing-library/react";
import {byTestId} from "testing-library-selector";
import HistorySidebar from "../HistorySidebar";
import {
  pathsHistory,
  pathsHistory1,
  pathHistory20,
  pathsHistory3,
  pathsHistory4,
  pathsHistory5,
  pathHistory6 } from "../HistorySidebar/mock";

describe('Test <HistorySidebar/> component', () => {
  it('should render HistorySidebar in minimal mode', () => {
    const {container} = render(<HistorySidebar history={pathsHistory} />);
    expect(container.getElementsByClassName('rf-history-sidebar')).toHaveLength(1);
  })

  it('should render HistorySidebar in expanded mode', () => {
    const {container} = render(<HistorySidebar history={pathsHistory} />);
    fireEvent.click(byTestId('side-history-button').get());
    expect(container.querySelectorAll('.rf-history-sidebar,.open')).toHaveLength(1);
  })

  it('should render HistorySidebar with last 4 steps when all done', () => {
    const {container} = render(<HistorySidebar history={pathsHistory1} />);
    expect(container.querySelectorAll('.rf-history-path-list__history-element')).toHaveLength(4);
  })

  it('should render HistorySidebar with first 4 steps in the beginning', () => {
    const {container} = render(<HistorySidebar history={pathHistory20} />);
    expect(container.getElementsByClassName('rf-history-path-list__history-element')).toHaveLength(4);
  })

  it('should render HistorySidebar with 4 steps when 2 approved, 3 - didn\'t approve', () => {
    const {container} = render(<HistorySidebar history={pathsHistory3} />);
    expect(container.getElementsByClassName('rf-history-path-list__history-element')).toHaveLength(4);
  })

  it('should render HistorySidebar with 4 steps when approved step is second to last one', () => {
    const {container} = render(<HistorySidebar history={pathsHistory4} />);
    expect(container.getElementsByClassName('rf-history-path-list__history-element')).toHaveLength(4);
  })

  it('should render HistorySidebar with 4 steps when approved step is last one', () => {
    const {container} = render(<HistorySidebar history={pathsHistory5} />);
    expect(container.getElementsByClassName('rf-history-path-list__history-element')).toHaveLength(4);
  })

  it('should render HistorySidebar with "You" user', () => {
    const {container} = render(<HistorySidebar history={pathHistory6} />);
    expect(container.getElementsByClassName('rf-history-path-list__history-element')).toHaveLength(3);
  })
})