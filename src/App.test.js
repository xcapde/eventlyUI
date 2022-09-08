import { render, screen } from '@testing-library/react';
import App from './App';

beforeEach(()=>{
  render(<App/>);
})

test('renders home from sidebar', () => {
  const sideBarItem = screen.getByText(/home/i);
  expect(sideBarItem).toBeInTheDocument();
});

test('renders upload from sidebar', ()=>{
  const sideBarItem = screen.getByText(/upload/i);
  expect(sideBarItem).toBeInTheDocument();
})
