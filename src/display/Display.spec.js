import React from 'react';
import Display from './Display';
import {render} from 'react-testing-library'
import '@testing-library/jest-dom/extend-expect'
// import {render} from '@testing-library/react'

describe('<Display />', () => {
    it('renders without crashing',  () => {
        render(<Display />);
    });
    //check for correct test
    it('open and unlocked', () => {
        const { getByText, queryByText} = render(<Display closed={false} locked ={false} />);
        //check for correct test
        const unlock = getByText(/unlocked/i);
        const open = getByText(/open/i)
        getByText(/unlocked/i);
        getByText(/open/i)
        expect(queryByText(/closed/i)).toBe(null);
    })
})