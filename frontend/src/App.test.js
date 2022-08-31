import { render, screen } from '@testing-library/react';
import App from './App';

test('renders coding percentile element', () => {
  render(<App />);
  const codingElement = screen.getByText(/Coding percentile:/i);
  expect(codingElement).toBeInTheDocument();
});

test('renders communication percentile element', () => {
  render(<App />);
  const communicationElement = screen.getByText(/Communication percentile:/i)
  expect(communicationElement).toBeInTheDocument();
});

test('renders input form', () => {
  render(<App />);
  const form = screen.getByPlaceholderText(/Candidate Id/i)
  expect(form).toBeInTheDocument();
})

test('input form only accepts numbers', () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/Candidate Id/i)
  expect(input.type).toEqual('number')
})

test('fetching candidate 925 returns a list of 31 people', async () => {
  render(<App />);
  const res = await fetch(`/percentile/925`)
  const { scores } = await res.json()
  expect(scores.length).toEqual(31)
})

test('fetching candidate 932 returns a coding percentile result of 96.77', async () => {
  render(<App />);
  const res = await fetch(`/percentile/932`)
  const { percentile } = await res.json()
  expect(percentile.coding_percentile.toFixed(2)).toEqual('96.77')
})

test('fetching candidate 925 returns a coding percentile result of 3.23 and communication percentile of 0.00', async () => {
  render(<App />);
  const res = await fetch(`/percentile/925`)
  const { percentile } = await res.json()
  expect(percentile.coding_percentile.toFixed(2)).toEqual('3.23')
  expect(percentile.communication_percentile.toFixed(2)).toEqual('0.00')
})


test('fetching candidate 912 returns a coding percentile result of 74.19 and communication percentile of 87.10', async () => {
  render(<App />);
  const res = await fetch(`/percentile/912`)
  const { percentile } = await res.json()
  expect(percentile.coding_percentile.toFixed(2)).toEqual('74.19')
  expect(percentile.communication_percentile.toFixed(2)).toEqual('87.10')
})
