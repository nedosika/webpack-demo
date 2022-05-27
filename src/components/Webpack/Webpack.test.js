import * as React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import Webpack from 'Components/Webpack';

test('test button', () => {
    render(<Webpack/>);
    expect(screen.getByRole('button', {name: 'test'})).toBeEnabled()
})