import React from 'react';
import {render, screen} from '@testing-library/react';
import History from "./History";

import { paths, attachments } from './History.mock';

describe('Test <History /> component', () => {
    it('should render History component', () => {
        render(<History history={paths} attachments={attachments}  />)
    })
});