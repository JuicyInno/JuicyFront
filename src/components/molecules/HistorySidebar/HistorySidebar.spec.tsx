import {render} from "@testing-library/react";
import HistorySidebar from "../HistorySidebar";
import {pathsHistory} from "../HistorySidebar/mock";
import React from "react";

describe('Test <HistorySidebar/> component', () => {
  it('should render HistorySidebar', () => {
    render(<HistorySidebar history={pathsHistory}/>);
  })
})