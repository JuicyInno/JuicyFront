import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import CommentTile  from './CommentTile';
// import { usersMocks } from '../../popups/FindUsers/users.mocks';
// import userEvent from "@testing-library/user-event";
// import {byText} from "testing-library-selector";

describe('Test <CommentTile/> component', () => {
    it('should render CommentTile component', () => {
        render(<CommentTile />)
    });
});
