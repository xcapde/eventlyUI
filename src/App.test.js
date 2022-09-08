import { render, screen } from '@testing-library/react';
import App from './App';
import { MinimalCard } from './components/cards/MinimalCard';
import { EventFeed } from './components/feeds/EventFeed';

// eslint-disable-next-line testing-library/no-render-in-setup
// beforeEach(()=>{ render(<Sidebar/>)});

test('renders join button from card',  () => {
  render(<MinimalCard/>)
  const sideBarItem =  screen.getByRole('button',{name:/joinbutton/i});
  expect(sideBarItem).toBeInTheDocument();
});

test('renders xocolatada title from API', async ()=>{
  render(<EventFeed/>)
  const sideBarItem = await screen.findAllByText(/xocolatada/i);
  expect(sideBarItem).toBeTruthy();
})
