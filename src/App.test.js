import { render, screen } from '@testing-library/react';
import App from './App';

// beforeEach(()=>{
//   render(<App/>);
// })
test('renders home from sidebar', async () => {
  render(<App/>);
  const sideBarItem = await screen.findByRole('link',{name:/content/i});
  expect(sideBarItem).toBeInTheDocument();
});
test('renders upload from sidebar', ()=>{
  render(<App/>);
  const sideBarItem = screen.getByText(/upload/i);
  expect(sideBarItem).toBeInTheDocument();
})