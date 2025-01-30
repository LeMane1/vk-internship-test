import { describe, expect, it } from 'vitest';
import {render, screen} from '@testing-library/react'
import App from './App'

describe('App component', function () {
  it('should render App component with 2 child components',() => {
    render(<App/>)
    const counterTitle = screen.getByText(/counter/i)
    const counter = screen.getByText(12)
    expect(counterTitle).toBeInTheDocument()
    expect(counter).toBeInTheDocument()

    const buttonTitle = screen.getByText(/button/i)
    const button = screen.getByRole('button')
    expect(buttonTitle).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })
});