import { describe, expect, it } from 'vitest';
import {render, screen} from '@testing-library/react'
import {Counter} from './Counter'

describe('Counter component', function () {
  it('should render Counter component with value "99+"',() => {
    render(<Counter quantity={1000}/>)
    const counter = screen.getByText(/99+/i)
    expect(counter).toBeInTheDocument()
  })

  it('should render Counter component with value "0"',() => {
    render(<Counter quantity={0}/>)
    const counter = screen.getByText(/0/i)
    expect(counter).toBeInTheDocument()
  })

  it('should render Counter component in size 8 without value',() => {
    render(<Counter quantity={99} size={8}/>)
    const counter = screen.queryByText(99)
    expect(counter).not.toBeInTheDocument()
  })

  it('should render Counter component in size 12 without value and with PulseIndicator',() => {
    render(<Counter quantity={99} size={12} hasPulse/>)
    const pulseIndicator = screen.getByTestId('pulse-indicator')
    expect(pulseIndicator).toBeInTheDocument()
  })
});