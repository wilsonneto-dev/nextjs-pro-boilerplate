import { render, screen } from '@testing-library/react'

import Home from '.'

jest.mock('ui/components/Main', () => {
  return {
    __esModule: true,
    default: function MainMock() {
      return <div data-testid="main-component"></div>
    }
  }
})

describe('<Home />', () => {
  it('should render the <Main /> component', () => {
    const { container } = render(<Home />)

    expect(screen.getByTestId('main-component')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
