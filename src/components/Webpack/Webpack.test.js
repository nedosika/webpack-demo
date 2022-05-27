import * as React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import Webpack from '../Webpack';

test('test button', () => {
    render(<Webpack/>);
    expect(screen.getByRole('button', {name: 'test'})).toBeEnabled()
})