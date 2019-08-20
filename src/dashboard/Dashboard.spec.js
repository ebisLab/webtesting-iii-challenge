import React from 'react';
import Dashboard from './Dashboard';
import {render} from 'react-testing-library'
// import {render} from '@testing-library/react'

describe('<Dashboard />', () => {
    it('renders without crashing',  () => {
        render(<Dashboard />);
    });
    it('default state open and unlocked', () => {
        const { getByText} = render(<Dashboard />);
        getByText(/^open$/i);
        getByText(/^unlocked$/i)

        const lockBtn = getByText(/^lock gates$/i);
        const closeBtn = getByText(/^close gate$/i);
        // expect(queryByText(/closed/i)).toBe();
    })
})