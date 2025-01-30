import { describe, expect, it } from 'vitest';
import {render, screen} from '@testing-library/react'
import {Button} from './Button'
import { ICounterProps } from 'src/components/counter/Counter';

describe('Button component', function () {
  it('should render Button component with text "Test button"',() => {
    render(<Button>Test button</Button>)
    const button = screen.getByText(/test button/i)
    expect(button).toBeInTheDocument()
  })

  it('should render Button component with truncated text "Some test text for Bu…"',() => {
    const testText = 'Some test text for Button component'
    const testTruncatedText = 'Some test text for Bu…'

    render(<Button>{testText}</Button>)
    const button = screen.getByText(testTruncatedText)
    expect(button).toBeInTheDocument()
  })

  it('should render Button component with text and counter',() => {
    const testCounter: ICounterProps = {
      quantity: 23
    }

    render(<Button counter={testCounter}>Test text</Button>)
    const counter = screen.getByText(23)
    const button = screen.getByText(/test text/i)
    expect(button).toBeInTheDocument()
    expect(counter).toBeInTheDocument()
  })

  it('should render Button component in loading state',() => {
    render(<Button isLoading>Test text</Button>)
    const loadingIndicator = screen.getByTestId('loading-indicator')
    const button = screen.queryByText(/test text/i)

    expect(loadingIndicator).toBeInTheDocument()
    expect(button).not.toBeVisible()
  })
});