import React from 'react';
import Controls from './Controls';
import {render, cleanup} from 'react-testing-library'
// import {render} from '@testing-library/react'

afterEach(cleanup);
describe('<Controls />', () => {
    it('renders without crashing',  () => {
        render(<Controls />);
    });
   it('open and unlocked', () => {
       const closeSpy = jest.fn();
       const lockSpy = jest.fn();

       const { getByText} = render (<Controls closed={false} locked ={false} toggleClosed={closeSpy} toggleLocked ={lockSpy} />);
       const closeBtn = getByText(/close gate/i);
       const lockBtn = getByText(/lock gate/i);

       expect (closeBtn.disabled).toBeFalsy();
       expect(lockBtn.disabled).toBeTruthy();

       //checking button click
   })
})